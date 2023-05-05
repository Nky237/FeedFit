import {
createBrowserRouter,
Route, 
createRoutesFromElements,
RouterProvider
  } from "react-router-dom";
import SideLayout from "../Layout/SideLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Categories from "../Pages/Categories";
import Pricing from "../Pages/Pricing";
import Product from "../Pages/Product";
import SignUp from "../Pages/SignUp";
const Routy:React.FC = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<SideLayout />}>
        <Route index element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/menu" element = {<Categories />} />
        <Route path="/price" element = {<Pricing />} />
        <Route path="/prod" element = {<Product />} />
        <Route path="/sign" element = {<SignUp />} />
      </Route>
    )
  )
  return (
    
    <div>
         <RouterProvider router={router} />
    </div>
  )
}

export default Routy