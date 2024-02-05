import React, { useState } from "react";
import logo from "../../assets/images/grozep_logo_dark.svg";
import Buttons from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import line from "../../assets/images/line.svg"
import "./style.css"
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Grid,
} from "@mui/material";

type Props = {};

const OtpVerificationPage = (props: Props) => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleSignIn = () => {
        // Combine the digits to form the OTP
        const enteredOtp = otp.join('');

        // Perform any login logic here with enteredOtp

        // After successful login, navigate to the sign-in page ("/signin")
        navigate("/signin");
    };

    const handleOtpChange = (index: number, value: string) => {
        // Update the OTP array with the entered digit
        const updatedOtp = [...otp];
        updatedOtp[index] = value;

        // Move focus to the next input field if a digit is entered
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }

        setOtp(updatedOtp);
    };

    return (

        <div className="otp-container">
            <div className="logo_image">
                <img src={logo} alt="Logo" />
            </div>
            <Card class="otp-card">
                <CardContent>
                    <div>
                        <Typography style={{ fontSize: '44px', color: 'black', fontWeight: 'bold' }}>OTP Verification</Typography>
                        <Typography style={{ color: '#696969', fontSize: '18px', paddingBottom: '20px' }}>
                            We've sent OTP to the requested number via SMS. Please enter
                            the OTP code:
                        </Typography>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                paddingBottom: '10px',
                                paddingTop: '10px',
                            }}
                        >
                            {otp.map((digit, index) => (
                                <>
                                    <TextField
                                        key={index}
                                        id={`otp-input-${index}`}
                                        type="text"
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            margin: '0 0.2em',
                                            borderRadius: '8px',
                                            textAlign: 'center',
                                        }}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                    />
                                    {index === 2 && <span style={{ margin: '0 0.2em',paddingTop:'6px'}}><img src={line} alt="line"/></span>}
                                </>
                            ))}
                        </div>
                        <div className="resend">
                            <Buttons
                                label="resend again"
                                color="#009FF9"
                                variant="/* Add your variant here */"
                                bgColor="white"
                                width='125px'

                                onClick={handleSignIn}
                            />
                            <div className="resend-text">
                                <p>in 30 seconds</p>
                            </div>
                        </div>
                        <Buttons
                            label="LOGIN"
                            color="#FFFFFF"
                            variant="/* Add your variant here */"
                            bgColor="black"
                            width='300px'
                            border='1px solid black'
                            onClick={handleSignIn}
                            borderRadius='10px'
                        />
                    </div>
                </CardContent>
            </Card>
        </div>

    );
};

export default OtpVerificationPage;
