import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Inputfield from "../components/items/Inputfield";
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import ButtonMD from "../components/items/ButtonMD";
import { useState } from "react";
import background from "../Assets/background.PNG";
import InputPasswordfield from "../components/items/InputPasswordfield";
import { Lock, LockTwoTone } from "@mui/icons-material";
import CardMD from "../components/items/CardMD";
import { NavLink, useNavigate } from "react-router-dom";
import url from "../url";
import endpoint, { url_FE } from "../Endpointurl";
import { useEffect } from "react";
import jackpot from "../Assets/jackpot.png";
import rectangle from "../Assets/rectangle.png";
import triangle from "../Assets/triangle.png";

function Waiting({ selectedball }) {

    console.log("selectedball", selectedball);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [profiledetails, setProfiledetails] = useState('');
    const [balls, setBalls] = useState([]);
    const [game, setGame] = useState([]);
    const [selectedBall, setSelectedBall] = useState(null);

    // schedule game

    const getScheduleGame = (details) => {

        var InsertAPIURL = `${url}game/get_scheduled_games?user_id=${details.user_id}`
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

                console.log(response.data[0]);
                setGame(response.data[0]);
                setStatus(response.data[0]);

                const ballData = response.data[0].ball_counts_participants;
                const formattedBalls = Object.keys(ballData).map((key, index) => ({
                    id: index + 1,
                    imageUrl: ballData[key].imageUrl,
                    count: ballData[key].count,
                }));

                setBalls(formattedBalls);

            }
            )
            .catch(error => {
                // setLoading(false);
                toast.error(error, {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            });


    }

    const [opensuccess, setOpensuccess] = useState(false);

    // low balance
    const [openlowbalance, setOpenlowbalance] = useState(false);
    const handleopenlowbalance = (data) => {
        setOpenlowbalance(true);
    };

    // deposit
    const [openmodaldeposit, setOpenmodaldeposit] = useState(false);
    const handleopenmodaldeposit = (data) => {
        setOpenmodaldeposit(true);
        setOpenlowbalance();
    };

    const validationSchema = yup.object({
        amount: yup
            .string()
            .required('Amount is required')
    });
    const formik = useFormik({
        initialValues: {
            amount: ''
        },
        validationSchema: validationSchema,

        onSubmit: (values, { resetForm }) => {
            console.log(values);

            setLoading(true);
            setTimeout(() => {

                const paymentData = {
                    user_id: 100653,
                    // game_id: 10242,
                    items: [{
                        "name": "Rimsha",
                        "sku": "item",
                        "price": values.amount,
                        "currency": "USD",
                        "quantity": 1
                    }],
                    amount: {
                        "currency": "USD",
                        "total": values.amount
                    },
                    description: "This is the payment description.",
                    redirect_urls: {
                        //
                        "return_url": `${url_FE}${endpoint}success`,
                        "cancel_url": `${url_FE}${endpoint}cancel`
                    }
                };

                fetch(`${url}pay`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(paymentData),
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        console.log("response");
                        console.log(response);
                        return response.json();
                    })
                    .then(data => {
                        console.log("data");

                        console.log(data);
                        console.log(data.approval_url);

                        setTimeout(() => {
                            window.location.href = data.approval_url;
                            setLoading(false);
                            // handleOpensuccess();


                            var InsertAPIURL = `${url}create_payment_paypal-db-wallet`
                            var headers = {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            };
                            var Data = {
                                "user_id": profiledetails?.data?.user_id,
                                "amount": values.amount
                            };
                            fetch(InsertAPIURL, {
                                method: 'POST',
                                headers: headers,
                                body: JSON.stringify(Data),
                            })
                                .then(response => response.json())
                                .then(response => {
                                    console.log(response);
                                }
                                )
                                .catch(error => {
                                    setLoading(false);
                                    toast.error(error, {
                                        position: toast.POSITION.BOTTOM_CENTER
                                    });
                                });


                        }, 3000)


                    })
                    .catch(error => {
                        setLoading(false);
                        toast.error(error, {
                            position: toast.POSITION.TOP_RIGHT
                        });

                        console.log('There has been a problem with your fetch operation:', error);
                    });
            }, 2000)

        },
    });

    useEffect(() => {

        const details = JSON.parse(localStorage.getItem('profiledetails'));
        if (details) {
            setProfiledetails(details);
        }

        getScheduleGame(details);

    }, []);

    const rows = [1, 2, 3, 4, 5]; // Number of balls per row

    let ballIndex = 0;

    const disabledBalls = [8, 9];

    const [selected, setSelected] = useState("https://res.cloudinary.com/dlm56y4v4/image/upload/v1706181940/1_mvzpnj.png");

    const handleBallClick = (ball) => {
        if (!disabledBalls.includes(ball.id)) {
            setSelectedBall(ball.id);
            console.log(ball);
            setSelected(ball.imageUrl);

        }
    };

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
                {/* waiting */}
                <Grid container spacing={0}>

                    <Grid xs={12}>
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant='h6' color="#F5BC01" fontFamily="Pacifico" fontSize="57px" mt={1} mb={1}  >
                                    Play Game
                                </Typography>

                                <div>
                                    <TypographyMD variant='paragraph' label="You're ball is" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="25px" fontWeight={450} align="right" />
                                    &nbsp;  <img src={selected} alt="..." style={{ width: "5vh" }} />
                                </div>

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
                                            {game?.jackpot == null || undefined ? "$0" : game?.jackpot}
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
                                            <TypographyMD variant='paragraph' label={`${game?.total_participants == null || undefined ? 0 : game?.total_participants}`} color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="20px" fontWeight={500} align="right" />

                                            <TypographyMD variant='paragraph' label={`${game?.entry_fee == null || undefined ? 0 : game?.entry_fee}`} color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="20px" fontWeight={500} align="right" />

                                            <TypographyMD variant='paragraph' label={`${game?.game_id == null || undefined ? 0 : game?.game_id}`} color="#F5BC01" marginLeft={0} fontFamily="Rubik" fontSize="20px" fontWeight={500} align="right" />
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
                                <TypographyMD variant='paragraph' label="You're ball is" color="#000000" marginLeft={0} fontFamily="Rubik" fontSize="25px" fontWeight={450} align="right" />
                                &nbsp;  <img src={selected} alt="..." style={{ width: "7vh" }} />
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
                                <Box sx={{ width: "100%", ml: { xs: 2, md: 3 }, mt: { xs: -5, md: -9 } }}>
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
                                                const isDisabled = disabledBalls.includes(ball.id);

                                                return (
                                                    <Grid item key={colIndex} sx={{ position: "relative" }} onClick={() => handleBallClick(ball)}>
                                                        <Avatar
                                                            src={ball.imageUrl}
                                                            alt={`Ball ${ball.id}`}
                                                            sx={{
                                                                width: { xs: 35, md: 65 },
                                                                height: { xs: 30, md: 55 },
                                                                position: "relative",
                                                                cursor: isDisabled ? "not-allowed" : "pointer",
                                                                "&::after": isDisabled && {
                                                                    content: '""',
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                                                                    borderRadius: "50%",
                                                                },
                                                                filter: isDisabled ? "grayscale(100%)" : "none", // Apply grayscale to make it appear disabled
                                                                pointerEvents: isDisabled ? "none" : "auto", // Disable interaction
                                                            }}
                                                        />
                                                        {selectedBall === ball.id && (
                                                            <Box
                                                                sx={{
                                                                    position: "absolute",
                                                                    bottom: "75%",
                                                                    left: "55%",
                                                                    transform: "translateX(-50%)",
                                                                    background: "rgba(0, 0, 0, 0.7)",
                                                                    color: "#fff",
                                                                    borderRadius: "4px",
                                                                    padding: "0 4px",
                                                                    fontSize: { xs: "10px", md: "12px" },
                                                                }}
                                                            >
                                                                1
                                                            </Box>
                                                        )}
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

            </Box>

            <ToastContainer />

        </>
    )
}

export default Waiting;