import './App.css';
import { Routes, Route } from "react-router-dom";
import routes from './routes';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <CartProvider>
        <Routes>
          {routes.map((route, index) => (

            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      <ToastContainer />
    </CartProvider>

  );
}

export default App;
