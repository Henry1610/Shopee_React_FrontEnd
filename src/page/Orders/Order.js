import React, { useEffect, useState } from 'react';
import Commit from "../../components/Commit";
import Navbar from "../../layouts/Navbar";
import Footer from "../../layouts/Footer/Footer";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Order() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Lấy đơn hàng từ localStorage
        const currentUser = localStorage.getItem('currentUser');
        const ordersKey = currentUser ? `orders_${currentUser}` : 'orders_guest';
        const storedOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];

        setOrders(storedOrders);
    }, []);

    // Hàm format ngày
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // Hàm xác định class trạng thái đơn hàng
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

    const handleCancelOrder = (orderIdToUpdate) => {
        Swal.fire({
            title: 'Bạn có chắc muốn hủy đơn hàng?',
            text: "Hành động này không thể hoàn tác!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Hủy đơn hàng',
            cancelButtonText: 'Thoát'
        }).then((result) => {
            if (result.isConfirmed) {
                const currentUser = localStorage.getItem('currentUser');
                const ordersKey = currentUser ? `orders_${currentUser}` : 'orders_guest';
                const storedOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];

                // Cập nhật status thành 'cancel'
                const updatedOrders = storedOrders.map(order => {
                    if (order.orderId === orderIdToUpdate) {
                        return { ...order, status: 'cancelled', cancelledAt: new Date().toISOString() };
                    }
                    return order;
                });

                localStorage.setItem(ordersKey, JSON.stringify(updatedOrders));
                setOrders(updatedOrders); // nếu bạn đang render danh sách
                Swal.fire('Đã hủy!', 'Đơn hàng đã được hủy thành công.', 'success');
            }
        });
    };




    return (

        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <div className=" max-w-[1200px] mx-auto  bg-gray-100   pt-[90px] m-8">
                <div className='m-8'>
                    <div className="mb-6">
                        <nav aria-label="breadcrumb">
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
                                        <span className="ml-1 text-gray-500 md:ml-2">Lịch sử đơn hàng</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-2xl font-bold">Lịch sử đơn hàng của tôi</h1>
                    </div>

                    <div>
                        {orders && orders.length > 0 ? (
                            <div className="bg-white shadow-sm rounded-lg">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full table-auto">
                                        <thead className="bg-gradient-to-t from-[#ee4d2d] to-[#d0011b] text-white">
                                            <tr>
                                                <th className="px-4 py-2 text-left text-sm font-medium ">Mã đơn hàng</th>
                                                <th className="px-4 py-2 text-left text-sm font-medium ">Ngày đặt</th>
                                                <th className="px-4 py-2 text-left text-sm font-medium ">Số lượng sản phẩm</th>
                                                <th className="px-4 py-2 text-left text-sm font-medium ">Tổng tiền</th>
                                                <th className="px-4 py-2 text-left text-sm font-medium ">Trạng thái</th>
                                                <th className="px-4 py-2 text-left text-sm font-medium ">Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order) => (
                                                <tr key={order.orderId} className="border-t border-gray-200">
                                                    <td className="px-4 py-2 font-semibold">{`#${order.orderId?.substring(order.orderId.length - 6)}`}</td>
                                                    <td className="px-4 py-2">{formatDate(order.date)}</td>
                                                    <td className="px-4 py-2">
                                                        {order.items?.reduce((sum, item) => sum + item.quantity, 0)} sản phẩm
                                                    </td>
                                                    <td className="px-4 py-2 font-semibold text-blue-600">
                                                        {(order.totalAmount).toLocaleString('vi-VN')} VNĐ
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-2 py-2">
                                                        <div className="inline-flex items-center space-x-2">
                                                            <Link
                                                                to={`${order.orderId}`}
                                                                className="inline-flex items-center text-blue-600 hover:text-blue-800 border border-blue-300 px-4 py-2 rounded-lg hover:bg-blue-100"
                                                            >
                                                                <i className="fas fa-eye mr-1"></i> Chi tiết
                                                            </Link>

                                                            {order.status !== 'cancelled' && (
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleCancelOrder(order.orderId)}
                                                                    className="inline-flex items-center text-red-600 hover:text-red-800 border border-red-300 px-4 py-2 rounded-lg hover:bg-red-100"
                                                                >
                                                                    <i className="fas fa-times mr-1"></i> Hủy
                                                                </button>
                                                            )}
                                                        </div>
                                                    </td>


                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-yellow-100 p-4 rounded-lg">
                                <p className="text-center text-gray-700">Bạn chưa có đơn hàng nào. Hãy mua sắm để tạo đơn hàng mới!</p>
                                <Link to="/products" className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800">
                                    <i className="fas fa-shopping-cart mr-2"></i> Tiếp tục mua sắm
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <Commit />
                <Footer />
            </div>


        </div>
    );
}

export default Order;
