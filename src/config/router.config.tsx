import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing";
import RegisterPage from "../pages/auth/register/register.page";
import LoginPage from "../pages/login/login.page";
import ContactPage from "../pages/landing/contact.us.page";
import AboutPage from "../pages/landing/about.page";
import ProductPage from "../pages/landing/product.page";
import { ReactElement } from "react";
import HomePageLayout from "../pages/layout/home.page";
import AdminLayout from "../pages/layout/cms.page";
import CategoryDetail from "../pages/category/category-detail.page";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css"
import UserActivation from "../pages/auth/activate/activate-user.page";
const RouterConfig = (): ReactElement => {

     return (
          <>
               <ToastContainer />
               <BrowserRouter>
                    <Routes>
                         <Route path="/" element={<HomePageLayout />}>
                              <Route index element={<LandingPage />} />
                              <Route path="register" element={<RegisterPage />} />
                              <Route path="activate/:token" element={<UserActivation />} />
                              <Route path="/login" element={<LoginPage />} />
                              <Route path="/about" element={<AboutPage />} />
                              <Route path="/product" element={<ProductPage />} />
                              <Route path="/contact" element={<ContactPage />} />
                              <Route path="category/:slug" element={<CategoryDetail />} />
                              <Route path="*" element={<>Page Not Found</>} />

                         </Route>
                         <Route path="/admin" element={<AdminLayout />}>

                         </Route>
                    </Routes>
               </BrowserRouter>
          </>
     )
}
export default RouterConfig;