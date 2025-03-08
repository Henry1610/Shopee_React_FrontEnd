import MostLike from "../../components/MostLike";
function CartItem({item,increaseQuantity,decreaseQuantity, removeCart,  }) {

    // Tính giá sau khi áp dụng giảm giá
    const discountedPrice = (item.price * (1 - item.discountPercentage / 100)).toFixed(2);

    // Xử lý tăng giảm số lượng
    
    return ( <div className="bg-white mt-3">
        <div className="flex items-center border-b p-3 gap-2">
            <MostLike />
            <div className="text-sm md:text-base">{item.brand}</div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center py-4 text-center p-3">
            <div className="flex items-center col-span-2">
                <img src={item.thumbnail}
                    alt="product"
                    className="w-16 md:w-20 h-16 md:h-20 rounded-md" />
                <div className="ml-2 md:ml-4 text-left">
                    <p className="text-sm md:text-base font-medium">{item.brand}</p>
                    <p className="text-xs md:text-sm text-gray-500">{item.description}</p>
                </div>
            </div>

            <div className="hidden md:block">
                <span className="text-gray-500 line-through">₫{item.price ? item.price.toFixed(2) : "N/A"}</span>
                <div className="text-red-500 font-semibold">₫{discountedPrice}</div>
            </div>

            <div className="flex items-center justify-center">
                    <button className="border px-2 md:px-3 py-2 w-8 md:w-10 text-center" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <input
                        type="text"
                        value={item.quantity}
                        className="text-center border w-8 md:w-10 py-2"
                        readOnly
                    />
                    <button className="border px-2 md:px-3 py-2 w-8 md:w-10 text-center" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

            <div className="hidden md:block text-red-500 font-semibold">₫{(discountedPrice * item.quantity).toFixed(2)}</div>

            <button className="text-red-500 hover:underline text-sm md:text-base" onClick={() => removeCart(item.id)}>Xóa</button>
        </div>
    </div> );
}

export default CartItem;