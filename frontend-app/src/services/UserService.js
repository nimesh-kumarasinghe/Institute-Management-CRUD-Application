import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/users";

class UserService{

    createUser(user){
        return axios.post(USER_API_BASE_URL,user);
    }
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
    getUserById(userid) {
        return axios.get(USER_API_BASE_URL + '/' + userid)
    }
    deleteUser(userid){
        return axios.delete(USER_API_BASE_URL + '/' + userid);
    }
    redirect(userid){          
        window.location='/update-user/' + userid;
    }
    updateUser(user) {
        console.log(user);
        return axios.put(USER_API_BASE_URL, user);
    }

}

export default new UserService()