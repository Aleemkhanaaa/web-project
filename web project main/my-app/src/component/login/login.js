import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {

        
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            // alert(res.data.message)
            Swal.fire({
                title: res.data.message,
                imageUrl: './images/user.png',
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: 'Custom image',
              })
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        
        <div className="login">
 
        
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                 <img src="./images/user.png" id="id5" alt="logo"/>
                 
                  <h4 class="mt-1 mb-5 pb-1">Attendance Management System</h4>
                </div>

                <form>
                  <p><b>Please login to your account</b></p>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example11"><b>Username</b></label>
                    <input type="email" id="form2Example11" class="form-control" name="email" value={user.email} onChange={handleChange} placeholder="Enter Email" required></input>
                  </div>

                  <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example22"><b>Password</b></label>
                    <input type="password" id="form2Example22" class="form-control" name="password" value={user.password} onChange={handleChange}  placeholder="Enter Password" required ></input>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button id="btnsize" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={login}>Log in</button>
                    <br></br>
                    <button id="btnsize" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={() => history.push("/register")}>SignUp</button>
                  
                  </div>

  

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
              <img id="id10" src="./images/ssuet.png"  alt="logo"/>
              <br></br>
              <br></br>
              <br></br>
                <h4 class="mb-4">Web Engineering Project</h4>
                <h3 class="mb-4">Submitted By </h3>
                <h5 >Muhammad Aleem Khan (2019-SE-080) </h5>
                <h5 >Muhammad Usama (2019-SE-086) </h5>
                <h5 >Maheen Syed (2019-SE-087) </h5>
                <h5 >Shajee soharwardi (2019-SE-091) </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/* </section> */}
</div>
    )
}

export default Login