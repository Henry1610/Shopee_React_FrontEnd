import { Link } from "react-router-dom";
import images from "../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Search from "../../components/Search/Search";
function Navbar() {
    const { cart } = useContext(CartContext)

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

                    <Search/>

                    {/* Cart */}
                    <div className="relative">
                        <Link to="/carts" className="relative text-white hover:text-gray-200">
                            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                            {cart.length > 0 && (
                                <span className="absolute -top-5 -right-4 bg-white text-[#ee4d2d] text-sm font-bold px-2 py-[1x] rounded-md">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </div>

                </div>

                {/* Suggested Searches */}

            </div>
        </div>
    );
}

export default Navbar;
