import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/user/Home"
import UserLayout from '../components/layout/UserLayout'
import CarList from "../pages/user/CarLIst"
import Checkout from '../pages/user/Checkout'
import Payment from '../pages/user/Payment'
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import ForgotPassword from "../pages/user/ForgotPassword";
function User() {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/carlist" element={<CarList />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />

            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<ForgotPassword />} />
        </Routes>
    )
}

export default User