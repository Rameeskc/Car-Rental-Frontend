import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/user/Home"
import UserLayout from '../components/layout/UserLayout'
import CarList from "../pages/user/CarLIst"
function User() {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/carlist" element={<CarList />}/>
            </Route>
        </Routes>
    )
}

export default User