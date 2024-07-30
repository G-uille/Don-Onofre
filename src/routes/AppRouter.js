import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="inicio" />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="producto/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
