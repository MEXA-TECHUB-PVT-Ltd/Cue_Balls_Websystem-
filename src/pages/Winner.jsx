import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Avatar, Box, Button, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import Topbar from "../components/topbar/Topbar";
import { ArrowBackIos, ArrowForwardIos, Block, Error, FilterAlt, Search, Visibility } from "@mui/icons-material"
import jackpot from "../Assets/jackpot.png";
import winner_rectangle from "../Assets/winner_rectangle.png";
import ball6 from "../Assets/ball6.png";
import winnerBG from "../Assets/winnerBG.png";
import { useNavigate } from "react-router-dom";
import endpoint from "../Endpointurl";

function Winner() {

    const navigate = useNavigate();

    return (
        <>
            <Sidebar
                componentData={
                    <Box
                        sx={{
                            backgroundImage: `url(${winnerBG})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "100%",
                            height: "100vh",
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Stack mt={3.5}>
                                    <Box sx={{ position: 'relative', ml: { xs: 5, md: 0 }, width: { xs: "80%", md: '100%' }, height: '70px', margin: 0, padding: 0 }} >
                                        <Box
                                            component="img"
                                            src={winner_rectangle}
                                            alt="Rectangle"
                                            sx={{ width: '100%', height: '100%', margin: 0, padding: 0 }} />
                                        <Box
                                            component="img"
                                            src={jackpot}
                                            alt="Jackpot Icon"
                                            sx={{
                                                position: 'absolute', top: { xs: "-30%", md: '-45%' }, left: '-10%', width: '15vh',
                                                margin: 0, padding: 0
                                            }} />
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                position: 'absolute', top: '50%', left: '25%', fontSize: "25px", fontFamily: "Rubik", fontWeight: 550,
                                                transform: 'translateY(-50%)', color: '#FFE064', textAlign: 'left'
                                            }}  >
                                            Jackpot
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                position: 'absolute', top: '50%', right: '5%', fontWeight: 550, fontSize: "25px", fontFamily: "Rubik",
                                                transform: 'translateY(-50%)', color: '#FFE064', textAlign: 'right'
                                            }}  >
                                            $100
                                        </Typography>
                                    </Box>
                                </Stack>
                            </div>

                            <div style={{ display: "flex" }}>
                                <Typography variant="h5" sx={{ mt: 2, mb: 2, fontSize: "20px", fontFamily: "Rubik", fontWeight: 450, color: '#11D000' }}  >
                                    Your Ball
                                </Typography> &nbsp;&nbsp;<Avatar src={ball6} sx={{ mt: 1 }} />
                            </div>

                            <Typography variant="h5" sx={{ mt: 0, fontSize: { xs: "15px", md: "20px" }, fontFamily: "Rubik", fontWeight: 450, color: '#000000' }}  >
                                Congratulations! Your ball won! 🏆💰
                            </Typography> &nbsp;&nbsp;

                            <Typography
                                variant='h6'
                                color="#11D000"
                                fontFamily="Pacifico"
                                fontSize="37px"
                                fontWeight="bold"
                                style={{
                                    textShadow: '2px 2px 0 #000',
                                }}
                            >
                                Winner Ball
                            </Typography>

                            <Avatar src={ball6} sx={{ width: { xs: 90, md: 150 }, height: { xs: 90, md: 150 } }} />

                            <Typography
                                variant='h6'
                                color="#11D000"
                                fontFamily="Pacifico"
                                fontSize="30px"
                            >
                                Winners &nbsp;&nbsp; 324
                            </Typography>

                            <Typography
                                variant='h6'
                                color="#000000"
                                fontFamily="Rubik"
                                fontSize="20px"
                                mb={2}
                            >
                                Winning Amount &nbsp;&nbsp; $27.37
                            </Typography>

                            <Button onClick={() => navigate(`${endpoint}dashboard`)}
                                variant="outlined"
                                sx={{
                                    width: { xs: "60%", md: "20%" },
                                    color: '#060502',
                                    border: '4px solid #373737',
                                    textTransform: "capitalize",
                                    fontFamily: "Rubik",
                                    borderRadius: "10px",
                                    fontWeight: "bold",
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100%)',       // Change text color on hover
                                        border: '4px solid #373737',
                                    },
                                }}
                            >
                                Go to home
                            </Button>

                        </div>
                    </Box >
                }
            />
        </>
    )
}

export default Winner;