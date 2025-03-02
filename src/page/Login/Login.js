import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../../assets/images";
function Login() {
    return (<div>
        <div>
            <div>
                <img src={images.logoOrange} />
                <span>Đăng nhập</span>
            </div>
            <div>Bạn cần sự giúp đỡ</div>
        </div>
        <div>
            <div className="relative">
                <img src="https://down-vn.img.susercontent.com/file/sg-11134004-7rccz-m6hsc8ddtji3dc" />
                <div className="absolute">
                    <div>
                        <span>Đăng nhập</span>
                        <div>
                            Đăng nhập với mã QR
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div>
                        <form>
                            <input placeholder="Email/Số điện thoại/Tên đăng nhập" />
                            <div>
                                <input placeholder="Mật khẩu" />
                                <FontAwesomeIcon />
                            </div>
                            <button>ĐĂNG NHẬP</button>
                        </form>

                        <span>Quên mật khẩu</span>
                        <div>
                            <div>--</div>
                            <div>HOẶC</div>
                            <div>--</div>
                            <div>
                                <button>fb</button>
                                <button>gg</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        Bạn mới biết đến Shopee? <span>Đăng ký</span>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Login;