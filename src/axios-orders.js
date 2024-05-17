import axios from "axios";

const instance = axios.create({
    baseURL: "https://reactshoppingapp-337d6-default-rtdb.firebaseio.com"

});

export default instance;