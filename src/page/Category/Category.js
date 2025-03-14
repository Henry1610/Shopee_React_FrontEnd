import ProductList from "../../components/CategoryList/ProductList";
import Wrapper from "../../components/Wrapper";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar";
import useFetch from "../../useFetch";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const discounts = ["5", "10", "15", "20"];
const ratings = [2, 3, 4, 5];
const availability = ["Còn hàng", "Sắp hết hàng", "Hết hàng"];
const sortOptions = ["Giá tăng dần", "Giá giảm dần", "Đánh giá cao nhất"];
const price = [[0, 10000], [5, 10], [11, 50], [51, 100]]

function Category() {
    const { data, loading, err } = useFetch('https://dummyjson.com/products/category-list')

    const [visibleCount, setVisibleCount] = useState(4);
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedCategories = searchParams.get("category")?.split(",") || [];
    const selectedRate = searchParams.get('rate') || 1
    const selectedCondition = searchParams.get("condition");
    const selectedDiscount = searchParams.get("discount");
    

    const handleToggle = () => {
        setVisibleCount(visibleCount === 4 ? 7 : 4);
    };

    const updateFilter = (key, value) => {

        const currentParams = new URLSearchParams(searchParams)//lấy url
        let arrayValue = currentParams.get(key)?.split(",") || []//chuyển thành mảng ngăn cách bằng dấu ,
        if (arrayValue.includes(value)) {
            arrayValue = arrayValue.filter(v => v !== value)
        }
        else {
            arrayValue.push(value)
        }

        if (arrayValue.length > 0) {
            currentParams.set(key, arrayValue.join(","))//chuyển lại thành chuỗi
        }
        else {
            currentParams.delete(key)
        }
        setSearchParams(currentParams)
    }
    const updateFilterRadio = (key, value) => {


        const currentParams = new URLSearchParams(searchParams); // Lấy URL
        if (Array.isArray(value)) {
            currentParams.set(`${key}_min`, value[0]); // price_min=0
            currentParams.set(`${key}_max`, value[1]); // price_max=10000
        }
        else {
            currentParams.set(key, value); // Cập nhật giá trị duy nhất

        }
        setSearchParams(currentParams);
    }
    const handleDeleteOption=()=>{
        setSearchParams('')
    }
    function removeVietnameseTones(str) {
        return str.normalize("NFD") // Tách dấu khỏi chữ cái
            .replace(/[\u0300-\u036f]/g, "") // Xóa dấu
            .replace(/đ/g, "d").replace(/Đ/g, "D") // Chuyển "đ" thành "d"
            .replace(/\s+/g, "") // Xóa dấu cách
            .toLowerCase(); // Chuyển thành chữ thường
    }

    return (
        <div>
            <Navbar />
            <Wrapper>


                <div className="grid grid-cols-5 mt-5 border-b-2 border-[#ee4d2d] pt-[100px] pb-3">
                    <div className="col-span-1">
                        <h2 className="text-lg font-semibold mb-3">Bộ lọc</h2>

                        {/* Danh mục sản phẩm */}
                        {data && data.length > 0 ? (
                            <>
                                {data.slice(0, visibleCount).map((cat, index) => (
                                    <label key={index} className="block">
                                        <input 
                                        checked={selectedCategories.includes(cat)}
                                        type="checkbox"
                                            className="mr-2"
                                            onChange={e => updateFilter("category", cat)} /> {cat}
                                    </label>
                                ))}
                                {data.length > 4 && (
                                    <button
                                        onClick={handleToggle}
                                        className="mt-2 text-blue-500 hover:underline"
                                    >
                                        {visibleCount === 4 ? "Xem thêm" : "Thu gọn"}
                                    </button>
                                )}
                            </>
                        ) : (
                            !loading && <p>Không có danh mục nào.</p>
                        )}

                        {/* Khoảng giá */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Khoảng giá</h3>
                            <select
                                className="w-full p-1 border rounded"
                                
                                onChange={(e) => {
                                    const value =  e.target.value.split(",").map(Number) ;
                                    if(value)
                                    {
                                        updateFilterRadio("price", value);

                                    }
                                }}
                            >
                                <option value=" ">Chọn</option>

                                {price.map((v, index) => (
                                    <option className="font-medium" key={index} value={v.join(",")}  >
                                        
                                        {v[0].toFixed(2)} $ - {v[1].toFixed(2)} $
                                    </option>
                                ))}
                            </select>


                        </div>

                        {/* Thương hiệu
                        <div className="mt-3">
                            <h3 className="font-semibold">Thương hiệu</h3>
                            {brands.map((brand) => (
                                <label key={brand} className="block">
                                    <input type="checkbox" className="mr-2" /> {brand}
                                </label>
                            ))}
                        </div> */}

                        {/* Đánh giá */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Đánh giá</h3>
                            {ratings.map((rate) => (
                                <label key={rate} className="block">
                                    <input type="radio" name="rating" checked={parseInt(selectedRate)===parseInt(rate)} value={rate} className="mr-2" onChange={() => updateFilterRadio('rate', rate)} /> {rate} sao trở lên
                                </label>
                            ))}
                        </div>

                        {/* Tình trạng hàng */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Tình trạng hàng</h3>
                            {availability.map((status) => (
                                <label key={status} className="block">
                                    <input type="radio" name="availability" checked={selectedCondition===removeVietnameseTones(status)} className="mr-2" value={status} onChange={() => { updateFilterRadio('condition', removeVietnameseTones(status)) }} /> {status}
                                </label>
                            ))}
                        </div>

                        {/* Giảm giá */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Giảm giá</h3>
                            {discounts.map((disc) => (
                                <label key={disc} className="block">
                                    <input type="radio" name="discount" className="mr-2" checked={selectedDiscount===disc} value={disc} onChange={() => updateFilterRadio('discount', disc)} /> {disc}% trở lên
                                </label>
                            ))}
                        </div>

                        {/* Sắp xếp */}
                        <div className="mt-3">
                            <h3 className="font-semibold">Sắp xếp theo</h3>
                            <select className="w-full p-1 border rounded"
                                onChange={(e) => {
                                    const value = removeVietnameseTones(e.target.value)
                                    if (value) {
                                        updateFilterRadio('sort', value)
                                    }
                                    else{
                                        return
                                    }
                                }}>
                                <option value=" ">Chọn</option>
                                {sortOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                        <div className="bg-red-500 shadow-md rounded-md mt-3">
                            <button className="text-white font-bold  p-3" onClick={()=>handleDeleteOption()}>Xoá hết bộ lọc</button>
                        </div>
                    </div>
                    <div className="col-span-4 ">
                        <ProductList />
                    </div>
                </div>
                <Footer />
            </Wrapper>


        </div>
    )

}

export default Category;