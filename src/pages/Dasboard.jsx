import React, { useEffect, useRef, useState } from "react";
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
import io from 'socket.io-client';

function Dashboard() {

    const navigate = useNavigate();
    const [status, setStatus] = useState("");

    useEffect(() => {
        // Initialize the socket connection
        const socket = io(url);

        // Define the message listener
        const messageListener = (msg) => {
            console.log(msg);
            switch (msg.status) {
                case "created":
                    console.log("game-created");// show triangle screen
                    navigate(`${endpoint}playgame`);
                    break;
                case "waiting":
                    console.log("game-status-change"); // show waiting screen ss in phone if status is waiting  
                    break;
                case "started":
                    console.log("game-started"); //   if status is started then show animation 
                    break;
                case "result-anounced":
                    console.log("result-anounced");
                    break;
                case "restart":
                    console.log("game-restart"); // show restart game screen ss in phone
                    break;
                case "added-participants":
                    console.log("added-participants");
                    break;
                case "deleted":
                    console.log("game-deleted");
                    navigate(`${endpoint}dashboard`);
                    break;
                default:
                    console.log("Unknown status");
            }
            console.log(":ddggfgf");
            setStatus("dffgfdfg");
        };

        // Set up the socket event listener
        socket.on("received-data", messageListener);

        // Cleanup function to remove the message listener and disconnect socket
        return () => {
            socket.off("received-data", messageListener);
            socket.disconnect();
        };
    }, [url]);

    return (
        <>
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
                                        <TypographyMD variant='paragraph' label="Available Balance" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={450} align="left" />

                                        <TypographyMD variant='paragraph' label="Total Played Games" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={450} align="left" />

                                        <TypographyMD variant='paragraph' label="Won Games" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={450} align="left" />

                                        <TypographyMD variant='paragraph' label="Lost Games" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={450} align="left" />
                                    </Stack>
                                </Grid>

                                <Grid xs={6} md={6}>
                                    <Stack direction="column">
                                        <TypographyMD variant='paragraph' label="$99.4" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={450} align="right" />

                                        <TypographyMD variant='paragraph' label="5" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={450} align="right" />

                                        <TypographyMD variant='paragraph' label="3" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={450} align="right" />

                                        <TypographyMD variant='paragraph' label="2" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="16px" fontWeight={450} align="right" />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <img src={balls} alt="Balls" style={{ width: "50vh", marginBottom: '20px' }} />

                    <Typography
                        variant='h6'
                        color="#F5BC01"
                        fontFamily="Pacifico"
                        fontSize="30px"
                        sx={{
                            width: { xs: "90%", md: '30%' },
                            textAlign: 'center',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                        }}
                    >
                        No games yet. 🎱 Get ready for action! Stay tuned. 🌟🔄
                    </Typography>
                </div>
            </Box>

        </>
    )
}

export default Dashboard;