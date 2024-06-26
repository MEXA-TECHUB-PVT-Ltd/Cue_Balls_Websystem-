import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Box, Divider, Grid, IconButton, Typography, InputAdornment, OutlinedInput, Stack, Card, CardContent } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import Topbar from "../components/topbar/Topbar";
import { Search } from "@mui/icons-material"
import { NavLink } from 'react-router-dom'

function TermsConditions() {
    return (
        <>
            <Sidebar
                componentData={
                    <Box height="100vh">
                        <Grid container spacing={0}>

                            <Grid xs={12} md={12} align="" >
                                <Box sx={{ backgroundColor: "#C4B1AB" }}>
                                    <Stack p={2.5}>
                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right", gap: "10px" }}>
                                            <div>
                                                <Topbar />
                                            </div>
                                        </div>

                                    </Stack>
                                </Box>
                            </Grid>

                            <Grid xs={12} md={12} sm={4} align="" p={2} >
                                <TypographyMD variant='paragraph' label="Terms & Conditions" color="#424242" marginLeft={1} fontFamily="Laila" fontSize="25px" fontWeight={550} align="center" />
                            </Grid>

                        </Grid>

                        <Grid container spacing={0} sx={{ pl: 2, pr: 2 }} pt={0}>
                            <Grid xs={12} md={12} align="">
                                <Card sx={{ borderRadius: '15px', padding: '10px' }}>
                                    <CardContent className='flex'>

                                        <Stack direction="row" spacing={0}>

                                            <Box flex="1" pr={2}>
                                                <Typography variant='body2' color='#818181' sx={{ fontFamily: "Laila", lineHeight: "25px" }} mb={3}>
                                                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
                                                </Typography>
                                                <Typography variant="h6" sx={{ fontFamily: "Laila", lineHeight: "25px", fontWeight: 550 }} color="#424242" gutterBottom>
                                                    Content Liability
                                                </Typography>
                                                <Typography variant='body2' color='#818181' sx={{ fontFamily: "Laila", lineHeight: "25px" }} mb={3}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla felis in lectus vulputate, in posuere arcu tempor. Aenean euismod, lorem et ultrices sagittis, leo sem hendrerit odio, non bibendum dolor lectus id odio. Lorem ipsum
                                                </Typography>
                                                <Typography variant="h6" sx={{ fontFamily: "Laila", lineHeight: "25px", fontWeight: 550 }} color="#424242" gutterBottom>
                                                    iFrames
                                                </Typography>
                                                <Typography variant='body2' color='#818181' sx={{ fontFamily: "Laila", lineHeight: "25px" }} mb={3}>
                                                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.
                                                </Typography>
                                                <Typography variant="h6" sx={{ fontFamily: "Laila", lineHeight: "25px", fontWeight: 550 }} color="#424242" gutterBottom>
                                                    Hyperlinking to our Content
                                                </Typography>
                                                <Typography variant='body2' color='#818181' sx={{ fontFamily: "Laila", lineHeight: "25px" }} mb={3}>
                                                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.
                                                </Typography>
                                                <Typography variant="h6" sx={{ fontFamily: "Laila", lineHeight: "25px", fontWeight: 550 }} color="#424242" gutterBottom>
                                                    Cookies
                                                </Typography>
                                                <Typography variant='body2' color='#818181' sx={{ fontFamily: "Laila", lineHeight: "25px" }} mb={3}>
                                                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.
                                                </Typography>
                                                <Typography variant="h6" sx={{ fontFamily: "Laila", lineHeight: "25px", fontWeight: 550 }} color="#424242" gutterBottom>
                                                    License
                                                </Typography>
                                            </Box>

                                            <Divider orientation="vertical" flexItem />

                                            <Box flex=".3" pl={4}>
                                                <Box component="ul" sx={{ listStyleType: 'none', p: 0, m: 0 }}>
                                                    <Box component="li" sx={{ mb: '1em', mt: '2em' }}>
                                                        <NavLink to="#" color="text.primary" style={{ color: '#545454' }}>
                                                            <Typography variant='body2' color='#545454' sx={{ fontSize: "16px", fontFamily: "Laila", fontWeight: 600, lineHeight: "25px" }} mb={3}>
                                                                Content Liability
                                                            </Typography>
                                                        </NavLink>
                                                    </Box>
                                                    <Box sx={{ mb: '1em' }}>
                                                        <NavLink to="#" color="text.primary" style={{ color: '#C4B1AB' }}>
                                                            <Typography variant='body2' color='#C4B1AB' sx={{ fontSize: "16px", fontFamily: "Laila", fontWeight: 600, lineHeight: "25px" }} mb={3}>
                                                                Hyperlinking to our Content
                                                            </Typography>
                                                        </NavLink>
                                                    </Box>
                                                    <Box sx={{ mb: '1em' }}>
                                                        <NavLink to="#" color="text.primary" style={{ color: '#545454' }}>
                                                            <Typography variant='body2' color='#545454' sx={{ fontSize: "16px", fontFamily: "Laila", fontWeight: 600, lineHeight: "25px" }} mb={3}>
                                                                Cookies
                                                            </Typography>
                                                        </NavLink>
                                                    </Box>
                                                    <Box sx={{ mb: '1em' }}>
                                                        <NavLink to="#" color="text.primary" style={{ color: '#545454' }}>
                                                            <Typography variant='body2' color='#545454' sx={{ fontSize: "16px", fontFamily: "Laila", fontWeight: 600, lineHeight: "25px" }} mb={3}>
                                                                Reservation of rights
                                                            </Typography>
                                                        </NavLink>
                                                    </Box>
                                                    <Box component="li">
                                                        <NavLink to="#" color="text.primary" style={{ color: '#545454' }}>
                                                            <Typography variant='body2' color='#545454' sx={{ fontSize: "16px", fontFamily: "Laila", fontWeight: 600, lineHeight: "25px" }} mb={3}>
                                                                Content liability
                                                            </Typography>
                                                        </NavLink>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Stack>

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box >
                }
            />
        </>
    )
}

export default TermsConditions;