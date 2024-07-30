import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { global } from "../config/global";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault(); 
        try{
            let url = global.apiUrl + 'clients/register'
            let response = await axios.post(url, { username: username, password: password},
                {
                    headers: {
                      'Content-Type': 'application/json',
                    }
                  }
            );

            console.log("esto ees el register", response);
            navigate("/inicio")
        }
        catch(error) {
            console.log("Error al hacer el register")
        }
    };


    return(
        <div className="container-login">

                <form onSubmit={handleLogin} className="login-card">
                <h1 className="product-selected__name login">Crear Usuario</h1>

                <span className="product-selected__title">Usuario</span>
                <TextField onChange={(e) => setUsername(e.target.value)} 
                value={username} id="outlined-basic" label="Usuario" variant="outlined" sx={{ width: "100%", marginTop: "5px"}}/>

                <span className="product-selected__title">Contraseña</span>
                <TextField id="outlined-basic" onChange={(e) => setPassword(e.target.value)} type="password"
                value={password}  label="Contraseña" variant="outlined" sx={{ width: "100%", marginTop: "5px"}}/>
                <button type="submit" className="product-selected__btn">Registrarse</button>
                </form>

        </div>
    )
};

export default Register;