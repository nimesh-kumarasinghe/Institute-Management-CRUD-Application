import axios from "axios";

const LOGIN_REST_API_URL = 'http://localhost:8081/users/login/';


class LoginService{
    validate(email,password){
        return axios.post(LOGIN_REST_API_URL +email+"/"+password);
    }
    redirect(id){
        window.location='/my-account';
    }
    forgotPassword(email){
        return axios.post('http://localhost:8081/users/forgotPassword/' + email);
    }
    compare(code){
        return axios.post('http://localhost:8081/users/forgotPassword/compare/' + code);
    }
}

export default new LoginService()