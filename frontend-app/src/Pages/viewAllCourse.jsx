import React, { Component } from 'react';
import CourseService from '../services/CourseService';
class ViewCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course:[]
        }
    }
    componentDidMount(){
        CourseService.getCourses().then((res) =>{
                this.setState({course: res.data})
        });
    }
    render() { 
        return (  
            <div className = "container all_forms">
                <h2 className='text-center fw-bold'>COURSE LIST</h2>
                <div className='row'>
                <div>
                    <table className='table table-stripped table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>Course ID</th>
                                <th>Course Name</th>
                                <th>Course Duration</th>
                                <th>Course Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.course.map(
                                    course=>
                                    <tr key = {course.cid}>
                                        <td>{course.cid}</td>
                                        <td>{course.cname}</td>
                                        <td>{course.cduration}</td>
                                        <td>{course.cfee}</td>
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
 
export default ViewCourse;