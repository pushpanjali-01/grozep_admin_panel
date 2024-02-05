import React from "react";
import logo from "../../assets/images/logo_img_light.svg";
import "./style.css";
import CustomTextField from "../../components/common/TextField";
import Buttons from "../../components/common/Button";
import line from "../../assets/images/login_line.svg";
import { useNavigate } from "react-router-dom";
import flag from "../../assets/images/flag.svg";
import "./style.css"
type Props = {};

const SigninPage = (props: Props) => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Perform any login logic here

        // After successful login, navigate to the sign-in page ("/signin")
        navigate("/signin");
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="heading1">
                <p className="login-text">Get your groceries within 30 minutes</p>
            </div>
            <div className="loginRegistration">
                <img src={line} alt="line" />{' '}
                <p className="login-description">Login or Registration</p>{' '}
                <img src={line} alt="line" />
            </div>
            <div className="input-field-signin">
                <div className="phone-input" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <img
                        src={flag}
                        alt="India Flag"
                        style={{ marginRight: '10px', width: '20px', height: '20px' }}
                    /> | +91
                    <CustomTextField
                        backgroundColor="#FFFFFF"
                        border='none'
                        outline='none'
                    />
                </div>
            </div>
            <div className="button">
                <Buttons
                    label="LOGIN"
                    color="#FFFFFF"
                    variant="/* Add your variant here */"
                    bgColor="black"
                    width="380px"
                    border="1px solid black"
                    borderRadius='10px'
                    onClick={handleSignIn}
                />
            </div>
            <div className="agreement">
                <div className="agreement-text-signin">
                    <p>By continuing, you agree to our</p>
                </div>
                <div className="agreement-text-signin">
                    <p>Terms & Conditions, Privacy & Policies</p>
                </div>
            </div>
        </div>
    );
};

export default SigninPage;
