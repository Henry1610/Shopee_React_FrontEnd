import Carts from "../page/Carts/Carts";
import Category from "../page/Category";
import Home from "../page/Home";
import Login from "../page/Login";
import OrderDetail from "../page/Orders/OderDetail";
import Order from "../page/Orders/Order";
import OrderSuccess from "../page/Orders/OrderSuccess";
import ProductDetail from "../page/ProductDetail/ProductDetail";

 const routes=[
  {path:'/',component:Home},
  {path:'/carts',component:Carts},
  {path:'/login',component:Login},
  {path:'/products/:id',component:ProductDetail},
  {path:'/products',component:Category },
  {path:'/order',component:Order},
  {path:'/order/:id',component:OrderDetail},
  {path:'/checkout/success/:id',component:OrderSuccess},
]
export default routes