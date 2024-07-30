import React, { useEffect, useState } from "react";
import logo from '../../assets/images/marca-logo6-1-1699980691.png';
import { useNavigate } from "react-router-dom";
import { Person } from '@mui/icons-material/';

const Navbar = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [showButton, setShowButton] = useState(true);

    const handleLoginRedirect = () => navigate("/login");
    const handleRegisterRedirect = () => navigate("/register");
    const handleInicioRedirect = () => navigate("/inicio");
    const handleLogOut = () => {
        localStorage.removeItem("userData");
        setShowButton(true);
    };

    useEffect(() => {
        const onGetUserDataStorage = () => {
            let userData = JSON.parse(localStorage.getItem("userData"));
            if (userData) {
                setUsername(userData.username);
                setShowButton(false);
            }
            else {
                setShowButton(true);
            }
        };
        onGetUserDataStorage();
    }, [localStorage.getItem("userData")]);

    return (
        <div className="container-navbar">
            <img src={logo} alt="Logo" className="navbar-img" onClick={handleInicioRedirect} />
            <div className="container-search">
                <input className="navbar__search" placeholder="Buscar Producto..." />
            </div>

            {showButton && <button className="navbar-login__btn" onClick={handleLoginRedirect}>Iniciar Sesión</button>}
            {showButton && <button className="navbar-login__btn register" onClick={handleRegisterRedirect}>Registrarse</button>}
            
            {!showButton && <div className="container-row userData">
                <span className="navbar-userdata bold">Bienvenido,</span>
                <span className="navbar-userdata">{username}</span>
                <Person sx={{ marginLeft: "10px" }} />
            </div>}
            {!showButton && <button className="navbar-login__btn register" onClick={handleLogOut}>Cerrar Sesión</button>}
        </div>
    )
};

export default Navbar;