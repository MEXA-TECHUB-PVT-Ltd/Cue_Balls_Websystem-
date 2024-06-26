import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { Box, Button, Card, CardContent, CircularProgress, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, Modal, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Add, ArrowBackIos, ArrowForwardIos, Block, Close, Code, Delete, Download, Edit, Error, FoodBank, Group, GroupAdd, Groups, MoreVert, PendingActions, Report, RequestPage, Restaurant, Search, TwoWheeler, Visibility } from "@mui/icons-material";
import TypographyMD from "../components/items/Typography";
import endpoint from "../Endpointurl";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import DashboardCard from "../components/items/Dashboardcard";
import activeusers from "../Assets/activeusers.png";
import subscribedusers from "../Assets/subscribedusers.png";
import totaldownloads from "../Assets/totaldownloads.png";
import url from "../url";
import Graph from "../components/graph/Graph";
import { DashboardGoogleMap } from "../components/items/Dashboardgooglemap";
import DashboardAreaChart from "../components/items/DashboardAreaChart";
import Users from "./Users";
import ModalAdd from "../components/items/Modal";
import ModalSuccess from "../components/items/ModalSuccess";
import ButtonMD from "../components/items/ButtonMD";

function Dashboard() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const rows = [
        { name: "Sarah Johnson", email: "Sarahjohnson@gmail.com", dob: "March 15, 1987", city: "New York", country: "USA", status: "block" },
        { name: "Maria Rodriguez", email: "Mariarodriguez@gmail.com", dob: "November 8, 1992", city: "New York", country: "USA", status: "unblock" },
        { name: "Ahmed Khan", email: "Ahmedkhan@gmail.com", dob: "May 22, 1975", city: "New York", country: "USA", status: "block" },
        { name: "Sophie Martinn", email: "Sophiemartinn@gmail.com", dob: "July 4, 2000", city: "New York", country: "USA", status: "unblock" },
        { name: "Luca Rossi", email: "Lucarossi@gmail.com", dob: "September 12, 1984", city: "New York", country: "USA", status: "block" },

        { name: "Sarah Johnson", email: "Sarahjohnson@gmail.com", dob: "March 15, 1987", city: "New York", country: "USA", status: "unblock" },
        { name: "Maria Rodriguez", email: "Mariarodriguez@gmail.com", dob: "November 8, 1992", city: "New York", country: "USA", status: "block" },
        { name: "Ahmed Khan", email: "Ahmedkhan@gmail.com", dob: "May 22, 1975", city: "New York", country: "USA", status: "unblock" },

        { name: "Sarah Johnson", email: "Sarahjohnson@gmail.com", dob: "March 15, 1987", city: "New York", country: "USA", status: "block" },
        { name: "Maria Rodriguez", email: "Mariarodriguez@gmail.com", dob: "November 8, 1992", city: "New York", country: "USA", status: "unblock" },
        { name: "Ahmed Khan", email: "Ahmedkhan@gmail.com", dob: "May 22, 1975", city: "New York", country: "USA", status: "block" },
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = rows.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const highlightMatch = (text, term) => {
        const lowerText = text.toLowerCase();
        const lowerTerm = term.toLowerCase();
        const startIndex = lowerText.indexOf(lowerTerm);

        if (startIndex === -1) {
            return text;
        }

        const beforeMatch = text.slice(0, startIndex);
        const match = text.slice(startIndex, startIndex + term.length);
        const afterMatch = text.slice(startIndex + term.length);
        return (
            <>
                {beforeMatch}
                <span style={{ backgroundColor: '#FF144D29' }}>{match}</span>
                {afterMatch}
            </>
        );
    };

    const [openmodalview, setOpenmodalview] = useState(false);
    const handleOpenmodalview = () => {
        setOpenmodalview(true);
    };
    const handleClosemodalview = () => setOpenmodalview(false);

    const [opensuccess, setOpensuccess] = useState(false);
    const handleOpensuccess = () => {
        setOpensuccess(true);
        setOpenmodalview(false);
        setTimeout(() => {
            setOpensuccess(false)
        }, 3000);
    };
    const handleClosesuccess = () => setOpensuccess(false);

    const [openmodalconfirmation, setOpenmodalconfirmation] = useState(false);
    const handleOpenmodalconfirmation = () => {
        setOpenmodalconfirmation(true);
        setOpenmodalview(false);
    };
    const handleClosemodalconfirmation = () => {
        setOpenmodalconfirmation(false);
        handleOpensuccess();
    }

    return (
        <>
            <Sidebar
                componentData={
                    <Box sx={{ overflow: "hidden" }} height="auto">
                        <Grid container spacing={0}>

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
                                <TypographyMD variant='paragraph' label="Dashboard" color="#424242" marginLeft={1} fontFamily="Laila" fontSize="25px" fontWeight={550} align="center" />
                            </Grid>

                        </Grid>

                        <Grid container spacing={0} sx={{ pl: 2, pr: 2 }} pt={0}>

                            <Grid xs={12} md={4} align="center" p={1}>
                                <DashboardCard
                                    icon={<Group sx={{ width: "50px", height: "50px", }} />}
                                    heading="Active Users"
                                    value="23,987"
                                />
                            </Grid>

                            <Grid xs={12} md={4} align="center" p={1}>
                                <DashboardCard
                                    icon={<GroupAdd sx={{ width: "50px", height: "50px", }} />}
                                    heading="Subscribed Users"
                                    value="23,987"
                                />
                            </Grid>

                            <Grid xs={12} md={4} align="center" p={1}>
                                <DashboardCard
                                    icon={<Download sx={{ width: "50px", height: "50px", }} />}
                                    heading="Total Downloads"
                                    value="23,987"
                                />
                            </Grid>

                            <Grid xs={12} md={7.4} align="center" p={1}>
                                <DashboardGoogleMap />
                            </Grid>

                            <Grid xs={12} md={4.6} align="center" p={1}>
                                <DashboardAreaChart />
                            </Grid>

                            <Grid xs={6} md={6} align="center" p={1}>
                                <TypographyMD variant='h2' label="Recent Users" color="#424242" fontFamily="Laila" marginLeft={0} fontSize="25px" fontWeight={550} align="left" />
                            </Grid>

                            <Grid xs={6} md={6} align="right" p={1}>
                                <Button onClick={() => navigate(`${endpoint}users`)}
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#B6BEA9",
                                        borderRadius: '5px',
                                        borderColor: 'inherit',
                                        boxShadow: "none",
                                        color: 'white',
                                        padding: 1.5,
                                        fontFamily: "Laila",
                                        letterSpacing: ".5px",
                                        textTransform: "capitalize",
                                        '&:hover': {
                                            backgroundColor: "#B6BEA9",
                                            boxShadow: "none",
                                        },
                                    }}
                                >
                                    View All Users
                                </Button>
                            </Grid>

                            <Grid xs={12} md={12} >
                                {filteredData?.length == 0 || undefined || null ?
                                    <Grid container spacing={0} pt={10} pb={10}>
                                        <Grid xs={12} md={12} lg={12} align="center"  >
                                            <Stack direction="column">
                                                <Error sx={{ fontSize: "5vh", color: "#A5ADB0", opacity: 0.5, alignSelf: "center" }} />
                                                <TypographyMD variant='h2' label="Data Not Found" color="#A5ADB0" fontFamily="Laila" marginLeft={0} fontSize="13px" fontWeight={450} align="center" />
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    :
                                    <TableContainer sx={{
                                        borderRadius: "10px",
                                        boxShadow: "none"
                                    }} >

                                        <Table sx={{ minWidth: { xs: "100px", md: '250px' } }} aria-label="simple table">
                                            <TableHead style={{ backgroundColor: 'rgba(182, 190, 169, 0.35)' }}>
                                                <TableRow  >
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> USER NAME </TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> EMAIL ADDRESS</TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> DATE OF BIRTH </TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> CITY </TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> COUNTRY </TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> STATUS </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {filteredData.slice(0, 5).map((item) => (
                                                    <TableRow>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} >
                                                            {item.status == "unblock" ?
                                                                <>
                                                                    {highlightMatch(item.name, searchTerm)} < Block sx={{ color: "#FF5858", fontSize: "20px" }} />
                                                                </>
                                                                :
                                                                <>
                                                                    {highlightMatch(item.name, searchTerm)}
                                                                </>}
                                                        </TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} >{item.email}</TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} >{item.dob}</TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} > {item.city} </TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} > {item.country} </TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} >
                                                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "10px" }}>
                                                                <Button
                                                                    variant="contained" onClick={handleOpenmodalconfirmation}
                                                                    sx={{
                                                                        backgroundColor: `${item.status == "block" ? "#FF5858" : "#00C342"}`,
                                                                        width: "100px",
                                                                        borderRadius: '5px',
                                                                        borderColor: 'inherit',
                                                                        boxShadow: "none",
                                                                        color: 'white',
                                                                        fontFamily: "Laila",
                                                                        letterSpacing: ".5px",
                                                                        textTransform: "capitalize",
                                                                        '&:hover': {
                                                                            backgroundColor: `${item.status == "block" ? "#FF5858" : "#00C342"}`,
                                                                            boxShadow: "none",
                                                                        },
                                                                    }}
                                                                >
                                                                    {item.status}
                                                                </Button>

                                                                <Visibility sx={{ mt: "8px", color: "#C4B1AB", fontSize: "20px" }}
                                                                    onClick={handleOpenmodalview}
                                                                />
                                                            </div>
                                                        </TableCell>

                                                    </TableRow>
                                                ))}

                                            </TableBody>
                                        </Table>

                                    </TableContainer>
                                }
                            </Grid>
                        </Grid>
                    </Box >
                }
            />

            {/* confirmation modal */}
            <ModalAdd
                open={openmodalconfirmation}
                onClose={() => setOpenmodalconfirmation(false)}
                title="User Status"
                data={
                    <>
                        <Grid container spacing={0} p={{ xs: 2, md: 3, lg: 3, xl: 3 }}>

                            <Grid xs={12} align="center"  >
                                <Stack direction="column" spacing={1} pb={3}>
                                    <TypographyMD variant='paragraph' label="Confirmation" color="gray" marginLeft={0} fontSize="25px" fontWeight={550} align="center" />
                                    <TypographyMD variant='paragraph' label="Do you want to update the status ?" color="#000000" marginLeft={0} fontSize="15px" fontWeight={450} align="center" />
                                </Stack>
                            </Grid>

                            <Grid xs={6} align="" onClick={() => setOpenmodalconfirmation(false)}>
                                <ButtonMD variant="outlined" title="Cancel" width="90%" type="submit" borderColor="orange" backgroundColor="orange" borderRadius="10px" />
                            </Grid>

                            <Grid xs={6} align="right" >
                                <ButtonMD variant="contained" title="Update" width="90%" type="submit" borderColor="orange" backgroundColor="orange" borderRadius="10px" disabled={loading} onClickTerm={handleClosemodalconfirmation} />
                            </Grid>

                        </Grid>
                    </>
                }
            />

            {/* view */}
            < ModalAdd
                open={openmodalview}
                onClose={() => setOpenmodalview(false)}
                title="User Details"
                data={
                    <>
                        <Grid container spacing={0} p={3}>
                            <Grid xs={4} md={4} align="center" >
                                <TypographyMD variant='h2' label="Username" color="#A5ADB0" fontFamily="Laila" marginLeft={0} fontSize="15px" fontWeight={500} align="left" />
                            </Grid>

                            <Grid xs={8} md={8} align="right" >
                                <TypographyMD variant='h2' label="Sarah Johnson" color="#424242" fontFamily="Laila" marginLeft={0} fontSize="16px" fontWeight={550} align="right" />
                            </Grid>

                            <Grid xs={12} md={12} align="" pt={1} pb={1}>
                                <Divider sx={{ color: "gray", backgroundColor: "gray" }} />
                            </Grid>

                            <Grid xs={4} md={4} align="center" >
                                <TypographyMD variant='h2' label="Email Address" color="#A5ADB0" fontFamily="Laila" marginLeft={0} fontSize="15px" fontWeight={500} align="left" />
                            </Grid>

                            <Grid xs={8} md={8} align="right" >
                                <TypographyMD variant='h2' label="Sarahjohnson@gmail.com" color="#424242" fontFamily="Laila" marginLeft={0} fontSize="16px" fontWeight={550} align="right" />
                            </Grid>

                            <Grid xs={12} md={12} align="" pt={1} pb={1}>
                                <Divider sx={{ color: "gray", backgroundColor: "gray" }} />
                            </Grid>

                            <Grid xs={4} md={4} align="center" >
                                <TypographyMD variant='h2' label="Date of Birth" color="#A5ADB0" fontFamily="Laila" marginLeft={0} fontSize="15px" fontWeight={500} align="left" />
                            </Grid>

                            <Grid xs={8} md={8} align="right" >
                                <TypographyMD variant='h2' label="March 15, 1987" color="#424242" fontFamily="Laila" marginLeft={0} fontSize="16px" fontWeight={550} align="right" />
                            </Grid>

                            <Grid xs={12} md={12} align="" pt={1} pb={1}>
                                <Divider sx={{ color: "gray", backgroundColor: "gray" }} />
                            </Grid>

                            <Grid xs={4} md={4} align="center" >
                                <TypographyMD variant='h2' label="City" color="#A5ADB0" fontFamily="Laila" marginLeft={0} fontSize="15px" fontWeight={500} align="left" />
                            </Grid>

                            <Grid xs={8} md={8} align="right" >
                                <TypographyMD variant='h2' label="New York" color="#424242" fontFamily="Laila" marginLeft={0} fontSize="16px" fontWeight={550} align="right" />
                            </Grid>

                            <Grid xs={12} md={12} align="" pt={1} pb={1}>
                                <Divider sx={{ color: "gray", backgroundColor: "gray" }} />
                            </Grid>

                            <Grid xs={4} md={4} align="center" >
                                <TypographyMD variant='h2' label="Country" color="#A5ADB0" fontFamily="Laila" marginLeft={0} fontSize="15px" fontWeight={500} align="left" />
                            </Grid>

                            <Grid xs={8} md={8} align="right" >
                                <TypographyMD variant='h2' label="USA" color="#424242" fontFamily="Laila" marginLeft={0} fontSize="16px" fontWeight={550} align="right" />
                            </Grid>

                            <Grid xs={12} md={12} align="center" pt={2} pb={2}>
                                <ButtonMD variant="contained" title="Block" width="90%" type="submit" borderColor="orange" backgroundColor="orange" borderRadius="10px" onClickTerm={handleOpenmodalconfirmation} />
                            </Grid>

                        </Grid>
                    </>
                }
            />

            {/* user status success */}
            <ModalSuccess
                open={opensuccess}
                onClose={handleClosesuccess}
                title="Success"
                subheading="User Block Successfully"
            />

        </>
    )
}

export default Dashboard;