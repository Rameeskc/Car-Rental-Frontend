import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "../NavBar"

const UserLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout