import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "../user/NavBar"
import BottomArea from '../user/BottomArea'

const UserLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <Outlet />
      </div>
      <BottomArea/>
    </div>
  )
}

export default UserLayout