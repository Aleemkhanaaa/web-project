import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'
import axios from "axios";
import {
    useHistory
} from 'react-router-dom';
import Swal from 'sweetalert2'

function Register() {
    // const navigate = useNavigate();
    const history = useHistory()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    Swal.fire({
                        title: res.data.message,
                        imageUrl: './images/user.png',
                        imageWidth: 100,
                        imageHeight: 100,
                        imageAlt: 'Custom image',
                      })
                    history.push("/login")
                })

        } else {
            Swal.fire({
                title: 'Invalid Inputs',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }

    }


    return (

        // <div className="wrapper" style={{backgroundColor:'gray'}}>
        //     {console.log("User", user)}
        //     <div class="logo"> <img src="./images/user.png" alt="" /> </div>
        //     <br></br>
        // <div > <h3 color="black" ><b>Attendance Management System</b></h3> </div>
        // <div > <h3 color="black" >Signup </h3></div>
        //     <form class="p-3 mt-3">
        //     <h5  ><b>User Name</b></h5>
        //         <div class="form-field d-flex align-items-center" style={{backgroundColor:'white'}}> 
        //             <span class="far fa-user"></span> <input  type="text" name="name" value={user.name} placeholder="Username" id="userName" onChange={handleChange} />
        //         </div>
        //         <h5 color="black" ><b>Email</b></h5>
        //         <div class="form-field d-flex align-items-center" style={{backgroundColor:'white'}}>
        //             <span class="far fa-user"></span> <input type="email" name="email" value={user.email} placeholder="UserEmail" id="userName" onChange={handleChange} />
        //         </div>
        //         <h5 color="black" ><b>Password</b></h5>
        //         <div class="form-field d-flex align-items-center" style={{backgroundColor:'white'}}>
        //             <span class="fas fa-key"></span> <input type="password" name="password" value={user.password} placeholder="Password" id="pwd" onChange={handleChange} />
        //         </div>
        //         <h5 color="black" ><b>Re Enter Password</b></h5>
        //         <div class="form-field d-flex align-items-center" style={{backgroundColor:'white'}}>
        //             <span class="fas fa-key"></span> <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter-Password" id="pwd" onChange={handleChange} />
        //         </div>
        //         <div class="btn mt-3" onClick={register} style={{backgroundColor:'green'}}>SignUp</div>
        //         <div class="btn mt-3" onClick={() => history.push("/login")} style={{backgroundColor:'green'}}>login</div>

        //     </form>
        // </div>
        <div className="login">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10" id="maincol">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6" id="maincol2">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                 <img src="./images/user.png" id="id5" alt="logo"/>
                 
                  <h4 class="mt-1 mb-5 pb-1">Attendance Management System</h4>
                </div>

                <form>
                  <p><b>Please Fill Following Fields</b></p>
                  <label class="form-label" for="form2Example11"><b>Username</b></label>
                  <div class="form-outline mb-4">
                  
                  <span class="far fa-user"></span> <input id="form2Example11" class="form-control" type="text" name="name" value={user.name} placeholder="Username" id="userName" onChange={handleChange} />
                  </div>
                  <label class="form-label" for="form2Example22"><b>Email</b></label>
                  <div class="form-outline mb-4">
                  <span class="far fa-user"></span> <input id="form2Example11" class="form-control" type="email" name="email" value={user.email} placeholder="UserEmail" id="userName" onChange={handleChange} />
                    </div>
                  <label class="form-label" for="form2Example22"><b>Password</b></label>
                  <div class="form-outline mb-4">
                  
                  <span class="fas fa-key"></span> <input id="form2Example11" class="form-control" type="password" name="password" value={user.password} placeholder="Password" id="pwd" onChange={handleChange} />
                  </div>
                  <label class="form-label" for="form2Example22"><b>Re-Enter Password</b></label>
                  <div class="form-outline mb-4">
                  
                  <span class="fas fa-key"></span> <input id="form2Example11" class="form-control" type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter-Password" id="pwd" onChange={handleChange} />
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button id="btnsize" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={register}>Sign Up</button>
                    <br></br>
                    <button id="btnsize" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={() => history.push("/login")}>Login</button>
                  
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

    );
}
export default Register;