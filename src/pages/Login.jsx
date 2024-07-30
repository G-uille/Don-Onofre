import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { global } from "../config/global";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try{
            let url = global.apiUrl + 'clients/login'
            let response = await axios.post(url, { username: username, password: password})
            console.log("esto ees el login", response);
            localStorage.setItem('userData', JSON.stringify(response.data));
            navigate("/inicio")
        }
        catch(error) {
            console.log("Error al hacer el login")
        }
    };

    return(
        <div className="container-login">

                <form onSubmit={handleLogin} className="login-card">
                <h1 className="product-selected__name login">Iniciar Sesión</h1>

                <span className="product-selected__title">Usuario</span>
                <TextField onChange={(e) => setUsername(e.target.value)} 
                value={username} id="outlined-basic" label="Usuario" variant="outlined" sx={{ width: "100%", marginTop: "5px"}}/>

                <span className="product-selected__title">Contraseña</span>
                <TextField id="outlined-basic" onChange={(e) => setPassword(e.target.value)} 
                value={password}  label="Contraseña" variant="outlined" sx={{ width: "100%", marginTop: "5px"}}/>
                <button type="submit" className="product-selected__btn">Ingresar</button>
                </form>

        </div>
    )
};

export default Login;