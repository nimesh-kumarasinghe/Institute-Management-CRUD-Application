import axios from "axios";

const COURSE_API_BASE_URL = "http://localhost:8083/courses";

class CourseService{

    createCourse(course){
        return axios.post(COURSE_API_BASE_URL,course);
    }

    getCourses(){
        return axios.get(COURSE_API_BASE_URL);
    }
    getCourseById(cid) {
        return axios.get(COURSE_API_BASE_URL + '/' + cid)
    }
    updateCourse(course) {
        return axios.put(COURSE_API_BASE_URL, course);
    }
    deleteCourse(cid){
        return axios.delete(COURSE_API_BASE_URL + '/' + cid);
    }
    redirect(cid){          
        window.location='/update-course/' + cid;
    }
    getCourseDetails(){
        return axios.get(COURSE_API_BASE_URL);
    }
    getCourse(id){
        return axios.get(COURSE_API_BASE_URL + '/' + id);
    }

}

export default new CourseService()