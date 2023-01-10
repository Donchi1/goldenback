import React, { useContext, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import ProductCart from "./New-Project/screens/ProductCart";
import ProductDetails from "./New-Project/screens/ProductDetails";
import Home from "./New-Project/screens/Home";
import Empty from "./New-Project/screens/Empty";
import Checkout from "./New-Project/screens/Checkout";
import Nav from "./New-Project/components/Nav";
import Search from "./New-Project/screens/Search";
import SingleCat from "./New-Project/screens/SingelCat";
import Orders from "./New-Project/screens/Orders";
import Register from "./New-Project/screens/Register";
import Login from "./New-Project/screens/Login";
import Reset from "./New-Project/screens/Reset";
import Forget from "./New-Project/screens/Forget";
import AdminHome from "./admin/screens/main/AdminHome";
import AdminLogin from "./admin/screens/main/AdminLogin";
import Users from "./admin/screens/users/Users";
import UserCreate from "./admin/screens/users/UserCreate";
import UserEdit from "./admin/screens/users/UserEdit";
import Products from "./admin/screens/products/Products";
import ProductEdit from "./admin/screens/products/ProductEdit";
import ProductCreate from "./admin/screens/products/ProductCreate";
import OrderCreate from "./admin/screens/orders/OrderCreate";
import OrderEdit from "./admin/screens/orders/OrderEdit";
import UserOrders from "./admin/screens/orders/UserOrders";
import Sidebar from "./admin/components/Sidebar";
import AdminNav from "./admin/components/AdminNav";
import Profile from "./New-Project/screens/Profile";
import { Elements } from "@stripe/react-stripe-js";
import axios from "./New-Project/utils/axios";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import makeRequest from "./New-Project/utils/makeRequest";

function App() {
  const { user } = useSelector((state) => state.auth);

  const stripe = loadStripe(
    "pk_test_51Jzl48IACXnVF0nB75Q5CtAy2vJ6hF09TbBHRPsWzlTIIQdwLFNMsaRaBaJZmmTZ21vHUVD0APy0sumntoh96ZJx00KycGGb8V"
  );
  //"pk_live_51MO9G1IpETtN3CkCmr5PsEY78sH9Jz7wJSojBFLnaKSCcsPSbpItfxrrD9OzIDXfAyRTqsYsTEH0sZVdyr1lgVoZ00Z22HT1KP"

  const ProtectAuth = () => {
    if (user?._id) return <Navigate replace to="/" />;

    return <Outlet />;
  };
  const ProtectUser = ({ children }) => {
    if (!user?._id) return <Navigate replace to="/" />;

    return children;
  };

  return (
    <Router>
      {location.pathname.split("/")[1] !== "admin" && <Nav />}
      <AdminNav />
      <div
        className={`${location.pathname.split("/")[1] === "admin" && "flex"} `}
      >
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<ProductCart />} />
          <Route
            path="/profile"
            element={
              <ProtectUser>
                <Profile />
              </ProtectUser>
            }
          />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/product/search" element={<Search />} />
          <Route path="/category/:info" element={<SingleCat />} />
          <Route path="/products/order" element={<Orders />} />

          <Route path="/user/reset/:accessToken" element={<Reset />} />
          <Route path="/user/forget" element={<Forget />} />
          <Route
            path="/payment/checkout"
            element={
              <Elements stripe={stripe}>
                <Checkout />
              </Elements>
            }
          />

          <Route path="/auth" element={<ProtectAuth />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="/admin">
            <Route index element={<AdminHome />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path="create" element={<UserCreate />} />
              <Route path="edit/:id" element={<UserEdit />} />
            </Route>
            <Route path="products">
              <Route index element={<Products />} />
              <Route path="create" element={<ProductCreate />} />
              <Route path="edit/:id" element={<ProductEdit />} />
            </Route>
            <Route path="orders">
              <Route index element={<UserOrders />} />
              <Route path="create" element={<OrderCreate />} />
              <Route path="edit/:id" element={<OrderEdit />} />
            </Route>
          </Route>
          <Route path="/*" element={<Empty />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
