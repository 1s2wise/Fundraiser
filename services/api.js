import axios from 'axios';

const BASE_URL = 'http://52.41.54.41:3001/';


axios.interceptors.request.use((config) => {
    const authKey = window.sessionStorage.getItem("AuthKey");
    console.log('auth', authKey);
	if( authKey ) {
		config.headers['Auth'] = authKey;
		return config;
	}
	else {
		return config;
	}
});

export function signupAPI(body)
{
    var url = 'fundraisers/';
    return axios.post(BASE_URL+url,body);
}

export function loginAPI(body)
{
    var url = 'fundraisers/login';
    console.log('enyx');
    return axios.post(BASE_URL+url,body);
}

export function userUpdateAPI(body,uid)
{
    var url = 'fundraisers/'+uid;
    console.log('userupdateapi');

    return axios.put(BASE_URL+url,body);
}