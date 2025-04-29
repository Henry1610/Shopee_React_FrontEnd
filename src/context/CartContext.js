import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

import { cartReducer, initialCartState } from "./cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const showToast = (message) => {
    toast.success(message, { position: "top-right", autoClose: 1000 });
  };

  const currentUser = localStorage.getItem("currentUser");
  const cartKey = currentUser ? `cart_${currentUser}` : "cart_guest";

  const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];

  const [cart, dispatch] = useReducer(cartReducer, storedCart);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(cartKey, JSON.stringify(cart));
    }
  }, [cart]);

  // Action functions
  const addToCart = (product, number = 1) => {
    showToast("Đã thêm sản phẩm vào giỏ hàng!");
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: number },
    });
  };

  const removeCart = (id) => {
    Swal.fire({
      title: "Bạn có chắc muốn xóa?",
      text: "Sản phẩm này sẽ bị xóa khỏi giỏ hàng!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa ngay!",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
        toast.error("Đã xóa sản phẩm khỏi giỏ hàng!", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    });
  };
  const placeOrder = () => {
    if (cart.length === 0) {
      toast.error("Giỏ hàng của bạn trống.");
      return;
    }
  
    const orderId = `order_${Date.now()}`;
    const orderData = {
      orderId,
      items: cart,
      status: "paid",
      totalAmount: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      date: new Date().toISOString()
    };
  
    const ordersKey = currentUser ? `orders_${currentUser}` : "orders_guest";
  
    const existingOrders = JSON.parse(localStorage.getItem(ordersKey)) || [];
    const updatedOrders = [...existingOrders, orderData];
    localStorage.setItem(ordersKey, JSON.stringify(updatedOrders));
  
    // Clear cart
    localStorage.removeItem(cartKey);
    dispatch({ type: "CLEAR_CART" });
  
    toast.success("Đã thanh toán, đơn hàng đã được tạo!");
  };
  
  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const setCart = (newCart) => {
    dispatch({ type: "SET_CART", payload: newCart });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeCart,
        increaseQuantity,
        decreaseQuantity,
        setCart,
        placeOrder, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
