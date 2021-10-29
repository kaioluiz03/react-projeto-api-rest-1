import axios from 'axios';

const CaracterAPI = axios.create({
    baseURL: 'https://randomuser.me/api/?results=20'
});

export default CaracterAPI;