import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Avatar, Box, Button, Card, CardContent, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import Topbar from "../components/topbar/Topbar";
import { ArrowBackIos, ArrowForwardIos, Block, Error, FilterAlt, Search, Visibility } from "@mui/icons-material"
import background from "../Assets/background.PNG";
import ButtonMD from "../components/items/ButtonMD";
import "./scrollbar.css"
import { ToastContainer, toast } from 'react-toastify';
import ModalAdd from "../components/items/Modal";
import Inputfield from "../components/items/Inputfield";
import { useFormik } from "formik";
import * as yup from 'yup';
import endpoint from "../Endpointurl";
import url from "../url";
import ball6 from "../Assets/ball6.png";

function History() {

    const [loading, setLoading] = useState(false);

    return (
        <>
            <Sidebar
                componentData={
                    < Box
                        sx={{
                            backgroundImage: `url(${background})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "100%",
                            height: "80vh",
                            // overflow: "hidden",

                        }}
                    >
                        <Box pb={50} pl={{ xs: 5, md: 20 }} pr={{ xs: 5, md: 20 }}>
                            {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '75vh' }}> */}
                            <Typography variant='h6' align="center" color="#F5BC01" fontFamily="Pacifico" fontSize={{ xs: "27px", md: "50px" }} mt={1}   >
                                History
                            </Typography>

                            <Box mt={2} backgroundColor=" "

                                sx={{
                                    height: '600px', // Set a specific height for the stack
                                    overflowY: 'auto', // Enable vertical scrolling
                                    scrollbarWidth: 'thin', // Firefox
                                    scrollbarColor: 'transparent transparent', // For Firefox
                                    '&::-webkit-scrollbar': {
                                        width: '8px', // Width of the scrollbar
                                        backgroundColor: 'transparent', // Make the scrollbar itself transparent
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: 'transparent', // Make the scrollbar thumb transparent
                                        borderRadius: '10px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        backgroundColor: 'transparent', // Make the scrollbar track transparent
                                    },
                                }}

                            >


                                <Card sx={{ mt: { xs: 2, md: 2 }, p: 0, borderRadius: "10px", boxShadow: "none", border: "1px solid #F5BC01", width: { xs: "100%", md: "100%" } }}>
                                    <CardContent>

                                        <Grid container spacing={0}>
                                            <Grid xs={12} md={3}>
                                                <Avatar src={ball6} alt="..." sx={{ width: { xs: 50, md: 150 }, height: { xs: 50, md: 150 } }} />
                                            </Grid>

                                            <Grid xs={11} md={9} align="right">
                                                <Grid container xs={12} md={9} justifyContent="flex-end">
                                                    <Grid item xs={7} md={7}>
                                                        <Stack direction="column">
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game ID
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Total Participants
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Entry Fees
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Winner Ball
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Date
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game Status
                                                            </Typography>
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={5} md={5} align="left">
                                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>


                                                            <Stack direction="column">
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    # 3456
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    650
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    200
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    6
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    28/7/2024
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    Win
                                                                </Typography>
                                                            </Stack>

                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>

                                <Card sx={{ mt: { xs: 2, md: 2 }, p: 0, borderRadius: "10px", boxShadow: "none", border: "1px solid #F5BC01", width: { xs: "100%", md: "100%" } }}>
                                    <CardContent>

                                        <Grid container spacing={0}>
                                            <Grid xs={12} md={3}>
                                                <Avatar src={ball6} alt="..." sx={{ width: { xs: 50, md: 150 }, height: { xs: 50, md: 150 } }} />
                                            </Grid>

                                            <Grid xs={11} md={9} align="right">
                                                <Grid container xs={12} md={9} justifyContent="flex-end">
                                                    <Grid item xs={7} md={7}>
                                                        <Stack direction="column">
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game ID
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Total Participants
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Entry Fees
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Winner Ball
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Date
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game Status
                                                            </Typography>
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={5} md={5} align="left">
                                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>


                                                            <Stack direction="column">
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    # 3456
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    650
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    200
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    6
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    28/7/2024
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    Win
                                                                </Typography>
                                                            </Stack>

                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>

                                <Card sx={{ mt: { xs: 2, md: 2 }, p: 0, borderRadius: "10px", boxShadow: "none", border: "1px solid #F5BC01", width: { xs: "100%", md: "100%" } }}>
                                    <CardContent>

                                        <Grid container spacing={0}>
                                            <Grid xs={12} md={3}>
                                                <Avatar src={ball6} alt="..." sx={{ width: { xs: 50, md: 150 }, height: { xs: 50, md: 150 } }} />
                                            </Grid>

                                            <Grid xs={11} md={9} align="right">
                                                <Grid container xs={12} md={9} justifyContent="flex-end">
                                                    <Grid item xs={7} md={7}>
                                                        <Stack direction="column">
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game ID
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Total Participants
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Entry Fees
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Winner Ball
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Date
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game Status
                                                            </Typography>
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={5} md={5} align="left">
                                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>


                                                            <Stack direction="column">
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    # 3456
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    650
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    200
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    6
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    28/7/2024
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    Win
                                                                </Typography>
                                                            </Stack>

                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>

                                <Card sx={{ mt: { xs: 2, md: 2 }, p: 0, borderRadius: "10px", boxShadow: "none", border: "1px solid #F5BC01", width: { xs: "100%", md: "100%" } }}>
                                    <CardContent>

                                        <Grid container spacing={0}>
                                            <Grid xs={12} md={3}>
                                                <Avatar src={ball6} alt="..." sx={{ width: { xs: 50, md: 150 }, height: { xs: 50, md: 150 } }} />
                                            </Grid>

                                            <Grid xs={11} md={9} align="right">
                                                <Grid container xs={12} md={9} justifyContent="flex-end">
                                                    <Grid item xs={7} md={7}>
                                                        <Stack direction="column">
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game ID
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Total Participants
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Entry Fees
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Winner Ball
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Date
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game Status
                                                            </Typography>
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={5} md={5} align="left">
                                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>


                                                            <Stack direction="column">
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    # 3456
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    650
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    200
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    6
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    28/7/2024
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    Win
                                                                </Typography>
                                                            </Stack>

                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>

                                <Card sx={{ mt: { xs: 2, md: 2 }, p: 0, borderRadius: "10px", boxShadow: "none", border: "1px solid #F5BC01", width: { xs: "100%", md: "100%" } }}>
                                    <CardContent>

                                        <Grid container spacing={0}>
                                            <Grid xs={12} md={3}>
                                                <Avatar src={ball6} alt="..." sx={{ width: { xs: 50, md: 150 }, height: { xs: 50, md: 150 } }} />
                                            </Grid>

                                            <Grid xs={11} md={9} align="right">
                                                <Grid container xs={12} md={9} justifyContent="flex-end">
                                                    <Grid item xs={7} md={7}>
                                                        <Stack direction="column">
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game ID
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Total Participants
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Entry Fees
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Winner Ball
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Date
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game Status
                                                            </Typography>
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={5} md={5} align="left">
                                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>


                                                            <Stack direction="column">
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    # 3456
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    650
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    200
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    6
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    28/7/2024
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    Win
                                                                </Typography>
                                                            </Stack>

                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>

                                <Card sx={{ mt: { xs: 2, md: 2 }, p: 0, borderRadius: "10px", boxShadow: "none", border: "1px solid #F5BC01", width: { xs: "100%", md: "100%" } }}>
                                    <CardContent>

                                        <Grid container spacing={0}>
                                            <Grid xs={12} md={3}>
                                                <Avatar src={ball6} alt="..." sx={{ width: { xs: 50, md: 150 }, height: { xs: 50, md: 150 } }} />
                                            </Grid>

                                            <Grid xs={11} md={9} align="right">
                                                <Grid container xs={12} md={9} justifyContent="flex-end">
                                                    <Grid item xs={7} md={7}>
                                                        <Stack direction="column">
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game ID
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Total Participants
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Entry Fees
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Winner Ball
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Date
                                                            </Typography>
                                                            <Typography variant='body' align="left" color="gray" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                Game Status
                                                            </Typography>
                                                        </Stack>
                                                    </Grid>

                                                    <Grid item xs={5} md={5} align="left">
                                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>


                                                            <Stack direction="column">
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    # 3456
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    650
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    200
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    6
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    28/7/2024
                                                                </Typography>
                                                                <Typography variant='body' align="left" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: 15, md: 17 }}>
                                                                    Win
                                                                </Typography>
                                                            </Stack>

                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    </CardContent>
                                </Card>


                            </Box>

                        </Box>
                    </Box >
                }
            />

            <ToastContainer />
        </>
    )
}

export default History;