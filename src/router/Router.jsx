import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { About, Features, Home, Premium, Pricing } from '../pages'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
    </Routes>
  )
}

export default Router