import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from './routes';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {routes.map((route, index) => (

            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Router>
      <ToastContainer />
    </CartProvider>

  );
}

export default App;
