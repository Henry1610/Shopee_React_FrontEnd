import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Commit from "../../components/Commit";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer/Footer";

function OrderDetail() {
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id: orderId } = useParams();

    // Lấy thông tin người dùng
    const currentUserEmail = useMemo(() => {
        const user = localStorage.getItem("currentUser");
        return user || null;
    }, []);

    // Lấy thông tin đơn hàng
    useEffect(() => {
        const fetchOrder = () => {
            const currentUser = localStorage.getItem('currentUser');
            const ordersKey = currentUser ? `orders_${currentUser}` : 'orders_guest';
            const storedOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];
            const foundOrder = storedOrders.find(order => order.orderId.toString() === orderId);
            setOrder(foundOrder);
            setIsLoading(false);
        };

        fetchOrder();
    }, [orderId]);

    // Xử lý hủy đơn hàng
    const confirmCancel = () => {
        if (window.confirm('Bạn có chắc chắn muốn hủy đơn hàng này?')) {
            const currentUser = localStorage.getItem('currentUser');
            const ordersKey = currentUser ? `orders_${currentUser}` : 'orders_guest';
            const storedOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];

            const updatedOrders = storedOrders.map(order => {
                if (order.orderId.toString() === orderId) {
                    return {
                        ...order,
                        status: 'cancelled',
                        cancelledAt: new Date().toISOString()
                    };
                }
                return order;
            });

            localStorage.setItem(ordersKey, JSON.stringify(updatedOrders));
            setOrder(prevOrder => ({
                ...prevOrder,
                status: 'cancelled',
                cancelledAt: new Date().toISOString()
            }));
        }
    };

    // Xác định class cho trạng thái đơn hàng
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':

                return 'bg-yellow-500 text-white';

            case 'confirmed':

                return 'bg-blue-500 text-white';

            case 'shipping':

                return 'bg-indigo-500 text-white';

            case 'delivered':

                return 'bg-green-500 text-white';

            case 'cancelled':
                return 'bg-red-500 text-white';

            default:
                return 'bg-gray-500 text-white';
        }
    };

    // Tính tổng tiền đơn hàng
    const totalPrice = useMemo(() => {
        if (!order?.items) return 0;
        return order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }, [order]);

    // Loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ee4d2d]"></div>
            </div>
        );
    }

    // Không tìm thấy đơn hàng
    if (!order) {
        return (
            <div>
                <Navbar />
                <div className="max-w-[1200px] mx-auto bg-gray-100 min-h-screen">
                    <div className="container py-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy đơn hàng</h2>
                            <p className="text-gray-600 mb-4">Đơn hàng bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                            <button
                                onClick={() => navigate('/order')}
                                className="px-4 py-2 bg-[#ee4d2d] text-white rounded hover:bg-[#d63c2e]"
                            >
                                Quay lại danh sách đơn hàng
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="max-w-[1200px] mx-auto bg-gray-100 pt-[90px] m-8">
                <div className="container m-4">
                    {/* Breadcrumb */}
                    <nav className="flex mb-8" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <a href="/" className="text-gray-700 hover:text-[#ee4d2d]">
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <a href="/order" className="ml-1 text-gray-700 hover:text-[#ee4d2d] md:ml-2">Lịch sử đơn hàng</a>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="ml-1 text-gray-500 md:ml-2">Chi tiết đơn hàng</span>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">
                            Chi tiết đơn hàng #{order.orderId.slice(-6)}
                        </h1>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(order.status)}`}>
                            {order.status}
                        </span>
                    </div>

                    {/* Thông tin đơn hàng */}
                    <div className="bg-white rounded-lg shadow-sm mb-6">
                        <div className="p-4 border-b">
                            <h5 className="font-semibold">Thông tin đơn hàng</h5>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="mb-2">
                                        <span className="font-medium">Ngày đặt hàng:</span>{' '}
                                        {new Date(order.date).toLocaleDateString('vi-VN')}
                                    </p>
                                    <p className="mb-2">
                                        <span className="font-medium">Mã đơn hàng:</span>{' '}
                                        #{order.orderId}
                                    </p>
                                    <p>
                                        <span className="font-medium">Email khách hàng:</span>{currentUserEmail}
                                    </p>
                                </div>
                                <div className="flex justify-end items-start">
                                    {order.status === 'pending' && (
                                        <button
                                            onClick={confirmCancel}
                                            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                            Hủy đơn hàng
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Danh sách sản phẩm */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-sm">
                                <div className="p-4 border-b">
                                    <h5 className="font-semibold">Các sản phẩm trong đơn hàng</h5>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Sản phẩm</th>
                                                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Đơn giá</th>
                                                <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Số lượng</th>
                                                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {order.items.map(item => (
                                                <tr key={item._id}>
                                                    <td className="px-4 py-3">
                                                        <div className="flex items-center">
                                                            <img
                                                                src={item.thumbnail || '/images/default-product.jpg'}
                                                                alt={item.title}
                                                                className="w-16 h-16 object-cover rounded mr-4"
                                                            />
                                                            <div>
                                                                <p className="font-medium">{item.title}</p>
                                                                <p className="text-sm text-gray-500">
                                                                    {item.category} | {item.brand}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-right">
                                                        {item.price.toLocaleString('vi-VN')} VNĐ
                                                    </td>
                                                    <td className="px-4 py-3 text-center">
                                                        {item.quantity}
                                                    </td>
                                                    <td className="px-4 py-3 text-right font-medium">
                                                        {(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/order')}
                                className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                                Quay lại danh sách đơn hàng
                            </button>
                        </div>

                        {/* Tổng kết & Theo dõi */}
                        <div className="space-y-6">
                            {/* Tổng kết đơn hàng */}
                            <div className="bg-white rounded-lg shadow-sm">
                                <div className="p-4 border-b">
                                    <h5 className="font-semibold">Tổng kết đơn hàng</h5>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Tổng tiền hàng:</span>
                                        <span className="font-semibold">
                                            {totalPrice.toLocaleString('vi-VN')} VNĐ
                                        </span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Phí vận chuyển:</span>
                                        <span>
                                            Miễn phí
                                        </span>
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold">Tổng thanh toán:</span>
                                            <span className="text-xl font-bold text-[#ee4d2d]">
                                                {totalPrice.toLocaleString('vi-VN')} VNĐ
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Theo dõi đơn hàng */}
                            <div className="bg-white rounded-lg shadow-sm">
                                <div className="p-4 border-b">
                                    <h5 className="font-semibold">Theo dõi đơn hàng</h5>
                                </div>
                                <div className="p-4">
                                    <ul className="space-y-4">
                                        <li className="flex justify-between items-center">
                                            <div className="flex items-center">
                                                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </span>
                                                <span>Đặt hàng thành công</span>
                                            </div>
                                            <small className="text-gray-500">
                                                {new Date(order.date).toLocaleDateString('vi-VN')}
                                            </small>
                                        </li>

                                        {order.status !== 'cancelled' ? (
                                            <>
                                                {['Chờ xác nhận', 'Đã xác nhận', 'Đang giao hàng', 'Đã giao hàng'].map((step, idx) => {
                                                    const steps = ['Chờ xác nhận', 'Đã xác nhận', 'Đang giao hàng', 'Đã giao hàng'];

                                                    const condition = idx === 0
                                                        ? order.status !== 'Chờ xác nhận'
                                                        : steps[idx] === order.status || steps.slice(idx).includes(order.status);

                                                    return (
                                                        <li key={step} className="flex justify-between items-center">
                                                            <div className="flex items-center">
                                                                <span className={`w-8 h-8 ${condition ? 'bg-green-100' : 'bg-gray-100'} rounded-full flex items-center justify-center mr-3`}>
                                                                    <svg className={`w-4 h-4 ${condition ? 'text-green-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                                    </svg>
                                                                </span>
                                                                <span>{step}</span>
                                                            </div>
                                                            <small className="text-gray-500">
                                                                {condition ? 'Đã xử lý' : 'Đang chờ'}
                                                            </small>
                                                        </li>
                                                    );
                                                })}
                                            </>
                                        ) : (
                                            <li className="flex justify-between items-center">
                                                <div className="flex items-center">
                                                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                    </span>
                                                    <span>Đơn hàng đã hủy</span>
                                                </div>
                                                <small className="text-gray-500">
                                                    {new Date(order.cancelledAt || new Date()).toLocaleDateString('vi-VN')}
                                                </small>
                                            </li>
                                        )}

                                    </ul>
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

export default OrderDetail;
