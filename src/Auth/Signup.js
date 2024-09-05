import { useState } from "react"
import { validateEmail } from "../Utilze/util";
import axios from "axios";

function Signup(){
    var [Name ,setName] = useState("");
    var [Email,setEmail] = useState("");
    var [Mobile,setMobile] = useState("");
    var [Password,setPassword] = useState("");
    var [NameError,setNameError] = useState("");
    var [EmailError,setEmailError] = useState("");
    var [MobileError,setMobileError] = useState("");
    var [PasswordError,setPasswordError] = useState("");
    
    function onhandName(e){
        setName(e.target.value)
    }

    function onhandEmail(e){
        setEmail(e.target.value)
    }

    function onhandMobile(e){
        setMobile(e.target.value)
    }

    function onhandPassword(e){
        setPassword(e.target.value)
    }
    let noError = 0;

    function onhandLogin(e){
       if(Name.length < 3){
        setNameError("Min 3 char")
        noError++
       }else{
        setNameError("")
       }
       if(validateEmail(Email)){
        setEmailError("")
       }else{
        setEmailError("EnterValid email")
        noError++
       }

       if(Mobile.length === 10){
        setMobileError("")
       }else{
        setMobileError("Enter valid mobile")
        noError++
       }
       if(Password.length >= 8){
        setPasswordError("")
       }else{
        setPasswordError("Enter valid password")
        noError++
       }
    }

    if(noError === 0){
        let apiInputData = {
            'email':Email, 'name': Name, 'mobile':Mobile, 'password':Password,  
        }
        axios.post('https://api.softwareschool.co/auth/signup',apiInputData)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Welcome to Signup</h1>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" onChange={e=>onhandName(e)} className="form-control" placeholder="Name"/>
                        <div className="text-danger">
                            {NameError}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" onChange={e=>onhandEmail(e)} className="form-control" placeholder="Email"/>
                        <div className="text-danger">
                            {EmailError}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Mobile</label>
                        <input type="text" onChange={e=>onhandMobile(e)} className="form-control" placeholder="Mobile Number"/>
                        <div className="text-danger">
                            {MobileError}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" onChange={e=>onhandPassword(e)} className="form-control" placeholder="Password"/>
                        <div className="text-danger">
                            {PasswordError}
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-warning" onClick={e=>onhandLogin(e)}>CreateAccount</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup