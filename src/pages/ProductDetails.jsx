import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductSelectedDetails from "../components/Card/ProductSelectedDetail";


const ProductDetails = () => {

    const { id } = useParams();
    
    const [productSelectedArray, setProductSelectedArray] = useState([]);

    useEffect(() => {
        const onGetProductsToStorage = async () => {
            let productos = JSON.parse(localStorage.getItem('productos'));
            
            let existingProduct = productos.filter((product) => `${product.id}` === id);
            console.log("Existe un producto con ese id: ", existingProduct)
            if (existingProduct.length > 0)  setProductSelectedArray(existingProduct);
           
        };
        onGetProductsToStorage();
    }, []);

    return(
        <div className="container-product-details">

            {productSelectedArray && productSelectedArray.length > 0 &&
            productSelectedArray.map((product) => <ProductSelectedDetails image={product.imagen} name={product.nombre} key={product.id} 
            price={product.precio} stock={product.stock}/>)}

            {productSelectedArray && productSelectedArray.length === 0 && <h1>No se encontró el producto</h1>}

        </div>
    )
};

export default ProductDetails;