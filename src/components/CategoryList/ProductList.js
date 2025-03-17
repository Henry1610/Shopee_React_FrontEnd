import { Star, ShoppingCart } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ProductList() {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const selectedCategories = searchParams.get("category")?.split(",") || [];
    const selectedRate = searchParams.get("rate") || 1;
    const selectedCondition = searchParams.get("condition");
    const selectedDiscount = searchParams.get("discount");
    const selectedSort = searchParams.get("sort");
    const price_min = searchParams.get("price_min") || 0;
    const price_max = searchParams.get("price_max") || Infinity;

    const currentUser = localStorage.getItem("currentUser");

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10; 

    const getAvailability = (stock) => {
        switch (true) {
            case stock === 0: return "hethang";
            case stock <= 10: return "saphethang";
            default: return "conhang";
        }
    };

    
    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchProducts = async () => {
            try {
                let allProducts = [];

                if (selectedCategories.length === 0) {
                    const res = await fetch(`https://dummyjson.com/products`);
                    const data = await res.json();
                    allProducts = data.products;
                } else {
                    const categoryPromises = selectedCategories.map(async (category) => {
                        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
                        const data = await res.json();
                        return data.products;
                    });

                    const categoryProducts = await Promise.all(categoryPromises);
                    allProducts = categoryProducts.flat();
                }

                setProducts(allProducts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [searchParams]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Lọc & sắp xếp sản phẩm
    const filteredProducts = products
        .filter(product => 
            (!selectedCondition || getAvailability(product.stock) === selectedCondition) &&
            product.rating >= selectedRate &&
            product.discountPercentage > (selectedDiscount || 0) &&
            product.price >= price_min &&
            product.price <= (price_max === Infinity ? Number.MAX_VALUE : price_max)
        )
        .sort((a, b) => {
            if (selectedSort === "giatangdan") return a.price - b.price;
            if (selectedSort === "giagiamdan") return b.price - a.price;
            if (selectedSort === "danhgiacaonhat") return b.rating - a.rating;
            return 0;
        });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);


    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex flex-col items-center mb-3">
            <div className="flex pb-5 flex-wrap gap-3 mx-auto justify-center">
                {paginatedProducts.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-[215px] hover:shadow-xl">
                        <Link to={`/products/${product.id}`} className="block relative">
                            <img src={product.thumbnail} alt={product.title} className="w-full h-44 object-cover rounded-lg" />
                            {product.stock < 10 && (
                                <span className="absolute top-2 left-2 bg-[#ee4d2e] text-white text-xs px-2 py-1 rounded">Low Stock</span>
                            )}
                        </Link>
                        <div className="mt-3">
                            <Link to={`/products/${product.id}`} className="block">
                                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 min-h-10">{product.title}</h3>
                            </Link>
                            <p className="text-xs text-gray-500">{product.brand}</p>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-lg font-bold text-[#ee4d2e]">${product.price.toFixed(2)}</p>
                                {product.discountPercentage > 0 && (
                                    <span className="text-xs text-gray-500 line-through">
                                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center mt-1">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span className="text-xs text-gray-700 ml-1">{product.rating} | {product.stock} in stock</span>
                            </div>
                            <button
                                onClick={() =>
                                    currentUser
                                        ? addToCart(product)
                                        : Swal.fire({
                                            title: "Bạn chưa đăng nhập!",
                                            text: "Vui lòng đăng nhập để tiếp tục.",
                                            icon: "warning",
                                            showCancelButton: true,
                                            confirmButtonText: "Đăng nhập",
                                            cancelButtonText: "Hủy",
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                navigate("/login");
                                            }
                                        })
                                }
                                className="mt-3 w-full bg-[#ee4d2e] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#d23c1f] transition-all"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex gap-2 mt-5">
                    <button 
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => goToPage(i + 1)}
                            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-gray-300" : "hover:bg-gray-200"}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button 
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductList;
