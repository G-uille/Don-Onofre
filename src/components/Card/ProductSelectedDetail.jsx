import React, { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { FormControl, FormHelperText, MenuItem } from "@mui/material";
import { crearDeuda } from "../../helpers/fetch/crearDeuda";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import DebtStatus from "../../pages/DebtStatus";
/* import ReactImageZoom from 'react-image-zoom';
 */ 
import PrismaZoom from 'react-prismazoom'

const ProductSelectedDetails = ({ image, name, price, stock }) => {

    const litro = 10;
    const [urlPay, setUrlPay] = useState("");
    const [lastIdDeuda, setLastIdDeuda] = useState(null);

    
    const handleSubmitBuy = async () => {
        try{
            // Generar idDeuda único
            const idDeuda = uuidv4();
            let response = await crearDeuda({ id: idDeuda, label: "name", amount: price, daysValid: 10 });
            console.log("ESTOOOOOO ME DEVOLVI[OOOOOO", response.payUrl);
            setLastIdDeuda(response.docId);
            if (response) setUrlPay(response.payUrl);
        }
        catch(error){
            console.log("Error al pagar")
        }   
    };

    useEffect(() => {
        if (urlPay) {
            window.open(urlPay, '_blank');
        }
    }, [urlPay]);

    const props = {width: 400,  img: image, offset: {"vertical": 0, "horizontal": 10}};

    return (
        <div className="container-product-selected-details">
           {/*  <ReactImageZoom {...props} /> */}
           <div className="container-image__mask">

           <PrismaZoom>
            <img src={image} alt={name} className="product-selected-details__img" />

           </PrismaZoom>
                <FormHelperText sx={{ /* width: "100%", */ display: "flex", justifyContent: "left", zIndex: "10000" }}>Arrastra la rueda del ratón para hacer Zoom y mueve la imagen a tu parecer.</FormHelperText>
           </div>

            <div className="container-product-selected__descriptions">
                <h3 className="product-selected__title">Don Onofre</h3>
                <h1 className="product-selected__name"> {name}</h1>
                <FormHelperText sx={{ width: "100%", display: "flex", justifyContent: "left" }}>Disponible(s) en stock: {stock} unidades.</FormHelperText>
                <h3 className="product-selected__title">Contenidos</h3>
                <FormControl sx={{ m: 1, minWidth: 120, width: "100%" }} disabled>
                    <InputLabel id="demo-simple-select-disabled-label">Litros</InputLabel>
                    <Select
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        value={litro}
                        label="Age"

                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>750 ml</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <h3 className="product-selected__title">Precio: </h3>
                <span className="product-selected__name"> PYG {price} </span>
                <button onClick={handleSubmitBuy} className="product-selected__btn">Comprar</button>

            </div>
            <DebtStatus docId={lastIdDeuda}/>
        </div>
    )
};

export default ProductSelectedDetails;  