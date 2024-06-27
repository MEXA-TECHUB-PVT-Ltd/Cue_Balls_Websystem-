import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Avatar, Box, Button, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import Topbar from "../components/topbar/Topbar";
import { ArrowBackIos, ArrowForwardIos, Block, Error, FilterAlt, Search, Visibility } from "@mui/icons-material"
import jackpot from "../Assets/jackpot.png";
import rectangle from "../Assets/rectangle.png";
import ball6 from "../Assets/ball6.png";
import winnerBG from "../Assets/winnerBG.png";

function Winner() {

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
                                            src={rectangle}
                                            alt="Rectangle"
                                            sx={{ width: '100%', height: '100%', margin: 0, padding: 0 }} />
                                        <Box
                                            component="img"
                                            src={jackpot}
                                            alt="Jackpot Icon"
                                            sx={{
                                                position: 'absolute', top: { xs: "-30%", md: '-50%' }, left: '-10%', width: '15vh',
                                                margin: 0, padding: 0
                                            }} />
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                position: 'absolute', top: '50%', left: '25%', fontSize: "25px", fontFamily: "Rubik", fontWeight: 550,
                                                transform: 'translateY(-50%)', color: '#000000', textAlign: 'left'
                                            }}  >
                                            Jackpot
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                position: 'absolute', top: '50%', right: '5%', fontWeight: 550, fontSize: "25px", fontFamily: "Rubik",
                                                transform: 'translateY(-50%)', color: '#000000', textAlign: 'right'
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

                            <Typography variant="h5" sx={{ mt: 0, fontSize: "20px", fontFamily: "Rubik", fontWeight: 450, color: '#000000' }}  >
                                Congratulations! Your ball won! 🏆💰
                            </Typography> &nbsp;&nbsp;

                            <Typography
                                variant='h6'
                                color="#11D000"
                                fontFamily="Pacifico"
                                fontSize="37px"
                            >
                                Winner Ball
                            </Typography>

                            <img src={ball6} style={{ width: 150 }} />

                        </div>
                    </Box>
                }
            />
        </>
    )
}

export default Winner;