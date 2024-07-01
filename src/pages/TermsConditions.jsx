import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Box, Divider, Grid, IconButton, Typography, InputAdornment, OutlinedInput, Stack, Card, CardContent, Container } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import Topbar from "../components/topbar/Topbar";
import { Search } from "@mui/icons-material"
import { NavLink } from 'react-router-dom'
import url from "../url";
import { toast, ToastContainer } from "react-toastify";

function TermsConditions() {

    useEffect(() => {

        getUserPrivacyPolicy();

    }, [])

    const [content, setContent] = useState("");

    const getUserPrivacyPolicy = () => {

        var InsertAPIURL = `${url}privacy_policy/getTerms`
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(InsertAPIURL, {
            method: 'GET',
            headers: headers,
            body: JSON.stringify(),
        })
            .then(response => response.json())
            .then(response => {

                console.log(response.data);
                setContent(response.data);

            }
            )
            .catch(error => {
                // setLoading(false);
                toast.error(error, {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            });

    }

    return (
        <>
            <Sidebar
                componentData={

                    <Box backgroundColor="white" height="100vh">
                        <Container>
                            <Grid container spacing={0}>

                                <Grid xs={12} md={12} sm={12} align="" p={2} >
                                    <TypographyMD variant='paragraph' label="Terms & Conditions" color="#424242" marginLeft={0} fontFamily="Rubik" fontSize="30px" fontWeight={550} align="center" />
                                </Grid>

                            </Grid>

                            <Grid container spacing={0} sx={{ pl: 2, pr: 2 }} pt={0}>
                                <Typography variant="body1" fontFamily="Rubik">
                                    <div dangerouslySetInnerHTML={{ __html: content.content }} />
                                </Typography>
                            </Grid>
                        </Container>
                    </Box >

                }
            />

            <ToastContainer />

        </>
    )

}

export default TermsConditions;