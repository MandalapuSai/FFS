import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Fillingstation from '../assets/images/filling_station.jpg'


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
        { id: 1, name: 'SAI', lastname: 'Mandalapu', email: 'sai@gmail.com', password: '123', Id: '5236' },
        { id: 2, name: 'satish', lastname: 'Dandabathula', email: 'satish@gmail.com', password: '987', Id: '6757' }
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
            navigate('/home/dashboard');
        } else {
            toast.error("Invalid email or password !!!")
        }
    };



    return (
        <div className='conatiner-fluid' style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                    <div className="Fillingstation_warpper"></div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6'>
                    <div className="Sign_box_warpper">
                        <div className="Sign_warpper" >
                            {/* style={{ maxWidth: "400px", width: "100%" }} */}
                            <form onSubmit={Submit}>
                                <div className="sign_lable1">
                                   Sign In
                                </div>

                                <div className="mb-3">
                                    <input className="input_lable"
                                        value={formData.email}
                                        name="email"
                                        type="email"                                        
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
                                            className="input_lable_pass"
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

                                <div className="Terms_top">
                                    <input
                                        type="checkbox"
                                        className="Conditions_checkinput"
                                        id="terms"
                                        required
                                    />
                                    <label
                                        className="account_lable_p"
                                        htmlFor="terms">
                                        By creating an account, you agree to our Terms and Conditions
                                        Privacy Policy
                                    </label>
                                </div>

                                <button type="submit" className="submit_btn">
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