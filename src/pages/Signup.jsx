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

function Signup() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const validationSchema = yup.object({
        username: yup
            .string('Enter your username')
            .required('Username is required'),
        email: yup
            .string()
            .email("Invalid email")
            .required('Required Email'),
        password: yup.string('Enter your password')
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters long'),
        confirmpassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });
    const formik = useFormik({
        initialValues: {
            username: "",
            email: '',
            password: '',
            confirmpassword: ""
        },
        validationSchema: validationSchema,

        onSubmit: (values, { resetForm }) => {
            console.log(values);

            setLoading(true);
            setTimeout(() => {
                var InsertAPIURL = `${url}user/create_account`
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                };
                var Data = {
                    "user_name": values.username,
                    "email": values.email,
                    "password": values.password,
                    "signup_type": "email"
                };
                fetch(InsertAPIURL, {
                    method: 'POST',
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
                            // localStorage.setItem('profiledetails', JSON.stringify(response));
                            localStorage.setItem("userpassword", values.password);
                            navigate(`${endpoint}dashboard`)
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

                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", paddingBottom: 0 }}>
                                    <TypographyMD variant='paragraph' label="Create your Account" color="white" marginLeft={0} fontFamily="Rubik" fontSize="33px" fontWeight={450} align="center" />
                                </div>

                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center", paddingBottom: 3 }}>
                                    <TypographyMD variant='paragraph' label="Already have an account? " color="white" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={400} align="center" />
                                    <NavLink to={`${endpoint}`} style={{ textDecoration: "none" }}>
                                        <TypographyMD variant='paragraph' label=" Sign In" color="#FFE064" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={400} align="center" />
                                    </NavLink>
                                </Box>

                                <form onSubmit={formik.handleSubmit} >
                                    <div>

                                        <div style={{ marginBottom: '5px' }}>
                                            <Inputfield
                                                autoFocus={false}
                                                value={formik.values.username}
                                                onChngeterm={(e) => formik.setFieldValue("username", e.target.value)}
                                                error={formik.touched.username && Boolean(formik.errors.username)}
                                                helperText={formik.touched.username && formik.errors.username}
                                                type="text"
                                                variant="outlined"
                                                label=""
                                                placeholder="Username"
                                            />
                                        </div>

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

                                        <div style={{ marginBottom: '10px' }}>

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

                                        <div style={{ marginBottom: '10px' }}>

                                            <InputPasswordfield
                                                value={formik.values.confirmpassword}
                                                onChngeterm={(e) => formik.setFieldValue("confirmpassword", e.target.value)}
                                                error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
                                                helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                                                // icon={<Lock sx={{ color: "#B6BEA9" }} />}
                                                type="confirmpassword"
                                                variant="outlined"
                                                placeholder="ConfirmPassword"
                                            />
                                        </div>

                                        <ButtonMD variant="contained" title="Create Account" width="100%" type="Create Account" borderColor="orange" backgroundColor="orange" borderRadius="10px" disabled={loading} />

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

export default Signup;