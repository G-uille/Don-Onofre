import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const DashboardLayout = () => {
    
    return (
        <div className="container-dashboardLayout">
            <Navbar />
            <section className="container-dashboardLayout__outlet">
                <Outlet />
            </section>
        </div>
    )
};

export default DashboardLayout;