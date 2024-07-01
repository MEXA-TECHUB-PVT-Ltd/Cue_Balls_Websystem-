import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Inputfield from "../components/items/Inputfield";
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import { Avatar, Box, Grid } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import ButtonMD from "../components/items/ButtonMD";
import { useState } from "react";
import mainBG from "../Assets/main_bg.png";
import InputPasswordfield from "../components/items/InputPasswordfield";
import { Lock, LockTwoTone } from "@mui/icons-material";
import CardMD from "../components/items/CardMD";
import { NavLink, useNavigate } from "react-router-dom";
import url from "../url";
import endpoint from "../Endpointurl";
import { useEffect } from "react";

function Login() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Invalid email")
            .matches(/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Invalid email")
            .required('Required Email'),
        password: yup
            .string('Enter your password')
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/[0-9]/, 'Password must contain at least one digit')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,

        onSubmit: (values, { resetForm }) => {
            console.log(values);

            setLoading(true);
            setTimeout(() => {
                var InsertAPIURL = `${url}user/sign_in`
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                };
                var Data = {
                    "email": values.email,
                    "password": values.password,
                    "signup_type": "email"
                };
                fetch(InsertAPIURL, {
                    method: 'PUT',
                    headers: headers,
                    body: JSON.stringify(Data),
                })
                    .then(response => response.json())
                    .then(response => {
                        console.log(response);
                        setLoading(false);
                        console.log(response)
                        if (response.error) {
                            setLoading(false);
                            toast.error(response.message, {
                                position: toast.POSITION.TOP_RIGHT
                            });
                        } else {
                            localStorage.setItem('profiledetails', JSON.stringify(response));
                            localStorage.setItem("userpassword", values.password);
                            navigate(`${endpoint}playgame`)
                            setLoading(false);
                            formik.resetForm();
                        }
                    }
                    )
                    .catch(error => {
                        setLoading(false);
                        toast.error(error, {
                            position: toast.POSITION.BOTTOM_CENTER
                        });
                    });
            }, 1000)

        },
    });

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${mainBG})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <div style={{ display: "flex", alignContent: "center", alignItems: "center", height: "100vh" }}>

                    <CardMD
                        content={
                            <>

                                <div style={{ display: "flex", justifyContent: "center", paddingBottom: 0 }}>
                                    <TypographyMD variant='paragraph' label="Sign In to your Account" color="white" marginLeft={0} fontFamily="Rubik" fontSize="33px" fontWeight={450} align="center" />
                                </div>

                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", paddingBottom: 3 }}>
                                    <TypographyMD variant='paragraph' label="Don’t have an account? " color="white" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={400} align="center" />
                                    <NavLink to={`${endpoint}signup`} style={{ textDecoration: "none" }}>
                                        <TypographyMD variant='paragraph' label=" Create Account" color="#FFE064" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={400} align="center" />
                                    </NavLink>
                                </Box>

                                <form onSubmit={formik.handleSubmit} >
                                    <div>
                                        <div style={{ marginBottom: '5px' }}>

                                            <Inputfield
                                                autoFocus={false}
                                                value={formik.values.email}
                                                onChngeterm={(e) => formik.setFieldValue("email", e.target.value)}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                                // icon={<MailOutlineTwoToneIcon sx={{ color: "#B6BEA9" }} />}
                                                type="text"
                                                variant="outlined"
                                                label=""
                                                placeholder="Email Address"
                                            />
                                        </div>

                                        <div style={{ marginBottom: '0px' }}>

                                            <InputPasswordfield
                                                value={formik.values.password}
                                                onChngeterm={(e) => formik.setFieldValue("password", e.target.value)}
                                                error={formik.touched.password && Boolean(formik.errors.password)}
                                                helperText={formik.touched.password && formik.errors.password}
                                                // icon={<Lock sx={{ color: "#B6BEA9" }} />}
                                                type="password"
                                                variant="outlined"
                                                placeholder="Password"
                                            />
                                        </div>

                                        <div style={{ marginBottom: "3vh" }}>
                                            <Grid container spacing={0}>

                                                <Grid xs={12} align="right">
                                                    <div style={{ width: "fit-content" }}>
                                                        <NavLink to={`${endpoint}emailverification`} style={{ textDecoration: "none" }}>

                                                            <TypographyMD variant='h6' label="Forgot password?" color="#FFE064" fontFamily="Rubik" marginLeft={0} fontSize="15px" fontWeight={450} align="right" />

                                                        </NavLink>
                                                    </div>
                                                </Grid>

                                            </Grid>
                                        </div>

                                        <ButtonMD variant="contained" title="Sign In" width="100%" type="submit" borderColor="orange" backgroundColor="orange" borderRadius="10px" disabled={loading} />

                                    </div>
                                </form>
                            </>
                        } />
                </div>
            </Box>

            <ToastContainer />

        </>
    )
}

export default Login;