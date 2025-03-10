import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function LoginForm({ switchToRegister }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem(`users`)) || [];
        const user = users.find(u => u.email === email && u.password === password)

        if (user) {
            localStorage.setItem("currentUser", email);
            alert("Đăng nhập thành công!");
            navigate("/");
        } else {
            alert("Sai email hoặc mật khẩu!");
        }
    }

    return (<div className="absolute top-[30%] sm:top-1/2 right-0 transform -translate-y-1/2 bg-white p-5 sm:p-10 rounded-lg shadow-lg flex flex-col w-[90%] max-w-[400px] sm:right-0 sm:w-full">


        <div className="mb-5">
            <span className="text-xl font-medium">Đăng nhập</span>

        </div>

        <div>
            <form onSubmit={handleLogin}>
                <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 px-4 mb-3 border rounded  text-start text-sm"
                    placeholder="Email/Số điện thoại/Tên đăng nhập"
                />

                <input
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)} required
                    className="w-full py-2 px-4 mb-3 border rounded text-start text-sm"
                    placeholder="Mật khẩu"
                />


                <button className="w-full mt-4 bg-[#ee4d2d] text-white py-3 rounded hover:bg-orange-600">
                    ĐĂNG NHẬP
                </button>
            </form>

            <span className="text-xs font-thin text-gray-500">Quên mật khẩu</span>
            <div className="flex items-center">
                <div className="flex-1 border-b border-gray-400"></div>
                <div className="mx-4 text-gray-500">HOẶC</div>
                <div className="flex-1 border-b border-gray-400"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 m-3">
                <button className="border-2 border-gray-300 w-full p-1">
                    <FontAwesomeIcon icon={faFacebook} className="text-blue-500" /> Facebook
                </button>
                <button className="border-2 border-gray-300 w-full">
                    <FontAwesomeIcon icon={faGoogle} className="text-red-500" /> Google
                </button>

            </div>
        </div>

        <div className="text-gray-400 text-sm  text-start">
            Bạn mới biết đến Shopee? <button className="text-[#ee4d2d]" onClick={switchToRegister}>Đăng ký</button>
        </div>
    </div>);
}

export default LoginForm;