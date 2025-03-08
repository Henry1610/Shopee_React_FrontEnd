import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function RegisterForm({switchToLogin}) {
    return ( <div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 sm:p-10 rounded-lg shadow-lg flex flex-col w-[90%] max-w-[400px] sm:right-0 sm:w-full">

            <div className="mb-5">
                <span className="text-xl font-medium">Đăng ký</span>

            </div>

            <div>
                <form>
                    <input
                        className="w-full py-2 px-4 mb-3 border rounded  text-start text-sm"
                        placeholder="Email/Số điện thoại/Tên đăng nhập"
                    />
                    <div>
                        <input
                            className="w-full py-2 px-4 mb-3 border rounded text-start text-sm"
                            placeholder="Mật khẩu"
                        />

                        <input
                            className="w-full py-2 px-4 mb-3 border rounded text-start text-sm"
                            placeholder="Nhập lại mật khẩu"
                        />
                    </div>
                    <button className="w-full mt-4 bg-[#ee4d2d] text-white py-3 rounded hover:bg-orange-600">
                        ĐĂNG KÝ
                    </button>
                </form>

                <div className="flex items-center mt-2">
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

            <div className="text-gray-400 text-sm  text-start">
                Bạn đã có tài khoản? <button className="text-[#ee4d2d]" onClick={switchToLogin}>Đăng nhập</button>
            </div>
        </div>
    </div> );
}

export default RegisterForm;