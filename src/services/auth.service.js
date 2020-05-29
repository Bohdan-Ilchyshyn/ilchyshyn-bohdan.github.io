import axios from "axios";
const API_URL = "https://plservice.herokuapp.com/auth/"

class AuthService {
    login (username, password) {
        return axios
            .post(API_URL + "login/", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user_token', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout (){
        localStorage.removeItem('user_token');
    }
    registration (username, email, password1, password2) {
        return axios.post(API_URL + "registration/", {
            username,
            email,
            password1,
            password2
        });
    }
    getCurrentUser() {
        // if (JSON.parse(reactLocalStorage.get("user_token"))) {
        //     return JSON.parse(reactLocalStorage.get("user_token"));
        // }else{
        //     return null;
        // }
        return localStorage.getItem('user_token');
    }
}

export default new AuthService();
