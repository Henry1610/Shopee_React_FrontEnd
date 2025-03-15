import React from "react";

const TotalSummary = ({ total, totalDiscount }) => (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
        <h5 className="text-lg font-semibold mb-3 text-center md:text-left">Tổng thanh toán</h5>
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
);
export default React.memo(TotalSummary);
