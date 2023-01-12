import logo from './logo.svg';
import './App.css';
import ListStudents from './Pages/listStudents';
import StudentRegistration from './Pages/studentRegistration';
import AddCourse from './Pages/addCourse'; 
import ViewCourse from './Pages/viewAllCourse';
import ViewUser from './Pages/viewUser';
import Payment from './Pages/viewPayment';
import CreateNewUser from './Pages/createNewUser';
import DeleteCourseComponent from './Pages/DeleteCourseComponent';
import DeleteUserComponent from './Pages/DeleteUserComponent';
import Login from './Pages/login';
import ToggleSidebar from './Pages/Sidebar';
import Header from './Pages/header';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useCookies } from "react-cookie";
import {useState,useEffect } from 'react';
import MyAccount from './Pages/myAccount';
import UpdateCourseComponent from './Pages/UpdateCourseMain';
import UpdateUserComponent from './Pages/UpdateUserMain';
import StudentDelete from './Pages/deleteStudent';
import UpdateUser from './Pages/updateUserSub';
import UpdateCourse from './Pages/updateCourseSub';
import StudentUpdateMain from './Pages/updateStudentMain';
import UpdateStudent from './Pages/updateStudentSub';
import Home from './Pages/home';
import ForgotPassword from './Pages/forgotPassword';

function App() {
  const [cookies, setCookie] = useCookies(['access_token'])
  const [userdata,setUserData] = useState(cookies);
  const [logged,setLogged] = useState(false);
  
  useEffect(()=>{
      try{
        if(userdata.access_token.islogin == true)
        {
          setLogged(true);
        }
      }
      catch{
        console.log("User not logged IN")
      }
  },[]);

  return (
    
    <Router>
       <Header userlogged={logged}/>
          <div className='header'> 
            <ToggleSidebar userlogged={logged} />
          </div>
       
      <div className='main'>
        <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path="/student-register"  element={logged ? <StudentRegistration/> : <Login/>}/>
          <Route path="/update-student"  element={logged ? <StudentUpdateMain/> : <Login/>}/>
          <Route path ="/update-student/:sid" element={logged ?<UpdateStudent/>: <Login/>}/>
          <Route path="/delete-student"  element={logged ? <StudentDelete/> : <Login/>}/>
          <Route path="/students"  element={logged ? <ListStudents/> : <Login/>}/>
          <Route path ="/add-courses" element={logged ? <AddCourse/>: <Login/>}/>
          <Route path ="/update-course-list" element={logged ? <UpdateCourseComponent/>: <Login/>}/>
          <Route path ="/update-course/:cid" element={logged ?<UpdateCourse/>: <Login/>}/>
          <Route path ="/view-courses" element={logged ?<ViewCourse/>: <Login/>}/>
          <Route path ="/view-users" element={logged ?<ViewUser/>: <Login/>}/>
          <Route path ="/payments" element={logged ?<Payment/>: <Login/>}/>
          <Route path ="/create-user" element={logged ?<CreateNewUser/>: <Login/>}/>
          <Route path ="/update-user-list" element={logged ?<UpdateUserComponent/>: <Login/>}/>
          <Route path ="/update-user/:userid" element={logged ?<UpdateUser/>: <Login/>}/>
          <Route path ="/delete-user" element={logged ?<DeleteUserComponent/>: <Login/>}/>
          <Route path ="/delete-course" element={logged ?<DeleteCourseComponent/>: <Login/>}/>
          <Route path ="/my-account" element={logged ?<MyAccount/>: <Login/>}/>
          <Route path ="/forgot-password" element={<ForgotPassword/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
