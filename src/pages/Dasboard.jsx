import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { Box, Button, Card, CardContent, CircularProgress, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, Modal, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"; 
import TypographyMD from "../components/items/Typography";
import endpoint from "../Endpointurl";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/topbar/Topbar"; 
import url from "../url"; 
import background from "../Assets/background.PNG";
import balls from "../Assets/balls.png"; 

function Dashboard() {

    const navigate = useNavigate(); 

    return (
        <>
            <Sidebar
                componentData={
                    <Box >
                        {/* <Grid container spacing={0}>

                            <Grid xs={12} md={12} align="" >
                                <Box sx={{ backgroundColor: "#C4B1AB" }}>
                                    <Stack p={2.5}>
                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right", gap: "10px" }}>

                                            <div>
                                                <Box sx={{ mt: { xs: 1, md: .5 }, backgroundColor: "white", border: "1px solid white", borderRadius: "50px", width: "270px" }}>
                                                    <OutlinedInput
                                                        placeholder='Search here'
                                                        id="input-with-icon-adornment"
                                                        sx={{
                                                            width: "100%",
                                                            fontSize: "15px",
                                                            height: "35px",
                                                            "& fieldset": { border: 'none' },
                                                        }}
                                                        endAdornment={
                                                            <InputAdornment position="end">

                                                                <IconButton edge="end" >
                                                                    <Search sx={{ fontSize: "15px", color: "#222" }} />
                                                                </IconButton>

                                                            </InputAdornment>
                                                        }
                                                        value={searchTerm}
                                                        onChange={e => setSearchTerm(e.target.value)}
                                                    />
                                                </Box>
                                            </div>

                                            <div>
                                                <Topbar />
                                            </div>
                                        </div>

                                    </Stack>
                                </Box>
                            </Grid> 

                            <Grid xs={12} md={12} sm={4} align="" p={2} >
                                <TypographyMD variant='paragraph' label="Dashboard" color="#424242" marginLeft={1} fontFamily="Rubik" fontSize="25px" fontWeight={550} align="center" />
                            </Grid>

                        </Grid>  */}

                        <Box
                            sx={{
                                backgroundImage: `url(${background})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                width: "100%",
                                height: "100vh",
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                                <Card sx={{ mt: { xs: 0, md: 5 }, p: 0, borderRadius: "10px", boxShadow: "none", border: "1px solid #F5BC01", width: { xs: "90%", md: "50%" } }}>
                                    <CardContent>
                                        <Grid container spacing={0}>
                                            <Grid xs={6} md={6}>
                                                <Stack direction="column">
                                                    <TypographyMD variant='paragraph' label="Available Balance" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="14px" fontWeight={450} align="left" />

                                                    <TypographyMD variant='paragraph' label="Total Played Games" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="14px" fontWeight={450} align="left" />

                                                    <TypographyMD variant='paragraph' label="Won Games" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="14px" fontWeight={450} align="left" />

                                                    <TypographyMD variant='paragraph' label="Lost Games" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="14px" fontWeight={450} align="left" />
                                                </Stack>
                                            </Grid>

                                            <Grid xs={6} md={6}>
                                                <Stack direction="column">
                                                    <TypographyMD variant='paragraph' label="$99.4" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="14px" fontWeight={450} align="right" />

                                                    <TypographyMD variant='paragraph' label="5" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="14px" fontWeight={450} align="right" />

                                                    <TypographyMD variant='paragraph' label="3" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="14px" fontWeight={450} align="right" />

                                                    <TypographyMD variant='paragraph' label="2" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="14px" fontWeight={450} align="right" />
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>

                                <img src={balls} alt="Balls" style={{ width: "40vh", marginBottom: '20px' }} />

                                <Typography
                                    variant='h6'
                                    color="#F5BC01"
                                    fontFamily="Pacifico"
                                    fontSize="27px"
                                    sx={{
                                        width: { xs: "90%", md: '25%' },
                                        textAlign: 'center',
                                        whiteSpace: 'normal',
                                        wordBreak: 'break-word',
                                    }}
                                >
                                    No games yet. 🎱 Get ready for action! Stay tuned. 🌟🔄
                                </Typography>
                            </div>
                        </Box>
                    </Box >
                }
            />

        </>
    )
}

export default Dashboard;