import Carts from "../page/Carts/Carts";
import Category from "../page/Category";
import Home from "../page/Home";
import Login from "../page/Login";
import ProductDetail from "../page/ProductDetail/ProductDetail";

 const routes=[
  {path:'/',component:Home},
  {path:'/carts',component:Carts},
  {path:'/category',component:Category},
  {path:'/login',component:Login},
  {path:'/products/:id',component:ProductDetail},
]
export default routes