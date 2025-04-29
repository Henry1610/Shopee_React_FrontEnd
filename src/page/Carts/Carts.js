import Wrapper from "../../components/Wrapper";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useMemo } from "react";
import { Link } from "react-router-dom";

function Carts() {
    const { cart = [],placeOrder } = useContext(CartContext);
    
    const subtotal = useMemo(() =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0),
        [cart]);

    const totalDiscount = useMemo(() =>
        cart.reduce((sum, item) => (sum + (item.discountPercentage / 100) * item.price * item.quantity), 0),
        [cart]);

    const total = useMemo(() => subtotal - totalDiscount, [subtotal, totalDiscount]);
    
    const shippingFee = total >= 500000 ? 0 : 30000;
    const finalTotal = total + shippingFee;

    return (
        <div>
            <Navbar />
            <Wrapper>
                <div className="container mx-auto px-4 py-8">
                    {/* Breadcrumb */}
                    <nav className="flex mb-8" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link to="/" className="text-gray-700 hover:text-[#ee4d2d]">
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="ml-1 text-gray-500 md:ml-2">Giỏ hàng</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <h1 className="text-2xl font-bold mb-6">Giỏ hàng của bạn</h1>

                    {cart.length > 0 ? (
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Danh sách sản phẩm */}
                            <div className="lg:w-2/3">
                                <div className="bg-white rounded-lg shadow-sm">
                                    <div className="p-4 border-b">
                                        <h5 className="font-semibold">Sản phẩm trong giỏ hàng ({cart.length} mục)</h5>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Ảnh</th>
                                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Sản phẩm</th>
                                                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Đơn giá</th>
                                                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Số lượng</th>
                                                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Thành tiền</th>
                                                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-500"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {cart.map((item) => (
                                                    <CartItem key={item.id} item={item} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                <div className="mt-4 flex gap-3">
                                    <Link to="/products" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                        </svg>
                                        Tiếp tục mua sắm
                                    </Link>
                                    <Link to="/orders" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        Xem lịch sử mua hàng
                                    </Link>
                                </div>
                            </div>
                            
                            {/* Tóm tắt đơn hàng */}
                            <div className="lg:w-1/3">
                                <div className="bg-white rounded-lg shadow-sm">
                                    <div className="p-4 border-b">
                                        <h5 className="font-semibold">Tóm tắt đơn hàng</h5>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">Tổng tiền hàng:</span>
                                            <span className="font-semibold">
                                                {total.toLocaleString('vi-VN')} VNĐ
                                            </span>
                                        </div>
                                        
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-600">Phí vận chuyển:</span>
                                            <span className="shipping-fee">
                                                {shippingFee.toLocaleString('vi-VN')} VNĐ
                                            </span>
                                        </div>
                                        
                                        {total >= 500000 ? (
                                            <div className="bg-green-50 text-green-700 p-3 rounded-md text-sm mb-4">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Bạn được miễn phí vận chuyển
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-blue-50 text-blue-700 p-3 rounded-md text-sm mb-4">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    Mua thêm {(500000 - total).toLocaleString('vi-VN')} VNĐ để được miễn phí vận chuyển
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div className="border-t pt-4">
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold">Tổng thanh toán:</span>
                                                <span className="text-xl font-bold text-[#ee4d2d]">
                                                    {finalTotal.toLocaleString('vi-VN')} VNĐ
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <button onClick={placeOrder} className="mt-4 w-full bg-[#ee4d2d] text-white py-3 rounded-md hover:bg-[#d63c2d] transition-colors">
                                            <div className="flex items-center justify-center">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                                </svg>

                                                Tiến hành thanh toán
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-blue-50 text-blue-700 p-6 rounded-lg">
                            <p className="mb-2">Giỏ hàng của bạn đang trống!</p>
                            <p className="mb-4">Hãy tiếp tục mua sắm để thêm sản phẩm vào giỏ hàng.</p>
                            <Link to="/products" className="inline-flex items-center px-4 py-2 bg-[#ee4d2d] text-white rounded-md hover:bg-[#d63c2d] transition-colors">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                                Tiếp tục mua sắm
                            </Link>
                        </div>
                    )}
                </div>
            </Wrapper>
            <Footer />
        </div>
    );
}

export default Carts;