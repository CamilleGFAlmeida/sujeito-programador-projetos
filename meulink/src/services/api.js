// minha chave:  b8f8963f9f5c42e141cf46bed7aa470034aed083

import axios from 'axios'; 

export const key = "b8f8963f9f5c42e141cf46bed7aa470034aed083";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api; 