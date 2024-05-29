import axios from 'axios';


const authService = {
    login: async (username, password) => {
        try {
            const response = await axios.post('/api/login', { username, password });
            return response.data;
        } catch (error) {
            throw new Error('Login failed');
        }
    },

    logout: async () => {
        try {
            await axios.post('/api/logout');
        } catch (error) {
            throw new Error('Logout failed');
        }
    },

    register: async (username, password) => {
        try {
            const response = await axios.post('/api/register', { username, password });
            return response.data;
        } catch (error) {
            throw new Error('Registration failed');
        }
    },

    getUser: async () => {
        try {
            const response = await axios.get('/api/user');
            return response.data;
        } catch (error) {
            throw new Error('Failed to get user');
        }
    }
};

export default authService;