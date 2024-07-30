import axios from 'axios';
import CryptoJS from 'crypto-js';
import { global } from '../../config/global';


export const crearDeuda = async ({ id, label, amount, daysValid }) => {
  const data = {
    debt: {
      idDeuda: id,
      amount: { currency: 'PYG', value: amount },
      label: label,
      validPeriod: { start: '2024-07-01T00:00:00Z', end: '2024-07-31T23:59:59Z' }
    }
  };

  try {
    const response = await axios.post(global.debtsUrl, data, {
      headers: {
        apikey: global.apiKeyPayment,
      }
    });
    
    const { debt } = response.data;
    const payUrl = debt.payUrl;
    const docId =  debt.docId;

    /* // Crear deuda en tu API y calcular HMAC
    const postBody = JSON.stringify(data);
    const secret = '080157bced87eef2f979a7f8a3b2d8e8'; // Tu secreto de la aplicación
    const hmac = CryptoJS.MD5('adams' + postBody + secret).toString();

    const response_api = await axios.post(global.apiUrl, data, {
      headers: {
        'x-adams-notify-hash': hmac,
      }
    }); */

    return {payUrl,docId};


  } catch (error) {
    console.error('Error creando deuda:', error.response?.data || error.message);
  }
};


