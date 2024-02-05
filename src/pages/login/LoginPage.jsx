import React from "react";
import logo from "../../assets/images/logo_img_light.svg";
import "./Style.css";
import CustomTextField from "../../components/common/TextField";
import Buttons from "../../components/common/Button";
import line from "../../assets/images/login_line.svg"
import { useNavigate } from "react-router-dom";
type Props = {};
const LoginPage = (props: Props) => {
    const navigate = useNavigate();
    const handleSignIn = () => {
        // Perform any login logic here
    
        // After successful login, navigate to the sign-in page ("/signin")
        navigate("/signin");
      };
    return (
        <div className="login-container">
            <div className="logo_img" >
                <img src={logo} alt="Logo" />
            </div>
            <div className="heading1">
                <p className="login-text">Get your groceries within 30 minutes</p>
            </div>
            <div className="loginReg">
                <img src={line} alt="line" />  <p className="login-description">Login or Registration</p>  <img src={line} alt="line" />
            </div>
            <div className="input-field">
                <CustomTextField
                    label="Mahendran@gmail.com"
                    variant="outlined"
                    width='380px'
                    backgroundColor="#FFFFFF"
                    borderRadius="5px"
                />
            </div>
            <div className="input-field">
                <CustomTextField
                    label="Enter password"
                    variant="outlined"
                    width='380px'
                    backgroundColor="#FFFFFF"
                    borderRadius="5px"
                />
            </div>
            <div className="button-group">
                <Buttons
                    label="Sign in using OTP"
                    color="#009FF9"
                    variant="/* Add your variant here */"
                    bgColor="#FFFFFF"
                />
                <Buttons
                    label="Forgot Password?"
                    color="#FFFFFF"
                    variant="/* Add your variant here */"
                />
            </div>
            <div>
                <Buttons
                    label="SIGN IN"
                    color="#FFFFFF"
                    variant="/* Add your variant here */"
                    bgColor="black"
                    width='380px'
                    border='1px solid black'
                    onClick={handleSignIn}
                />
            </div>
            <div className="agreement-text">
                <p>
                    By continuing, you agree to our
                </p>
            </div>
            <div className="agreement-text">
                <p>  Terms & Conditions, Privacy & Policies</p>
            </div>

        </div >
    );
};

export default LoginPage;
