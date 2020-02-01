import axios from 'axios';

const KEY = 'AIzaSyD5fZkIfuJH_eUdFS3AJQrBF0GtYn9hrKo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});