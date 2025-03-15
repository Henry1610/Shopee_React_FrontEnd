import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'; // different import path!
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from "react-router-dom";

function Search() {
    const [resultInput, setResultInput] = useState('')
    const [products, setProductsList] = useState([])
    const [categories, setCategories] = useState([]); // ✅ State để lưu danh mục

    const [loading, setLoading] = useState(false)


    const [hide, setHide] = useState(true)



    useEffect(() => {


        setLoading(true);
        fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(resultInput)}&limit=7`)
            .then((res) => res.json())
            .then((data) => setProductsList(data.products)) // ✅ Tránh lỗi nếu API trả về null
            .catch((error) => console.error('Lỗi khi fetch sản phẩm:', error))
            .finally(() => setLoading(false));

    }, [resultInput]); // ✅ Chỉ fetch API khi `resultInput` thay đổi

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Lỗi khi fetch danh mục:', error));
    }, []);

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setResultInput(searchValue)

        }
    }
    const handleHide = () => {
        setHide(false)
    }
    return (
        <div >
            <Tippy
                onClickOutside={handleHide}
                interactive
                visible={hide && resultInput.length > 0}
                render={(attrs => (<div tabIndex="-1" {...attrs}>
                    <div className="bg-white shadow-lg rounded-md w- border w-full  lg:w-[800px] text-black " >
                        <div >
                            <div className="bg-gray-100">
                                <div className="px-3 py-1 text-left ">Sản phẩm</div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            {loading ? (
                                <div className='text-center text-lg p-3 rounded-md text-white'>🔄 Đang tải sản phẩm...</div>
                            ) : products.length === 0 ? (
                                <div className='text-center text-lg p-3 rounded-md'>Không tìm thấy sản phẩm!</div>
                            ) : (
                                products.map((product) => (
                                    <Link to={`/products/${product.id}`} className="border-b" key={product.id}>
                                        <div className="px-3 py-1">{product.title}</div>
                                    </Link>
                                ))
                            )}
                        </div>

                    </div>
                </div>))}>
                <div className="flex-1  relative ">
                    <input
                        onFocus={() => setHide(true)}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
                        className="w-full  lg:w-[800px] text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 "
                    />
                    {/* Button search */}
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ee4d2d] text-white px-2 py-1 rounded-md">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 w-4" />
                    </button>

                </div>
            </Tippy>


            <div className="w-full flex flex-wrap gap-2 text-xs text-white mt-2">
                {loading ? (
                    <div className="text-white">🔄 Đang tải danh mục...</div>
                ) : (
                    categories.slice(0, 11).map((category, index) => (
                        <Link key={index} to={`/products?category=${category}`} className="hover:underline">
                            {category}
                        </Link>
                    ))
                )}
            </div>

        </div >);
}

export default Search;