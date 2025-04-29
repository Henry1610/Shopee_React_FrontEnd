import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartItem({ item }) {
    const { removeCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    
    const discountedPrice = item.price * (1 - item.discountPercentage / 100);
    const itemTotal = discountedPrice * item.quantity;

    return (
        <tr className="hover:bg-gray-50">
            <td className="px-4 py-3">
                <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                />
            </td>
            <td className="px-4 py-3">
                <Link 
                    to={`/products/${item.id}`} 
                    className="font-medium text-gray-900 hover:text-[#ee4d2d]"
                >
                    {item.title}
                </Link>
                <div className="text-sm text-gray-500">
                    {item.category} | {item.brand}
                </div>
            </td>
            <td className="px-4 py-3 text-right">
                <div className="text-gray-500 line-through">
                    {item.price.toLocaleString('vi-VN')} VNĐ
                </div>
                <div className="text-[#ee4d2d] font-medium">
                    {discountedPrice.toLocaleString('vi-VN')} VNĐ
                </div>
            </td>
            <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                    <button 
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                        </svg>
                    </button>
                    <input 
                        type="number" 
                        value={item.quantity}
                        min="1"
                        max={item.stock}
                        readOnly
                        className="w-12 h-8 text-center border-t border-b border-gray-300 focus:outline-none"
                    />
                    <button 
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                    </button>
                </div>
            </td>
            <td className="px-4 py-3 text-right text-[#ee4d2d] font-medium">
                {itemTotal.toLocaleString('vi-VN')} VNĐ
            </td>
            <td className="px-4 py-3 text-center">
                <button 
                    onClick={() => removeCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    title="Xóa sản phẩm"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </td>
        </tr>
    );
}

export default CartItem;