import { Link } from "react-router-dom";
import images from "../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import './Navbar.css';
import { useContext } from "react";
import Swal from "sweetalert2";
import { memo } from "react";
import { CartContext } from "../../context/CartContext";
import Search from "../../components/Search/Search";
function Navbar() {
    const { cart } = useContext(CartContext)
    const [currentUser, setCurrentUser] = useState(null);
    const { setCart } = useContext(CartContext)
    useEffect(() => {
        const user = localStorage.getItem("currentUser");
        setCurrentUser(user);
    }, []);

    const handleLogout = () => {
        Swal.fire(
            {
                title: "Bạn có chắc muốn đăng xuất?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Đăng xuất ngay!",
                cancelButtonText: "Hủy",
            }
        ).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("currentUser");
                setCart([])
                setCurrentUser(null);
            }
        })

        //window.location.reload(); // Reload trang để cập nhật giao diện
    };
    return (
        <div className="fixed top-0 left-0 w-full bg-gradient-to-t from-[#ee4d2d] to-[#d0011b] text-white z-50">
            <div className="max-w-[1200px] w-full mx-auto px-[1rem]">
                {/* Top Banner */}
                <div className="flex justify-between items-center text-xs font-normal p-1">
                    <div className="flex space-x-1 link-item">
                        <Link to="/seller" className="hover:underline">Kênh người bán</Link>
                        <a href="#1" className="hover:underline">Trở thành người bán Shopee</a>
                        <a href="#1" className="hover:underline">Tải ứng dụng</a>
                        <a href="#1" className="hover:underline">Kết nối</a>


                    </div>

                    <div className="flex space-x-4 text-xs">
                        <a href="#1" className="hover:underline ">Thông báo</a>
                        <a href="#1" className="hover:underline">Hỗ trợ</a>
                        <a href="#1" className="hover:underline">Tiếng Việt</a>
                        <div className="flex space-x-2 pl-3">
                            {currentUser ? (
                                <>
                                    <span >Xin chào, {currentUser}</span>
                                    <button onClick={handleLogout} className="hover:underline">Đăng xuất</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/register" className="hover:underline">Đăng Ký</Link>
                                    <span className="mx-2">|</span>
                                    <Link to="/login" className="hover:underline">Đăng Nhập</Link>
                                </>
                            )}
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

                    <Search />

                    {/* Cart */}
                    <div className="relative">

                        <Link to={localStorage.getItem('currentUser') ? "/carts" : "/login"} className="relative text-white hover:text-gray-200">
                            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                            {cart.length > 0 && (
                                <span className="absolute -top-5 -right-4 bg-white text-[#ee4d2d] text-sm font-bold px-2 py-[1x] rounded-md">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </div>

                </div>

                

            </div>
        </div>
    );
}

export default memo(Navbar);
