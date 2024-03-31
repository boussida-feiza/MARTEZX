import loginImg from "../pages/image/login.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import '../pages/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
function Login () {
  const [email, setEmail]=useState("");
  const [password , setPassword]=useState("");
  const handleSubmit =(Event)=> {
    Event.preventDefault();
    alert ( `you email is: ${email}, your password is :${password}`);
  }
    return(
        <>
<div className='container-fluid  style'>
    <div className='row '>
        <div className='col-6 lg-6 sm-3'> 
        <img src={loginImg} className='img-fluid' alt=''></img>

        </div>
        <div className="col-6 lg-6 sm-3 d1">
            <form onSubmit={handleSubmit} className="forme">
                <h2 className="titel">Login to your account </h2>
        <div class="mb-3 row F2" > 
        
    <label for="staticEmail" class="col-sm-2 col-form-label ">Email</label>
    <div class="col-sm-10">
      <input type="email"  class="form-control" id="" placeholder="email" value={email}  
       onChange={(e) => setEmail(e.target.value)     }  />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label ">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control " id="" placeholder="password"    value={password}
        onChange={(p) => setPassword(p.target.value) } />
    </div>
  </div>
  <button className="btn btn-primary b1 " type="submit"> Login</button> <br></br>

  <p>     <FontAwesomeIcon icon={faUserLock } />creat new account   
  </p>
  </form>
        </div>
    </div>

</div>
        </>

    );
};
export default Login;