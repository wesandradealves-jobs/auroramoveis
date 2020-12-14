import axios from 'axios';

// process.env.NODE_ENV

const api = axios.create({
	baseURL: 'https://loja.auroramoveis.com.br'
});

export default api;
