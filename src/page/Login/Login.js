import images from "../../assets/images";
import Footer from "../../layouts/Footer/Footer";
import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

function Login() {
    const [isLogin,setLogin]=useState(true)
    
    return (
        <div>
            <div className="items-center m-5">
                <div className="max-w-[1200px] flex justify-between mx-auto items-center">
                    <div className="flex">
                        <img width="150px" src={images.logoOrange} alt="loi"/>
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
                    {isLogin ? (<LoginForm switchToRegister={()=>setLogin(false)}/>) :
                        // Form đăng ký
                        (<RegisterForm switchToLogin={()=>setLogin(true)}/>)}

                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Login;
