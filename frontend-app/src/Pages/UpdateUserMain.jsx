import React, { Component } from 'react';
import UserService from '../services/UserService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            users: []
         }
        this.editUser = this.editUser.bind(this);
        
    }
        
    editUser(userid) {
        UserService.redirect(userid);
    }

    componentDidMount() {
        UserService.getUsers().then((res) =>{
            this.setState({users: res.data})
        });
    }
    render() { 
        return ( 
            <div className='container all_forms'>
                <h2 className='text-center'>UPDATE USER</h2>
                <div>
                    <table className='table table-stripped table-bordered table-hover'>
                        <thead>
                            <tr>
                            <th>User ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Surname</th>
                                <th>NIC</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Adress NO</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>Mobile Number</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key={user.userid}>
                                        <td> {user.userid} </td>
                                        <td> {user.firstname} </td>
                                        <td> {user.lastname} </td>
                                        <td> {user.surname} </td>
                                        <td> {user.nic} </td>
                                        <td> {user.gender} </td>
                                        <td> {user.dob} </td>
                                        <td> {user.addressno} </td>
                                        <td> {user.street} </td>
                                        <td> {user.city} </td>
                                        <td> {user.telephone} </td>
                                        <td> {user.email} </td>
                                        <td>
                                            <button onClick={ () => this.editUser(user.userid)} className="btn btn-info"> Update </button>
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
 
export default UpdateUserComponent;