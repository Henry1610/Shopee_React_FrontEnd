import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../layouts/Navbar";
import Wrapper from "../../components/Wrapper";
import { faFacebook, faFacebookMessenger, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import MostLike from "../../components/MostLike";
import { useParams, useSearchParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { faShieldHalved, faTruck, faArrowLeft, faStore } from "@fortawesome/free-solid-svg-icons";


const ratings = [
    { stars: "Tất Cả" },
    { stars: 5 },
    { stars: 4 },
    { stars: 3 },
    { stars: 2 },
    { stars: 1 },
];
const services = [
    { icon: faShieldHalved, title: "Guarantee", subtitle: "Quality Checked" },
    { icon: faTruck, title: "Free Shipping", subtitle: "Free On All Products" },
    { icon: faArrowLeft, title: "Free Return", subtitle: "Within 7 Days" },
    { icon: faStore, title: "Consultancy", subtitle: "Lifetime 24/7/365" },
];

function ProductDetail() {
    const [numberProduct, setNumberProduct] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const { addToCart } = useContext(CartContext)
    const { id } = useParams();
    const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`)
    const rate=parseInt(searchParams.get('rate')) 
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data available</p>; // Tránh lỗi khi data là null
    const originalPrice = (data.price / (1 - data.discountPercentage / 100)).toFixed(2);
    const increase = (stock) => {
        if (numberProduct === stock) {
            Swal.fire({
                title: "Cảnh báo!",
                text: `Số lượng không thể vượt quá ${stock}!`,
                icon: "warning",
                confirmButtonText: "OK",
            });
        }

        else {
            setNumberProduct(prev => prev + 1);
        }
    };
    const decrease = () => {
        if (numberProduct === 1) {
            Swal.fire({
                title: "Lưu ý!",
                text: "Số lượng tối thiểu là 1!",
                icon: "info",
                confirmButtonText: "OK",
            });
        }
        else {
            setNumberProduct(prev => prev - 1);
        }
    };
    const handleChoose = (key, value) => {
        
        const url = new URLSearchParams(searchParams)
        url.set(key, value === 'Tất Cả' ? 0 : value);
        setSearchParams(url)

    }
    return (<div className="max-w-[2000px]">


        <Navbar />
        <Wrapper >

            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-5 p-3 bg-white top-0 ">

                    <div className="col-span-2">
                        <div>
                            <img src={data.thumbnail} alt="loi" className="w-full" />
                        </div>
                        <div className="flex justify-center">
                            <div className="flex items-center space-x-3 mt-4">
                                <div className="font-bold">Share: </div>
                                <button className="text-blue-600 text-xl">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </button>
                                <button className="text-blue-500 text-xl">
                                    <FontAwesomeIcon icon={faFacebookMessenger} />
                                </button>
                                <button className="text-blue-400 text-xl">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </button>
                                <button className="text-red-600 text-xl">
                                    <FontAwesomeIcon icon={faPinterest} />
                                </button>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>

                        </div>
                    </div>
                    <div class="col-span-3  p-4  ">
                        <h1 class="text-lg md:text-xl font-semibold">
                            [{data.brand}] {data.title}
                        </h1>


                        <div class="flex items-center space-x-2 mt-2 text-gray-600">


                            <div class="flex items-center text-yellow-500">
                                {[...Array(Math.round(data.rating))].map((_, index) => (
                                    <span key={index}>
                                        ★
                                    </span>
                                ))}
                            </div>
                            <span>{data.rating}</span>
                            <span>|</span>
                            <span>{data.reviews.length}k Đánh Giá </span>
                            <span>|</span>
                            <span>{data.reviews.length}k Đã Bán</span>
                        </div>

                        <div className="bg-orange-100 p-4 mt-3 rounded-md">
                            <span className="text-2xl font-bold text-red-500">₫{data.price}</span>
                            <span className="text-gray-500 line-through ml-2">₫{originalPrice}</span>
                            <span className="text-xs text-red-500 ml-2 p-[1px] bg-orange-200">-{data.discountPercentage}%</span>
                        </div>

                        <div class="mt-3 space-x-2">
                            <span class="bg-red-100 text-red-500 px-3 py-1 rounded">Giảm ₫20k</span>
                            <span class="bg-red-100 text-red-500 px-3 py-1 rounded">Giảm ₫30k</span>
                        </div>

                        <div class=" text-gray-600 flex flex-row">
                            <div className="mt-3">
                                <div className="max-w-md mx-auto bg-white p-4 rounded-lg ">
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 ">
                                        <li>
                                            <span className="font-semibold">Brand:</span> {data.brand}
                                        </li>
                                        <li>
                                            <span className="font-semibold">SKU:</span> {data.sku}
                                        </li>
                                        <li>
                                            <span className="font-semibold">Weight:</span> {data.weight} g
                                        </li>
                                        <li>
                                            <span className="font-semibold">Dimensions:</span>
                                            <ul className="list-disc pl-5 space-y-1 text-gray-600 ">
                                                <li className="mt-3">Width: {data.dimensions.width} cm</li>
                                                <li>Height: {data.dimensions.height} cm</li>
                                                <li>Depth: {data.dimensions.depth} cm</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" mx-auto space-y-4">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center bg-white border border-gray-300   w-[300px] p-3"
                                    >
                                        <div className=" text-white rounded-full">
                                            <FontAwesomeIcon icon={service.icon} className="text-black text-xl" />

                                        </div>
                                        <div className="ml-4">a
                                            <h5 className="text-md font-semibold">{service.title}</h5>
                                            <p className="text-gray-500 text-xs">{service.subtitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>



                        <div class="mt-4 flex items-center" >
                            <h3 class="font-semibold">Số lượng:</h3>
                            <div class="flex items-center m-2">
                                <button class="border px-3 py-2 w-10 text-center" onClick={() => decrease()}>-</button>
                                <input type="text" value={numberProduct} class="text-center border w-10 py-2" />
                                <button class="border px-3 py-2 w-10 text-center" onClick={() => increase(data.stock)}>+</button>
                            </div>
                            <div className="text-gray-500 text-sm">{data.stock} sản phẩm có sẵn ({data.availabilityStatus})</div>
                        </div>


                        <div class="mt-6 flex space-x-4">
                            <button class="w-[170px] bg-orange-500 text-white py-2  hover:bg-orange-600" onClick={() => addToCart(data, numberProduct)}>Thêm Vào Giỏ Hàng</button>
                            <button class="w-[170px] bg-red-500 text-white py-2  hover:bg-red-600">Mua Ngay</button>
                        </div>
                    </div>
                </div>
            </div>




            <div class="flex items-center justify-start gap-10  bg-white mt-3 p-6 flex-wrap">
                <div class="flex items-center space-x-7 ">
                    <img src={data.images} alt="Avatar" class="w-16 h-16 rounded-full border-2" />
                    <div>
                        <div className="flex gap-1">
                            <h2 class="text-lg font-semibold">{data.brand}</h2>
                            <MostLike />

                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                            <p class="text-sm text-gray-500">Online </p>
                        </div>
                        <div class="mt-2 flex space-x-2">
                            <button class="border px-3 py-1 text-sm rounded flex items-center">
                                <span class="text-red-500">&#128172;</span> Chat Ngay
                            </button>
                            <button class="border px-3 py-1 text-sm rounded flex items-center">
                                <span class="text-gray-700">&#128717;</span> Xem Shop
                            </button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-9 text-sm">
                    <div>
                        <p class="text-gray-500">Đánh Giá</p>
                        <p class="text-red-500 font-semibold">{data.reviews.length}k</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Tỉ Lệ Phản Hồi</p>
                        <p class="text-red-500 font-semibold">100%</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Tham Gia</p>
                        <p class="text-red-500 font-semibold">10 tháng trước</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Sản Phẩm</p>
                        <p class="text-red-500 font-semibold">915</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Thời Gian Phản Hồi</p>
                        <p class="text-red-500 font-semibold">trong vài phút</p>
                    </div>
                    <div>
                        <p class="text-gray-500">Người Theo Dõi</p>
                        <p class="text-red-500 font-semibold">87</p>
                    </div>
                </div>
            </div>
            <div className=" mx-auto bg-white  p-6 mt-3">
                <h2 className="text-xl font-bold mb-2">{data.brand} - {data.category}</h2>
                <p className="text-gray-600 mb-4 text-sm">{data.description}</p>




                {/* Tags */}
                <div className="mb-4">
                    <h3 className="font-semibold">Tags:</h3>
                    <div className="flex space-x-2 mt-1">
                        {data.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* SKU, Kích thước & Trọng lượng */}
                <div className="border-t pt-4 text-sm flex flex-col gap-3">
                    <p><span className="font-semibold">SKU:</span> {data.sku}</p>
                    <p><span className="font-semibold">Weight:</span> {data.weight}g</p>
                    <p className="font-semibold">Dimensions:</p>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li><span className="font-medium">Width:</span> {data.dimensions.width} cm</li>
                        <li><span className="font-medium">Height:</span> {data.dimensions.height} cm</li>
                        <li><span className="font-medium">Depth:</span> {data.dimensions.depth} cm</li>
                    </ul>

                    <p><span className="font-semibold">Warranty:</span> {data.warrantyInformation}</p>
                </div>
            </div>
            <div className="mt-3 p-6 bg-white">
                <div className="mt-3 p-6 bg-white">
                    <div className="flex flex-wrap items-center justify-between bg-orange-50 p-6">
                        {/* Phần đánh giá sao */}
                        <div className="flex items-center space-x-2 text-2xl flex-wrap">
                            <p className="text-red-500 font-bold">{data.rating}</p>
                            <p className="text-red-500 font-bold">/ 5</p>
                            <div className="text-red-500">★★★★★</div>
                        </div>

                        {/* Phần bộ lọc đánh giá */}
                        <div className="flex flex-col w-full md:w-auto gap-3 font-medium rounded-md">
                            <div className="flex flex-wrap space-x-2 items-center gap-1">
                                {ratings.map((rating, index) => (
                                    
                                    <button
                                        key={index}
                                        className="border px-4 py-2 text-sm rounded bg-white hover:bg-[#ee4d2d] hover:text-white"
                                        onClick={()=>handleChoose('rate',rating.stars)}
                                    >
                                        {rating.stars} Sao 
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>





                <div className="mt-6 border-t pt-4">
                    {data.reviews.filter(review => rate === 0||rate===review.rating).map((review, index) => (

                        <div key={index} className="flex space-x-4 mb-4" >
                            <img
                                src="https://down-vn.img.susercontent.com/file/vn-11134233-7r98o-lp3nls93lk63d2_tn"
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h3 className="font-semibold">{review.reviewerName}</h3>
                                <p className="text-red-500">{"★".repeat(review.rating)}</p>
                                <p className="text-xs text-gray-500">{review.date}</p>
                                <p className="mt-2 text-sm">{review.comment}</p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </Wrapper >
    </div >);
}

export default ProductDetail;