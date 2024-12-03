import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Sign() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });



    const LoginData = [
        { id: 1, name: 'SAI', lastname: 'Dandabathula', email: 'sai@gmail.com', password: '123', Id: '5236' },
        { id: 2, name: 'satish', lastname: 'Mandalapu', email: 'satish@gmail.com', password: '987', Id: '6757' }
    ]


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const Submit = (event) => {
        event.preventDefault();
        const isValidUser = LoginData.find((user) => user.email === formData.email && user.password === formData.password);
        if (isValidUser) {
            toast.success("Login successfully !!!!")
            localStorage.setItem('User', JSON.stringify({ isValidUser }));
            navigate('/home');
        } else {
            toast.error("Invalid email or password !!!")
        }
    };



    return (
        <div className='conatiner-fluid' style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-md-6'>
                    <div style={{ height: '100vh' }}>
                        <img src='https://keralaprisons.gov.in/assets/images/fuel_station/kannur_01.jpg' alt='' style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ height: "100vh", backgroundColor: "#f8f9fa", padding: '0px 25px' }}
                    >
                        <div className="form-container bg-white p-4 rounded shadow" >
                            {/* style={{ maxWidth: "400px", width: "100%" }} */}
                            <form onSubmit={Submit}>
                                <div>
                                    <h2 className="text-center mb-4">Sign In</h2>
                                </div>

                                <div className="mb-3">
                                    <input
                                        value={formData.email}
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email address"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <div className="input-group">
                                        <input
                                            value={formData.password}
                                            name="password"
                                            type={passwordVisible ? "text" : "password"}
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                            onChange={handleChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <i
                                                className={`bi ${passwordVisible ? "bi-eye-slash" : "bi-eye"
                                                    }`}
                                            ></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="form-check mb-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="terms"
                                        required
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="terms"
                                        style={{ fontSize: "0.8rem" }}
                                    >
                                        By creating an account, you agree to our Terms and Conditions
                                        Privacy Policy
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
