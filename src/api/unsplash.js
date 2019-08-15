import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID bf04131f720b4aa0871ec7d37d76330a1f0cd5653ec646ac7d05f8a296068241'
    }
});