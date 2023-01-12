import LoginService from "../services/LoginService";
import React ,{useState}from "react";
import UserService from "../services/UserService";
import validator from 'validator'

function ForgotPassword(){
    const [email,setEmail] = useState();
    const [userid,setUserId] = useState();
    const [password,setPassword] = useState({
        new_password : null,
        confirm_password : null
    });

    const [useredata, setUsereData] = useState( {
        userid: "",
        firstname: "",
        lastname: "",
        surname: "",
        nic: "",
        gender: "",
        dob: "",
        addressno: "",
        street: "",
        city: "",
        telephone: "",
        email: "",
        password: "",
    });

    const [formdata,setFormData] = useState({
        submit : false,
        verfied : false,
    });
    const [code,setCode] = useState();
    
    const getPaswordValues =(e)=>{
        setPassword((password) => ({...password,[e.target.id]:e.target.value}));
    }
    const getEmailAddress =(e)=>{
        setEmail(e.target.value);
    }
    const getCode =(e)=>{
        setCode(e.target.value);
        document.getElementById('btn_verify').hidden = false;
    }
    
    //
    const resetPassword=()=>{
        if(validator.isEmail(email))
        {
            LoginService.forgotPassword(email);
            setFormData((formdata) => ({...formdata,submit:true}));
            notifyUserEmailSent();
        }
        else
        {
            document.getElementById('mail_notification').innerText = "Please enter a valid email address !!";
            document.getElementById('mail_notification').hidden = false;
        }
    }
    const comparedata =(e)=>{
        //console.log("Sending the code " + code);
        LoginService.compare(code).then((res)=>{
            if(res.data != -1){
                //console.log("working...");
                //console.log(res.data);
                document.getElementById('mail_notification').innerText = "Thank You For Confirming | Please Set your new password.";
                setUserId(res.data);
                document.getElementById('verification_code').disabled = true;
                document.getElementById('btn_verify').disabled = true;
                document.getElementById('set_new_password').hidden = false;

                UserService.getUserById(res.data).then((resx) => {
                    setUsereData(resx.data);
                    //console.log(resx.data);
                });
            }
            else{
                document.getElementById('mail_notification').innerText = "Invalid Code Please Try Again !! ";
            }
        })
    }

    const setNewPassword =()=>{
        if(password.new_password.length >= 8)
        {
            if(password.new_password == password.confirm_password)
            {
                //console.log("ok");
                useredata.password = password.new_password;
                //console.log(useredata);
                UserService.updateUser(useredata);
                alert("Password Updated Sucessfully !!");
                window.location = "/login";
                document.getElementById('mail_notification').innerText = "Password Updated Sucessfully !!";
            }
            else{
                document.getElementById('mail_notification').innerText = "New Password and Confirm Password Not Equal !! | Please  Check again and try again !!";
            }
        }
        else{
            document.getElementById('mail_notification').innerText = "New password should be more than 8 characters !! ";
        }
    }
    //
    const notifyUserEmailSent =()=>{
        document.getElementById('mail_notification').innerText = "An Email has been sent to ( "+email+" ) | Please enter the verification code you received.";
        document.getElementById('mail_notification').hidden = false;
        document.getElementById('verification_code').disabled = false;
        document.getElementById('email').disabled = true;
        document.getElementById('btn_get_code').disabled = true;
    }
    
    return (
        <div class="page_bg">
            <div class="col-md-6 offset-md-3 all_forms">
                <br />
                <h3 className ="text-center fw-bold">Forgot Password
                </h3>
                <p id="mail_notification" class="alert alert-danger" hidden></p>
                <form>
                    <div class="mb-2">
                    <label class="form-label">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email Address Here"
                        value={email}
                        onChange={getEmailAddress}
                        required
                    ></input>
                    </div>
                
                    <button type="button" id="btn_get_code" class="btn btn-primary" onClick={resetPassword}>
                    Get Code
                    </button>
                    <br/>
                    <br/>
                    <div class="mb-2">
                    <label class="form-label">Verification Code</label>
                    <input
                        type="text"
                        class="form-control"
                        id="verification_code"
                        name="verification_code"
                        placeholder="Enter Your Verification Code Here"
                        value={code}
                        onChange={getCode}
                        disabled
                    ></input>
                    </div>
                
                    <button type="button" id="btn_verify" class="btn btn-primary" hidden onClick={comparedata}>
                    Verify
                    </button>
                    <br/>
                    <br/>
                    <div class="mb-2" id="set_new_password" hidden>
                        <label class="form-label">New Password</label>
                        <input
                            type="text"
                            class="form-control"
                            id="new_password"
                            name="new_password"
                            placeholder="Enter your new password"
                            value={password.new_password}
                            onChange={getPaswordValues}
                            required
                        ></input>
                        <br/>
                        <label class="form-label">Confirm New Password</label>
                        <input
                            type="text"
                            class="form-control"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Confirm your new password"
                            value={password.confirm_password}
                            onChange={getPaswordValues}
                            required
                        ></input><br/>
                        <button type="button" id="btn_get_code" class="btn btn-primary" onClick={setNewPassword}>
                    Change The Password
                    </button>
                    </div>
                </form>
                <br />
            </div>
        </div>
    );
}

export default ForgotPassword;