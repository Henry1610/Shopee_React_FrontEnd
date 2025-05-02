import Commit from "../../components/Commit";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer/Footer";
import React from "react";
import { Link, useParams } from "react-router-dom";





function OrderSuccess() {
    const { id: orderId } = useParams();

    return (
        <div className="h-[2000px]">
            <Navbar />

            <div className=" max-w-[1200px] mx-auto  bg-gray-100 ">
                    <div className="flex justify-center pt-[90px] m-8" >
                        <div className="w-full max-w-4xl">
                            <div className="bg-white shadow-md rounded-lg mt-8  ">
                                <div className="p-8 text-center ">
                                    <div className="mb-6">
                                        <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <h1 className="text-2xl font-semibold mb-3">Đặt hàng thành công!</h1>
                                    <p className="text-lg text-gray-600 mb-6">
                                        Cảm ơn bạn đã mua sắm tại KlaveStore. Đơn hàng của bạn đã được tiếp nhận và đang được xử lý.
                                    </p>

                                    <div className="bg-gray-100 rounded-lg p-4 mb-6">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-700">Mã đơn hàng:</span>
                                            <span className="font-bold">{orderId}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">Trạng thái đơn hàng:</span>
                                            <span className="bg-yellow-400 text-gray-800 text-sm font-semibold px-2.5 py-0.5 rounded">pending</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-6">
                                        Bạn có thể theo dõi tình trạng đơn hàng trong mục <strong>"Lịch sử mua hàng"</strong>
                                    </p>

                                    <div className="flex justify-center gap-4">
                                        <Link
                                            to={`/order/${orderId}`}
                                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                            </svg>
                                            Xem chi tiết đơn hàng
                                        </Link>
                                        <Link
                                            to="/order"
                                            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            Lịch sử mua hàng
                                        </Link>
                                        <Link
                                            to="/products"
                                            className="inline-flex items-center px-4 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-50 transition"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                            </svg>
                                            Tiếp tục mua sắm
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <Commit />
                <Footer />
            </div>
        </div>
    );
}

export default OrderSuccess;
