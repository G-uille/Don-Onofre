import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { global } from '../config/global';

const DebtStatus = ({ docId }) => {
    const [debtStatus, setDebtStatus] = useState(null);

    const fetchDebtStatus = async () => {
        try {
            const response = await axios.get(global.debtsUrl + `/${docId}`, {
                headers: {
                  apikey: global.apiKeyPayment,
                }
              });

            setDebtStatus(response.data);
            console.log("Esta es la deuda", response)
        } catch (error) {
            console.error('Error al obtener el estado de la deuda:', error);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchDebtStatus();
        }, 10000); // Actualizar cada 30 segundos
    
        return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    }, [docId]);
    

    return (
        <div>
            {/* <h3>Estado de la Deuda</h3>
            <p>ID: {debtStatus.docId}</p>
            <p>Estado: {debtStatus.status}</p>
            <p>Estado de Cobro: {debtStatus.payStatus}</p>
            <p>Última Actualización: {new Date(debtStatus.updatedAt).toLocaleString()}</p> */}
        </div>
    );
};

export default DebtStatus;
