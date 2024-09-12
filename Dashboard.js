import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    }


    return (
        <div>
            <h2>DASHBOARD</h2>
            <i className="fas fa-arrow-left arrow-left" onClick={handleLogout}></i>
        </div>
    );
}

export default Dashboard;