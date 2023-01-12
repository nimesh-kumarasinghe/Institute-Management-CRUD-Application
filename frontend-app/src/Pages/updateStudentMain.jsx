import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class StudentUpdateMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
        this.editStudent = this.editStudent.bind(this);
    }
    editStudent(sid) {
        StudentService.redirect(sid);
    }
    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({students: res.data})
        });
    }

    render() { 
        return ( 
            <div className='container all_forms'>
                <h2 className='text-center fw-bold'>UPDATE STUDENT</h2>
                <div>
                    <table className='table table-stripped table-bordered table-hover'>
                         <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Surname</th>
                                <th>NIC</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Address No</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>Telephone</th>
                                <th>Email</th>
                                <th>Course ID</th>
                                <th>Action</th>
                            </tr>
                         </thead>

                         <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                    <tr key={student.sid}>
                                        <td>{student.sid}</td>
                                        <td>{student.firstname}</td>
                                        <td>{student.lastname}</td>
                                        <td>{student.surname}</td>
                                        <td>{student.nic}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.dob}</td>
                                        <td>{student.addressno}</td>
                                        <td>{student.street}</td>
                                        <td>{student.city}</td>
                                        <td>{student.telephone}</td>
                                        <td>{student.email}</td>
                                        <td>{student.cid}</td>
                                        <td>
                                        <button onClick={ () => this.editStudent(student.sid)} className="btn btn-info">Update</button>
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
 
export default StudentUpdateMain;