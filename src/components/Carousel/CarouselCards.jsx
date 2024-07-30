import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "../Card/CardCarousel";
import { getProductos } from "../../helpers/fetch/getProductos";

const CarouselCard = () => {

    const [productosArray, setProductosArray] = useState([]);

    useEffect(() => {
        const onGetProductos = async () => {
            let productos = await getProductos();
            setProductosArray(productos);
            localStorage.setItem('productos', JSON.stringify(productos));
        };
        onGetProductos();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6 // opcional, por defecto es 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // opcional, por defecto es 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // opcional, por defecto es 1.
        }
    };

    return (
        <div className="container-carousel-card">
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // para renderizar el carrusel en el lado del servidor.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {productosArray && productosArray.length > 0 && 
            productosArray.map((producto) => 
            <div key={producto.id}>
                <CardCarousel id={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen}/>
            </div>)
            }

        </Carousel>
        </div>
    );
};

export default CarouselCard;
