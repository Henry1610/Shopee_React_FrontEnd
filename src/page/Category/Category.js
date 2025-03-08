import { useParams } from "react-router-dom";
import ProductList from "../../components/CategoryList/ProductList";
import Wrapper from "../../components/Wrapper";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar";

const categories = ["Mỹ phẩm", "Điện tử", "Thời trang", "Gia dụng"];
const brands = ["Apple", "Samsung", "Nike", "Adidas"];
const discounts = ["10%", "20%", "50%"];
const ratings = [4, 5];
const availability = ["Còn hàng", "Sắp hết hàng", "Hết hàng"];
const sortOptions = ["Giá tăng dần", "Giá giảm dần", "Bán chạy nhất", "Đánh giá cao nhất"];

function Category() {
    const {category}=useParams()
    return (
        <div>
            <Navbar />
            <Wrapper>


                <div className="grid grid-cols-5 mt-5 border-b-2 border-[#ee4d2d]">
                    <div className="col-span-1">
                        <h2 className="text-lg font-semibold mb-3">Bộ lọc</h2>

                        {/* Danh mục sản phẩm */}
                        <div>
                            <h3 className="font-semibold">Danh mục</h3>
                            {categories.map((cat) => (
                                <label key={cat} className="block">
                                    <input type="checkbox" className="mr-2" /> {cat}
                                </label>
                            ))}
                        </div>

                        {/* Khoảng giá */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Khoảng giá</h3>
                            <input type="number" placeholder="Từ" className="w p-1 border rounded" />
                            <input type="number" placeholder="Đến" className="w p-1 border rounded mt-1" />
                        </div>

                        {/* Thương hiệu */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Thương hiệu</h3>
                            {brands.map((brand) => (
                                <label key={brand} className="block">
                                    <input type="checkbox" className="mr-2" /> {brand}
                                </label>
                            ))}
                        </div>

                        {/* Đánh giá */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Đánh giá</h3>
                            {ratings.map((rate) => (
                                <label key={rate} className="block">
                                    <input type="radio" name="rating" className="mr-2" /> {rate} sao trở lên
                                </label>
                            ))}
                        </div>

                        {/* Tình trạng hàng */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Tình trạng hàng</h3>
                            {availability.map((status) => (
                                <label key={status} className="block">
                                    <input type="radio" name="availability" className="mr-2" /> {status}
                                </label>
                            ))}
                        </div>

                        {/* Giảm giá */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Giảm giá</h3>
                            {discounts.map((disc) => (
                                <label key={disc} className="block">
                                    <input type="radio" name="discount" className="mr-2" /> {disc} trở lên
                                </label>
                            ))}
                        </div>

                        {/* Sắp xếp */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Sắp xếp theo</h3>
                            <select className="w-full p-1 border rounded">
                                <option value="">Chọn</option>
                                {sortOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-span-4 ">
                        <ProductList category={category}/>
                    </div>
                </div>
                <Footer/>
            </Wrapper>


        </div>
    )

}

export default Category;