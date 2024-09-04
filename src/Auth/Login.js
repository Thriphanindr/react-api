import { useState } from "react"
import { validateEmail } from "../Utilze/util";

function Login(){

    var [Email,setEmail] = useState("");
    var [Password,setPassword] = useState("");
    var [EmailError,setEmailError] = useState("");
    var [PasswordError, setPasswordError] = useState("");
    
    function onhandEmail(e){
        setEmail(e.target.value)
    }

    function onhandPassword(e){
        setPassword(e.target.value)
    }

    function onhandLogin(e){
        if(validateEmail(Email)){
            setEmailError("")
        }else{
            setEmailError("Enter valid Email")
            setEmailError++
        }
        if(Password >= 8){
            setPasswordError("")
        }else{
            setPasswordError("enter valid password")
            setPasswordError++
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Welcome to Login</h1>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" onChange={e=>onhandEmail(e)} className="form-control" placeholder="Username"/>
                        <div className="text-danger">
                            {EmailError}
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
                        <button className="btn btn-warning" onClick={e=>onhandLogin(e)}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login