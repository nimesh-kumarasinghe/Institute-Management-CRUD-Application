import React ,{useState}from "react";
import UserInput from "../Components/userInput";
import LoginService from "../services/LoginService";
import { useCookies } from "react-cookie";
import LoginImage from "../Backgrounds/login_Image.jpg";
import UserImage from "../Backgrounds/userimg.png";


function Login(){
    const [cookies, setCookie] = useCookies(['access_token'])

    const [userdata,setUserData] = useState({
        email : "",
        password : "",
    });

    const [authData,setAuthData] = useState({
        islogin :false,
        userid : ""
    });

    const getValues =(e)=>{
        setUserData((userdata) => ({...userdata,[e.id]:e.value}));
    }
    const authLogin =()=>{
        if(userdata.email.length==0){
            alert("Please fill E-mail address");
        }
        else if(userdata.password.length==0){
            alert("Please fill password");
        }
        else{
            LoginService.validate(userdata.email, userdata.password).then((res) => {
            const id = res.data;
            if(id != -1){
                authData.islogin = true;
                authData.userid = id;
                setCookie('access_token',authData, { path: '/'});
                LoginService.redirect();
            }
            else{
                alert("Please enter a valid email and password !!");
            }
            });
        }
    }
    return (
        <div>
            <form className="login_img">
            <img
                alt="loginImage"
                src={LoginImage}
                width="755px"
                height="753.2px"
            />
            </form>
        <div className="Auth-form-container p-5 page_bg" style={{width: 'auto',height:'99.2vh'}}>
            <form className="Auth-form">
                <div>
                <center><img
                        alt="userImage"
                        src={UserImage}
                        width="100px"
                        height="100px"
                    /></center>
                </div><br/>
                <div>
                <h4 className="Auth-form-title">LOGIN</h4>
                <UserInput label="Email Address" type="email" id="email" placeholder="Enter Your Email Address" onChange={getValues}/>
                <UserInput label="Password" type="password" id="password" placeholder="Enter Your Password" onChange={getValues}/>
                <div className="d-grid gap-2 mt-3 pt-3">
                    <button type="button" className="btn btn-primary" id="submit" onClick={authLogin}>LOGIN</button>
                    <center><a href="/forgot-password" class="link-secondary d-inline-flex p-2">Forgot password</a></center>
                </div>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Login;