import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'; // different import path!
import { useState } from 'react';

function Search() {
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const [hide, setHide] = useState(true)
    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setResult(searchValue)

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
                visible={hide && result.length > 0}
                render={(attrs => (<div tabIndex="-1" {...attrs}>
                    <table className="bg-white shadow-lg rounded-md w- border w-full  lg:w-[800px] text-black" >
                        <thead >
                            <tr className="bg-gray-100">
                                <th className="px-3 py-1 text-left ">Sản phẩm</th>
                            </tr>
                        </thead>

                    </table>
                </div>))}>
                <div className="flex-1  relative ">
                    <input
                        onFocus={() => setHide(true)}
                        onChange={handleChange}
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


            <div className="w-full flex flex-wrap gap-2 text-xs text-white mt-2 ">
                {["Máy iphone 6", "Máy iphone 7", "Laptop Gaming", "Tai nghe Bluetooth", "Bàn phím cơ"].map((item, index) => (
                    <a key={index} href="#" className="hover:underline ">
                        {item}
                    </a>
                ))}
            </div>

        </div >);
}

export default Search;