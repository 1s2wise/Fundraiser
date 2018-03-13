import axios from 'axios';

const BASE_URL = 'http://52.41.54.41:3001/';

export function signupAPI(body)
{
    var url = 'fundraisers/';
    return axios.post(BASE_URL+url,body);
}

export function loginAPI(body)
{
    var url = 'login';
    return axios.post(BASE_URL+url,body);
}