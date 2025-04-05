import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import useSearch from '../../hooks/useSearch';
import useCategories from '../../hooks/useCategories';

function Search() {
    const [hide, setHide] = useState(true);
    const { resultInput, setResultInput, products, loading: searchLoading } = useSearch();
    const { categories, loading: categoriesLoading } = useCategories();

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setResultInput(searchValue);
        }
    };

    const handleHide = () => {
        setHide(false);
    };

    return (
        <div>
            <Tippy
                onClickOutside={handleHide}
                interactive
                visible={hide && resultInput.length > 0}
                render={(attrs => (<div tabIndex="-1" {...attrs}>
                    <div className="bg-white shadow-lg rounded-md w- border w-full lg:w-[800px] text-black">
                        <div>
                            <div className="bg-gray-100">
                                <div className="px-3 py-1 text-left">Sản phẩm</div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            {searchLoading ? (
                                <div className='flex justify-center items-center p-3'>
                                    <ClipLoader color="#ee4d2d" size={30} />
                                    <span className="ml-2 text-gray-600">Đang tìm kiếm...</span>
                                </div>
                            ) : products.length === 0 ? (
                                <div className='text-center text-lg p-3 rounded-md'>Không tìm thấy sản phẩm!</div>
                            ) : (
                                products.map((product) => (
                                    <Link to={`/products/${product.id}`} className="border-b hover:bg-gray-50 transition-colors" key={product.id}>
                                        <div className="px-3 py-2">{product.title}</div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                </div>))}>
                <div className="flex-1 relative">
                    <input
                        onFocus={() => setHide(true)}
                        onChange={handleChange}
                        value={resultInput}
                        type="text"
                        placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
                        className="w-full lg:w-[800px] text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ee4d2d] text-white px-2 py-1 rounded-md hover:bg-orange-600 transition-colors">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 w-4" />
                    </button>
                </div>
            </Tippy>

            <div className="w-full flex flex-wrap gap-2 text-xs text-white mt-2">
                {categoriesLoading ? (
                    <div className="flex items-center">
                        <ClipLoader color="#ffffff" size={15} />
                        <span className="ml-2">Đang tải danh mục...</span>
                    </div>
                ) : (
                    categories.slice(0, 11).map((category, index) => (
                        <Link key={index} to={`/products?category=${category}`} className="hover:underline">
                            {category}
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}

export default Search;