import Wrapper from "../../components/Wrapper";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar";
import Commit from "../../components/Commit";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useMemo } from "react";

function Carts() {
    const { removeCart, cart=[], increaseQuantity, decreaseQuantity } = useContext(CartContext)
    const subtotal = useMemo(() => 
        cart.reduce((total, item) => total + item.price * item.quantity, 0), 
    [cart]);
    
    const totalDiscount = useMemo(() => 
        cart.reduce((sum, item) => (sum + (item.discountPercentage / 100) * item.price * item.quantity),0), 
    [cart]);
    
    const total = useMemo(() => subtotal - totalDiscount, [subtotal, totalDiscount]);




    return (
        <div>
            <Navbar />
            <Wrapper>
                <div className="overflow-x-auto border-b-2  py-3 border-[#ee4d2d]">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 border-b p-2 text-center font-semibold bg-white mb-3">
                        <span className="col-span-2">Sản Phẩm</span>
                        <span className="hidden md:block">Đơn Giá</span>
                        <span>Số Lượng</span>
                        <span className="hidden md:block">Số Tiền</span>
                        <span>Thao Tác</span>
                    </div>

                    {/* Danh mục giỏ hàng */}

                    <div>
                        {cart.length === 0 ? (
                            <h1  className="text-center font-medium text-lg">Giỏ hàng trống</h1>
                        ) : (
                            cart.map((item) => <CartItem key={item.id} item={item} removeCart={removeCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />)
                        )}
                    </div>

                    {/* Total */}
                    <div className="pt-3 flex justify-end">
                        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
                            <h5 className="text-lg font-semibold mb-3 text-center md:text-left">Tổng thanh toán</h5>
                            {/* <div className="flex justify-between">
                                <span>Tạm tính:</span>
                                <span id="subtotal" className="font-bold">0đ</span>
                            </div> */}
                            <div className="flex justify-between text-green-600">
                                <span>Tiết kiệm:</span>
                                <span id="discount"> đ{totalDiscount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Tổng cộng:</span>
                                <span id="total" className="font-bold text-red-500"> ${total.toFixed(2)}</span>
                            </div>
                            <button className="mt-4 w-full bg-[#ee4d2d] text-white py-2 rounded-lg hover:bg-red-600 transition">
                                Mua hàng
                            </button>
                        </div>
                    </div>
                </div>

                <Commit />
                <Footer />
            </Wrapper>

        </div>



    );
}

export default Carts;