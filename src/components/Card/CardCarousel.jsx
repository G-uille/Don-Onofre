import React from "react";
import { NavLink } from 'react-router-dom';

const CardCarousel = ({ number, id, nombre, precio, imagen }) => {
    return(
        <div className="container-card-carousel" >
            <NavLink to={`/producto/${id}`}>

            <div className="container-card-carousel__alt">
                <div className="card-carousel__new">
                    <span>Nuevo</span>
                </div>
            <img src={imagen} alt="Botella" className="card-carousel__img" />
            <div className="card-carousel__description">
                <span className="card-carousel__title">{nombre}</span>
                <span className="card-carousel__price">PYG {precio}</span>
            </div>
            <button className="card-carousel__btn">Comprar</button>
            </div>
                
            </NavLink>

        </div>
    )
};

export default CardCarousel;