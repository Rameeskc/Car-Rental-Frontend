import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "../pages/user/Home"
import UserLayout from '../components/layout/UserLayout'
function User() {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default User