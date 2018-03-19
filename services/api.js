import axios from 'axios';

const BASE_URL = 'http://52.41.54.41:3001/';


axios.interceptors.request.use((config) => {
    const authKey = window.sessionStorage.getItem("AuthKey");
    console.log('auth', authKey);
    if (authKey) {
        config.headers['Auth'] = authKey;
        return config;
    }
    else {
        return config;
    }
});

export function signupAPI(body) {
    var url = 'fundraisers/';
    return axios.post(BASE_URL + url, body);
}

export function loginAPI(body) {
    var url = 'fundraisers/login';
    console.log('loginAPI');
    return axios.post(BASE_URL + url, body);
}

export function getUserData(uid)
{
    var url = 'fundraisers/'+uid
    return axios.get(BASE_URL + url);

}

export function userUpdateAPI(body, uid) {
    var url = 'fundraisers/' + uid;
    console.log('userupdateapi');

    return axios.put(BASE_URL + url, body);
}

export function imageUpload(imgFile, imgType, userID) {

    var url = "common/imageUpload";
    const data = new FormData();
    data.append('file', imgFile);
    data.append('type', imgType);
    data.append('user_id', userID);

    axios.post(BASE_URL + url, data).then((response) => {

        if (imgType == "fundraiserProfile") {
            window.sessionStorage.setItem("profileImg", response.data.image_url);
        }
        else if (imgType == "fundraiserLogo") {
            window.sessionStorage.setItem("logoImg", response.data.image_url);
        }
    });

}