import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Box, Button, Card, CardContent, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import Topbar from "../components/topbar/Topbar";
import { ArrowBackIos, ArrowForwardIos, Block, Error, FilterAlt, Search, Visibility } from "@mui/icons-material"
import background from "../Assets/background.PNG";
import ButtonMD from "../components/items/ButtonMD";
import "./scrollbar.css"
function Wallet() {

    const [loading, setLoading] = useState(false);

    return (
        <>
            <Sidebar
                componentData={
                    <Box
                        sx={{
                            backgroundImage: `url(${background})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "100%",
                            height: "100vh",
                            overflow: "hidden"
                        }}
                    >
                        <Box pl={{ xs: 5, md: 20 }} pr={{ xs: 5, md: 20 }}>
                            {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '75vh' }}> */}
                            <Typography variant='h6' align="center" color="#F5BC01" fontFamily="Pacifico" fontSize={{ xs: "27px", md: "50px" }} mt={1}   >
                                My Wallet
                            </Typography>

                            <Card sx={{ mt: { xs: 2, md: 2 }, p: 0, borderRadius: "10px", boxShadow: "none", border: "1px solid #F5BC01", width: { xs: "100%", md: "100%" } }}>
                                <CardContent>
                                    <Stack direction="column">

                                        <Typography variant='h6' align="center" color="gray" fontFamily="Rubik" fontSize={{ xs: "20px", md: "30px" }} mt={1}   >
                                            Your Balance
                                        </Typography>

                                        <Typography variant='h6' align="center" color="#F5BC01" fontFamily="Rubik" fontSize={{ xs: "27px", md: "57px" }} fontWeight="57px"  >
                                            $ 8,250.00
                                        </Typography>

                                    </Stack>

                                    <Grid container spacing={0}>
                                        <Grid xs={6} md={6} align="center">
                                            <ButtonMD variant="contained" title="Withdraw" width="90%" type="submit" borderColor="orange" backgroundColor="orange" borderRadius="10px" disabled={loading} />
                                        </Grid>

                                        <Grid xs={6} md={6} align="center">
                                            <ButtonMD variant="contained" title="Deposit" width="90%" type="submit" borderColor="orange" backgroundColor="orange" borderRadius="10px" disabled={loading} />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                            {/* </div> */}

                            <Typography variant='h6' align="left" color="#000000" fontFamily="Rubik" fontSize={{ xs: "20px", md: "30px" }} mt={1}   >
                                Transaction History
                            </Typography>

                            <Stack
                                sx={{
                                    height: '400px', // Set a specific height for the stack
                                    overflowY: 'auto', // Enable vertical scrolling
                                    scrollbarWidth: 'thin', // Firefox
                                    '&::-webkit-scrollbar': {
                                        width: '8px', // For Chrome, Safari and Opera
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: '#F5BC01', // Customize scrollbar thumb color
                                        borderRadius: '10px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        backgroundColor: '#f0f0f0', // Customize scrollbar track color
                                    },
                                }}
                            >
                                {[...Array(2)].map((_, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            mt: { xs: 1, md: 1 },
                                            p: 0,
                                            borderRadius: '10px',
                                            boxShadow: 'none',
                                            border: '1px solid #F5BC01',
                                            width: { xs: '100%', md: '100%' },
                                        }}
                                    >

                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>
                                            <Box align="right" sx={{ mt: 0.1, mr: 0.1, pl: 1, pr: 1, width: "fit-content", borderBottomLeftRadius: "10px", borderTopRightRadius: "10px", backgroundColor: "#00C57F" }}>
                                                <Typography
                                                    variant="body"
                                                    align="right"
                                                    color="white"
                                                    fontFamily="Rubik"
                                                    fontSize="11px"
                                                    letterSpacing="1px"
                                                >
                                                    deposit
                                                </Typography>
                                            </Box>
                                        </div>

                                        <CardContent>
                                            <Grid container spacing={0}>
                                                <Grid item xs={4} md={6} align="left">
                                                    <Typography
                                                        variant="h6"
                                                        align="left"
                                                        color="#000000"
                                                        fontFamily="Rubik"
                                                        fontSize={{ xs: "12px", md: "20px" }}
                                                    >
                                                        $ 326.50
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={8} md={6} align="right">
                                                    <Typography
                                                        variant="h6"
                                                        align="right"
                                                        color="gray"
                                                        fontFamily="Rubik"
                                                        fontSize={{ xs: "12px", md: "20px" }}
                                                    >
                                                        03:00pm - Nov 17, 2023
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Box>
                                ))}
                            </Stack>

                        </Box>
                    </Box >
                }
            />
        </>
    )
}

export default Wallet;