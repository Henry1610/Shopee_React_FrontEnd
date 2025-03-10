    import { createContext, useEffect, useState } from "react";
    import { toast } from "react-toastify";
    import "react-toastify/dist/ReactToastify.css";
    import Swal from "sweetalert2";

    export const CartContext = createContext();

    export const CartProvider = ({ children }) => {
        const showToast = (message) => {
            toast.success(message, { position: "top-right", autoClose: 1000 });
        };
        
        const currentUser=localStorage.getItem('currentUser')
        const cartKey = currentUser ? `cart_${currentUser}` : "cart_guest";

        const [cart, setCart] = useState(() => {
            return JSON.parse(localStorage.getItem(cartKey)) || [];
        });
        
        useEffect(() => {
            if (currentUser) {
                
                localStorage.setItem(cartKey, JSON.stringify(cart));
            }
        }, [cart]);
        

        const addToCart = (product, number = 1) => {
            showToast("Đã thêm sản phẩm vào giỏ hàng!");
        
            setCart((prevCart) => {
                const newCart = [...prevCart]; // Tạo bản sao để tránh thay đổi trực tiếp state cũ
                const exist = newCart.find((item) => item.id === product.id);
        
                if (exist) {
                    exist.quantity += number; // Cộng trực tiếp vào quantity của sản phẩm có sẵn
                } else {
                    newCart.push({ ...product, quantity: number }); // Thêm sản phẩm mới
                }
        
                return newCart;
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
                    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
                    toast.error("Đã xóa sản phẩm khỏi giỏ hàng!", {
                        position: "top-right",
                        autoClose: 2000,
                    });
                }
            });
        };


        const increaseQuantity = (id) => {
            setCart(prevCart => prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1  } : item

            ))
        }

        const decreaseQuantity = (id) => {
            setCart((prevCart) =>
                prevCart
                    .map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                    )
                    .filter((item) => item.quantity > 0) // Xóa sản phẩm nếu quantity = 0
            );
        };
        return (
            <CartContext.Provider value={{ cart, setCart,addToCart, removeCart, increaseQuantity, decreaseQuantity }}>
                {children}
            </CartContext.Provider>
        );
    };
