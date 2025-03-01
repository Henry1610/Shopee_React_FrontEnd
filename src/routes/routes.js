import Cartss from "../page/Cart";
import Category from "../page/Category";
import Home from "../page/Home";
import Login from "../page/Login";
import ProductDetail from "../page/ProductDetail/ProductDetail";

 const routes=[
  {path:'/',component:Home},
  {path:'/carts',component:Cartss},
  {path:'/category',component:Category},
  {path:'/login',component:Login},
  {path:'/productdetail',component:ProductDetail},
]
export default routes