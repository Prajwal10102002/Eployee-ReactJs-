import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registerStatus, setRegisterStatus] = useState('')
    const [reEnterPassword, setReEnterPassword] = useState('');

    const register = (e) => {
        e.preventDefault()
        if (password !== reEnterPassword) {
            
            alert("Passwords do not match");
            return;
        }
        Axios.post('https://employee-node-mqjr.vercel.app/register', {
            name: name,
            email: email,
            password: password,
        }).then((response) => {
            console.log(response);
            alert(response.data)
            if (response.data === "User registered successfully") {
                navigate('/login')
            } else {
                alert("User not Registered")
            }
        })

    }

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" placeholder='Your Name'
                                                        required
                                                        value={name} onChange={(e) => setName(e.target.value)}

                                                    />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control" placeholder='Your Email'
                                                        required
                                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                                    />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" placeholder='Password'
                                                        required
                                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                                    />

                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" placeholder='Repeat your password'
                                                        required
                                                        value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)}
                                                    />

                                                </div>
                                            </div>

                                            <div class="form-check d-flex justify-content-center mb-5">

                                                <label class="form-check-label" for="form2Example3">
                                                    Already a user? <a href="/login">Login</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg" onClick={register}>Register</button>
                                            </div>

                                        </form>
                                    </div>

                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Signup