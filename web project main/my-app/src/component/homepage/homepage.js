import React from 'react';
import { Nav, Navbar, Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Pagination from 'react-bootstrap/Pagination'

import Swal from 'sweetalert2'


function ABC()
{
    return(
        Swal.fire({
            icon: 'success',
            title: 'saved successfully ',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    )
    
    
    ;
}


function Home({ setLoginUser }) {
    return (

        <div className="login">
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link onClick={() => setLoginUser({})}>Logout</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <br />

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/first.jpg"
                            alt="First slide"
                            id='id1'
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/second.jpg"
                            alt="Second slide"
                            id='id1'
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/third.jpg"
                            alt="Third slide"
                            id='id1'
                        />


                    </Carousel.Item>
                </Carousel>
                <form>
                        <table class="table " >
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">No: </th>
                                    <th scope="col">Student Name</th>


                                    <th scope="col">Monday</th>
                                    <th scope="col">Tuesday</th>
                                    <th scope="col">Wednesday</th>
                                    <th scope="col">Thursday</th>
                                    <th scope="col">Friday</th>
                                    <th scope="col">Saturday</th>
                                    <th scope="col">Sunday</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">#</th>
                                    <td></td>
                                    <td><input type="date" id="birthday" name="birthday" /></td>      
                                    <td><input type="date" id="birthday" name="birthday" /></td>
                                    <td><input type="date" id="birthday" name="birthday" /></td>
                                    <td><input type="date" id="birthday" name="birthday" /></td>
                                    <td><input type="date" id="birthday" name="birthday" /></td>
                                    <td><input type="date" id="birthday" name="birthday" /></td>
                                    <td><input type="date" id="birthday" name="birthday" /></td>

                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <div class="form-group">

                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter S-Name" />
                                        </div>

                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                                                 <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>
                                        <div class="form-group">

                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter S-Name" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>
                                        <div class="form-group">

                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter S-Name" />
                                        </div>

                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                                                 <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>
                                        <div class="form-group">

                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter S-Name" />
                                        </div>

                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                                                 <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>
                                        <div class="form-group">

                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter S-Name" />
                                        </div>

                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                                                 <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>
                                        <div class="form-group">

                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter S-Name" />
                                        </div>

                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                                                 <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>
                                        <div class="form-group">

                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter S-Name" />
                                        </div>

                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                                                 <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>
                                        <div class="form-group">

                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter S-Name" />
                                        </div>

                                    </td>
                                    <td>
                                        <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                                                 <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option>P</option>
                                                <option>A</option>

                                            </select>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <button type="" class="btn btn-primary" id='btn1' onClick={ABC}>Submit</button>
                        <br></br>
                        <br></br>


                    <div class="login">
                        <div class="row">
                            <div class="col-sm" >
                            <a href="https://www.facebook.com/ssuetians/"><img src="./images/fb.png" id="idd" alt="logo"/></a> &nbsp;&nbsp;&nbsp;
                            <a href="https://twitter.com/ssuet_official?lang=en"><img src="./images/twitter.png" id="iddd" alt="logo"/></a>&nbsp;&nbsp;&nbsp;
                            <a href="https://www.ssuet.edu.pk/?__cf_chl_f_tk=Uzqrr8NU979e3ElBqc2_SCDQGxLt7s_jXBdPcpi1Sn4-1642533500-0-gaNycGzNB9E"><img src="./images/web.png" id="iddd" alt="logo"/></a>
                            </div>
                            <div class="col-sm" id='id5'>
                            
                            
                            </div>
                            <div class="col-sm" id='id5'>
                            


                            </div>
                        </div>
                    </div>


                
                        </form>
                  

        

            </div>
        
    )

}
export default Home;