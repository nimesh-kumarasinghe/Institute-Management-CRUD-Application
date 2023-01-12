import axios from "axios";

const PAYMENT_REST_API_URL = 'http://localhost:8084/payments';

class PaymentService{
    
    createPayment(data){
        return axios.post(PAYMENT_REST_API_URL,data);
    }
    getPayment(){
        return axios.get(PAYMENT_REST_API_URL);
    }
}

export default new PaymentService()