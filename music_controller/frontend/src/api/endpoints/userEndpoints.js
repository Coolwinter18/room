// Import any necessary modules or dependencies

// Define your user endpoints here

// Export the user endpoints
import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export function getRoomData() {
  return axios.get(`${BASE_URL}/room`);
}