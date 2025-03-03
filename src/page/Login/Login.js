import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../../assets/images";
import Wrapper from "../../components/Wrapper";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/Footer/Footer";

function Login() {
    return (
        <div>
            <div className="items-center m-5">
                <div className="max-w-[1200px] flex justify-between mx-auto items-center">
                    <div className="flex">
                        <img width="150px" src={images.logoOrange} />
                    </div>
                    <div className="text-[#ee4d2d] text-base">Bạn cần sự giúp đỡ</div>
                </div>
            </div>

            <div className="bg-[#ee4d2d]">
                <div className="relative w-full max-w-[1200px] mx-auto">
                    <img
                        src="https://down-vn.img.susercontent.com/file/sg-11134004-7rccz-m6hsc8ddtji3dc"
                        className="w-full h-auto object-cover"
                        alt=""
                    />
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 sm:p-10 rounded-lg shadow-lg flex flex-col w-[90%] max-w-[400px] sm:right-0 sm:w-full">
                        <div className="mb-5">
                            <span className="text-xl">Đăng nhập</span>
                        </div>
                        <div>
                            <form>
                                <input
                                    className="w-full py-2 px-4 mb-3 border rounded  text-start "
                                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                                />
                                <div>
                                    <input
                                        className="w-full py-2 px-4 mb-3 border rounded text-start"
                                        placeholder="Mật khẩu"
                                    />
                                    <FontAwesomeIcon />
                                </div>
                                <button className="w-full mt-4 bg-[#ee4d2d] text-white py-3 rounded hover:bg-orange-600">
                                    ĐĂNG NHẬP
                                </button>
                            </form>

                            <span className="text-sm ">Quên mật khẩu</span>
                            <div className="flex items-center">
                                <div className="flex-1 border-b border-gray-400"></div>
                                <div className="mx-4 text-gray-500">HOẶC</div>
                                <div className="flex-1 border-b border-gray-400"></div>
                            </div>

                            <div className="flex gap-2 m-3">
                                <button className="border-2 border-gray-300 w-full p-1">
                                    <FontAwesomeIcon icon={faFacebook} className="text-blue-500" /> Facebook
                                </button>
                                <button className="border-2 border-gray-300 w-full">
                                    <FontAwesomeIcon icon={faGoogle} className="text-red-500" /> Google
                                </button>

                            </div>
                        </div>
                        <div className="text-gray-400 text-sm">
                            Bạn mới biết đến Shopee? <span className="text-[#ee4d2d]">Đăng ký</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
       
    );
}

export default Login;
