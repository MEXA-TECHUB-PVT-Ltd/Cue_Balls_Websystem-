import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import background from "../Assets/background.PNG";
import jackpot from "../Assets/jackpot.png";
import rectangle from "../Assets/rectangle.png";
import triangle from "../Assets/triangle.png";
import axios from "axios";
import url from "../url";

function Playgame() {
    const [balls, setBalls] = useState([]);

    useEffect(() => {
        axios.get(`${url}contact_us/get_all_ball_images`)
            .then(response => setBalls(response.data.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const rows = [1, 2, 3, 4, 5]; // Number of balls per row

    let ballIndex = 0;

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
                            overFlow: "hidden"
                        }}
                    >
                        <Container>
                            <Grid container spacing={0}>

                                <Grid xs={12}>
                                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography variant='h6' color="#F5BC01" fontFamily="Pacifico" fontSize="57px" mt={1} mb={1}  >
                                                Play Game
                                            </Typography>

                                            <TypographyMD variant='paragraph' label="Pick your winning ball! 🏆🔮" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="25px" fontWeight={450} align="right" />
                                        </div> </Box>

                                </Grid>

                                <Grid xs={12} sm={12} md={5}>
                                    {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '75vh' }}> */}

                                    <Stack ml={{ xs: 0, md: 15 }} mt={{ xs: 0, md: 5 }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <Stack mt={3.5}>
                                                <Box sx={{ position: 'relative', ml: { xs: 5, md: 0 }, width: { xs: "80%", md: '100%' }, height: '70px', margin: 0, padding: 0 }} >
                                                    <Box
                                                        component="img"
                                                        src={rectangle}
                                                        alt="Rectangle"
                                                        sx={{ width: '100%', height: { xs: "80&", md: '100%' }, margin: 0, padding: 0 }} />
                                                    <Box
                                                        component="img"
                                                        src={jackpot}
                                                        alt="Jackpot Icon"
                                                        sx={{
                                                            position: 'absolute', top: { xs: "-25%", md: '-50%' }, left: '-10%', width: { xs: "10vh", md: '15vh' },
                                                            margin: 0, padding: 0
                                                        }} />
                                                    <Typography
                                                        variant="h5"
                                                        sx={{
                                                            position: 'absolute', top: { xs: "30%", md: '50%' }, left: '25%', fontSize: { xs: "15px", md: "25px" }, fontFamily: "Rubik", fontWeight: 550,
                                                            transform: 'translateY(-50%)', color: '#000000', textAlign: 'left'
                                                        }}  >
                                                        Jackpot
                                                    </Typography>
                                                    <Typography
                                                        variant="h5"
                                                        sx={{
                                                            position: 'absolute', top: { xs: "30%", md: '50%' }, right: '5%', fontWeight: 550, fontSize: { xs: "15px", md: "25px" }, fontFamily: "Rubik",
                                                            transform: 'translateY(-50%)', color: '#000000', textAlign: 'right'
                                                        }}  >
                                                        $100
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </div>

                                        <Box sx={{ mt: { xs: 0, md: 5 }, p: 2, borderRadius: "10px", backgroundColor: "white", borderRadius: "10px", boxShadow: "none", border: "1px solid #F5BC01", width: { xs: "100%", md: "100%" } }}>

                                            {/* lg */}
                                            <Grid container spacing={0} sx={{ display: { xs: "none", md: "flex" } }}>
                                                <Grid xs={6} md={6}>
                                                    <Stack direction="column">
                                                        <TypographyMD variant='paragraph' label="Participants" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="20px" fontWeight={500} align="left" />

                                                        <TypographyMD variant='paragraph' label="Entry Fees" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="20px" fontWeight={500} align="left" />

                                                        <TypographyMD variant='paragraph' label="Game ID" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="20px" fontWeight={500} align="left" />
                                                    </Stack>
                                                </Grid>

                                                <Grid xs={6} md={6}>
                                                    <Stack direction="column">
                                                        <TypographyMD variant='paragraph' label="0" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="20px" fontWeight={500} align="right" />

                                                        <TypographyMD variant='paragraph' label="400" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="20px" fontWeight={500} align="right" />

                                                        <TypographyMD variant='paragraph' label="1235" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="20px" fontWeight={500} align="right" />
                                                    </Stack>
                                                </Grid>
                                            </Grid>

                                            {/* xs */}
                                            <Grid container spacing={0} sx={{ display: { xs: "flex", md: "none" } }}>
                                                <Grid xs={6} md={6}>
                                                    <Stack direction="column">
                                                        <TypographyMD variant='paragraph' label="Participants" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="15px" fontWeight={500} align="left" />

                                                        <TypographyMD variant='paragraph' label="Entry Fees" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="15px" fontWeight={500} align="left" />

                                                        <TypographyMD variant='paragraph' label="Game ID" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="15px" fontWeight={500} align="left" />
                                                    </Stack>
                                                </Grid>

                                                <Grid xs={6} md={6}>
                                                    <Stack direction="column">
                                                        <TypographyMD variant='paragraph' label="0" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="15px" fontWeight={500} align="right" />

                                                        <TypographyMD variant='paragraph' label="400" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="15px" fontWeight={500} align="right" />

                                                        <TypographyMD variant='paragraph' label="1235" color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="15px" fontWeight={500} align="right" />
                                                    </Stack>
                                                </Grid>
                                            </Grid>

                                        </Box>
                                    </Stack>

                                    {/* </div> */}
                                </Grid>

                                <Grid xs={12} sm={12} md={7}>
                                    {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '75vh' }}> */}

                                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                                        <Typography variant='h6' color="#F5BC01" align="center" fontFamily="Pacifico" fontSize="27px" mt={1} mb={1}  >
                                            Play Game
                                        </Typography>
                                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                            <TypographyMD variant='paragraph' label="Pick your winning ball! 🏆🔮" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="15px" fontWeight={450} align="center" />
                                        </div>
                                    </Box>

                                    <Stack ml={{ xs: 0, sm: 15, md: 10 }}>
                                        <Box
                                            sx={{
                                                backgroundImage: `url(${triangle})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center", // Positioning the background image
                                                width: { xs: "100%", sm: "50vh", md: "78%", lg: "85%" },
                                                height: { xs: "290px", sm: "330px", md: "485px" },
                                                display: "flex", // Flexbox properties to center the content
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Box sx={{ width: "100%", ml: { xs: 2, md: 3 }, mt: { xs: -5, md: -9 } }}> {/* Ensuring the inner box takes full width */}
                                                {rows.map((numBalls, rowIndex) => (
                                                    <Grid
                                                        container
                                                        justifyContent="center"
                                                        spacing={1}
                                                        key={rowIndex}
                                                        sx={{ marginBottom: 1 }}
                                                    >
                                                        {Array.from({ length: numBalls }).map((_, colIndex) => {
                                                            if (ballIndex >= balls.length) return null;
                                                            const ball = balls[ballIndex++];
                                                            return (
                                                                <Grid item key={colIndex}>
                                                                    <Avatar
                                                                        src={ball.image_url}
                                                                        alt={ball.name}
                                                                        sx={{ width: { xs: 35, md: 65 }, height: { xs: 30, md: 55 } }} // Adjust the size as needed
                                                                    />
                                                                </Grid>
                                                            );
                                                        })}
                                                    </Grid>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Stack>

                                    {/* </div> */}
                                </Grid>
                            </Grid>
                        </Container>

                    </Box >
                }
            />
        </>
    )
}

export default Playgame;
