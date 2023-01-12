import React, { Component } from 'react';
import CourseService from '../services/CourseService';

class AddCourse extends Component {
    constructor(props) {
        super(props);

        this.state ={
            cname: "",
            cduration: "",
            cfee: "",
        }
    }

    submitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state);
        CourseService.createCourse(this.state).then(res =>{
        console.log(res);
        });
        alert("Sucessfully added a course !! ");
        window.location = "/add-courses";
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() { 
        const{
            cname,
            cduration,
            cfee,
        } = this.state;
        return ( 
            <div className = "p-3 page_bg text-black" style={{ width: "auto", height: "76.3vh"}}>
                <div>
                    <div className ="col-md-6 offset-md-3 all_forms">
                        <h3 className ="text-center fw-bold">ADD COURSE</h3>
                        <div>
                            <form onSubmit={this.submitHandler}>
                                <div className='form-group mb-4'>
                                    <label className='text-black'>Course Name</label>
                                    <input 
                                    type="text" 
                                    className='form-control' 
                                    name='cname' 
                                    placeholder='Enter Course Name'
                                    value={cname} 
                                    onChange={this.changeHandler}
                                    required/>
                                </div>
                                <div class="form-group mb-4">
                                    <label className='text-black'>Course Duration</label>
                                    <input 
                                    type="text" 
                                    className='form-control' 
                                    name='cduration' 
                                    placeholder='Enter Course Duration'
                                    value={cduration} 
                                    onChange={this.changeHandler}
                                    required/>
                                </div>
                                <div class="form-group mb-4">
                                    <label className='text-black'>Course Fee</label>
                                    <input 
                                    type="type" 
                                    className='form-control' 
                                    name='cfee' 
                                    placeholder='Enter Course Fee'
                                    value={cfee} 
                                    onChange={this.changeHandler}
                                    required/>
                                </div>
                                <button className='btn btn-primary'>Add Course</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AddCourse;