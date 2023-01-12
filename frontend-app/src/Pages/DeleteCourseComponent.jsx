import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class DeleteCourseComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    
   deleteCourse(cid) {
        CourseService.deleteCourse(cid).then( res => {
            this.setState({courses: this.state.courses.filter(course => course.id !== cid)});
        });
        alert("Sucessfully deleted a course !! ");
        window.location = "/delete-course";
    }
    componentDidMount(){
        CourseService.getCourses().then((res) => {
            this.setState({courses: res.data})
        });
    }

    render() { 
        return (
            <div className='container text-center fw-bold all_forms'>
                <h2 className='text-center fw-bold'>DELETE COURSE</h2>
                <div className="row">
                    <div>
                    <table className='table table-stripped table-bordered table-hover'>
                         <thead>
                            <tr>
                                <th>Course ID</th>
                                <th>Course Name</th>
                                <th>Course Duration</th>
                                <th>Course Fee</th>
                                <th>Action</th>
                            </tr>
                         </thead>

                         <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                    <tr key = {course.cid}>
                                        <td> {course.cid} </td>
                                        <td> {course.cname} </td>
                                        <td> {course.cduration} </td>
                                        <td> {course.cfee} </td>
                                        <td>
                                        <button onClick={ () => this.deleteCourse(course.cid)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                         </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DeleteCourseComponent;