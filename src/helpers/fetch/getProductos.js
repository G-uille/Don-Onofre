
import { global} from "../../config/global";
import axios from "axios";

export const getProductos = async () => {
    try{
        let url = global.apiUrl + "productos";

        let response = await axios.get(url);
        console.log("Estos son los productos", response)
        return response.data;
    }
    catch(error){
        console.log("error al traer los productos", error);
    }
};
