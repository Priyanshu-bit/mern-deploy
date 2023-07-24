import axios from 'axios';


const API_URI="22AimwKMNYcH6NpJ9fNdrlJiOQpP0iKSoOjxy30KlqpULcXZL4Nzzg3SD6gOanbD"
export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}