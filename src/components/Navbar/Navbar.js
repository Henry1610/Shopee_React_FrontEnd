import { Link } from "react-router-dom";
import images from "../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
function Navbar() {
    return (
        <div className=" bg-gradient-to-t from-[#ee4d2d] to-[#d0011b]  text-white ">
            <div className="max-w-[1200px] w-full mx-auto px-[1rem]">
                {/* Top Banner */}
                <div className="flex justify-between items-center text-xs font-normal p-1">
                    <div className="flex space-x-1 link-item">
                        <Link to="/seller" className="hover:underline">Kênh người bán</Link>
                        <a href="#" className="hover:underline">Trở thành người bán Shopee</a>
                        <a href="#" className="hover:underline">Tải ứng dụng</a>
                        <a href="#" className="hover:underline">Kết nối</a>
                        

                    </div>
                    
                    <div className="flex space-x-4 text-xs">
                        <a href="#" className="hover:underline ">Thông báo</a>
                        <a href="#" className="hover:underline">Hỗ trợ</a>
                        <a href="#" className="hover:underline">Tiếng Việt</a>
                        <div className="flex space-x-2 pl-3">
                            <Link to="/register" className="hover:underline ">Đăng Ký</Link>
                            <span className="mx-2">|</span>
                            <Link to="/login" className="hover:underline">Đăng Nhập</Link>
                        </div>
                    </div>
                </div>

                {/* Under Banner */}
                <div className="flex justify-between items-center h-[85px] w-full p-4">
                    {/* Logo */}
                    <div>
                        <Link to="/"><img src={images.logoWhite} alt="Logo" className="w-[162px] h-[50px]" /></Link>
                    </div>

                    {/* Search Bar */}
                    <div  >
                        <div className="flex-1  relative ">
                            <input
                                type="text"
                                placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
                                className="w-full  lg:w-[800px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 "
                            />
                            {/* Button search */}
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ee4d2d] text-white px-2 py-1 rounded-md">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 w-4" />
                            </button>

                        </div>
                        <div className="w-full flex flex-wrap gap-2 text-xs text-white mt-2 ">
                            {["Máy iphone 6", "Máy iphone 7", "Laptop Gaming", "Tai nghe Bluetooth", "Bàn phím cơ"].map((item, index) => (
                                <a key={index} href="#" className="hover:underline ">
                                    {item}
                                </a>
                            ))}
                        </div>

                    </div>


                    {/* Cart */}
                    <div className="">
                        <Link to="/cart" className="relative text-white hover:text-gray-200">
                            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                        </Link>
                    </div>
                </div>

                {/* Suggested Searches */}

            </div>
        </div>
    );
}

export default Navbar;
