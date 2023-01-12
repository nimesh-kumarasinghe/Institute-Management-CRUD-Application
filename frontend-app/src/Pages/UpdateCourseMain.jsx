import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class UpdateCourseComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
        this.editCourse = this.editCourse.bind(this);
    }
    
    editCourse(cid) {
        CourseService.redirect(cid);
    }
    componentDidMount(){
        CourseService.getCourses().then((res) => {
            this.setState({courses: res.data})
        });
    }

    render() { 
        return (
            <div className='container all_forms'>
                <h2 className='text-center fw-bold'>UPDATE COURSE</h2>
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
                                        <button onClick={ () => this.editCourse(course.cid)} className="btn btn-info">Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                         </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
 
export default UpdateCourseComponent;