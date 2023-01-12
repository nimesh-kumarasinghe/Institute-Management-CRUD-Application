import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8082/students";

class StudentService{

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    addStudent(student_data){
        return axios.post(STUDENT_API_BASE_URL,student_data)
    }
    deleteStudent(sid){
        return axios.delete(STUDENT_API_BASE_URL + '/' + sid);
    }
    redirect(sid){          
        window.location='/update-student/' + sid;
    }
    getStudent(id){
        return axios.get(STUDENT_API_BASE_URL + '/' + id);
    }
    getStudentDetails(){
        return axios.get(STUDENT_API_BASE_URL);
    }
    updateStudent(student) {
        return axios.put(STUDENT_API_BASE_URL, student);
    }
    getStudentById(sid) {
        return axios.get(STUDENT_API_BASE_URL + '/' + sid)
    }


}

export default new StudentService()