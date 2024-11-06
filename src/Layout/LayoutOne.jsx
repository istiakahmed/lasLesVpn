import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import MobiNav from '../Components/MobiNav/MobiNav'

const LayoutOne = () => {
  return (
    <>
      <Navbar />
      <MobiNav />
      <Outlet />
    </>
  )
}

export default LayoutOne
