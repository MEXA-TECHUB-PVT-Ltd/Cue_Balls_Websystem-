import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Box, Button, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import TypographyMD from "../components/items/Typography";
import Topbar from "../components/topbar/Topbar";
import { ArrowBackIos, ArrowForwardIos, Block, Error, FilterAlt, Search, Visibility } from "@mui/icons-material"

function Opktest() {

    const rows = [
        { name: "Sarah Johnson", email: "Sarahjohnson@gmail.com", dob: "March 15, 1987", opttaken: "3 times" },
        { name: "Maria Rodriguez", email: "Mariarodriguez@gmail.com", dob: "November 8, 1992", opttaken: "5 times" },
        { name: "Ahmed Khan", email: "Ahmedkhan@gmail.com", dob: "May 22, 1975", opttaken: "7 times" },
        { name: "Sophie Martinn", email: "Sophiemartinn@gmail.com", dob: "July 4, 2000", opttaken: "8 times" },
        { name: "Luca Rossi", email: "Lucarossi@gmail.com", dob: "September 12, 1984", opttaken: "9 times" },

        { name: "Sarah Johnson", email: "Sarahjohnson@gmail.com", dob: "March 15, 1987", opttaken: "3 times" },
        { name: "Maria Rodriguez", email: "Mariarodriguez@gmail.com", dob: "November 8, 1992", opttaken: "5 times" },
        { name: "Ahmed Khan", email: "Ahmedkhan@gmail.com", dob: "May 22, 1975", opttaken: "7 times" },

        { name: "Sarah Johnson", email: "Sarahjohnson@gmail.com", dob: "March 15, 1987", opttaken: "3 times" },
        { name: "Maria Rodriguez", email: "Mariarodriguez@gmail.com", dob: "November 8, 1992", opttaken: "5 times" },
        { name: "Ahmed Khan", email: "Ahmedkhan@gmail.com", dob: "May 22, 1975", opttaken: "7 times" },
    ]

    const rowsPerPageOptions = [7, 15, 25];

    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

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

    // Get the rows to display on the current page
    const displayedRows = filteredData.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle next and previous page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Generate an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const [anchorEl, setAnchorEl] = useState(null);
    const [activeFilter, setActiveFilter] = useState('A-Z');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFilterSelect = (filter) => {
        setActiveFilter(filter);
        handleClose();
    };

    return (
        <>
            <Sidebar
                componentData={
                    <Box sx={{ width: "100%", overflowX: "hidden" }} height="auto">
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

                            <Grid xs={6} sm={6} align="" p={2} >
                                <TypographyMD variant='paragraph' label="OPK Test" color="#424242" marginLeft={1} fontFamily="Laila" fontSize="25px" fontWeight={550} align="center" />
                            </Grid>

                            <Grid xs={6} sm={6} align="right" p={2}>
                                <div>
                                    <Button onClick={handleClick} variant="contained"
                                        sx={{
                                            backgroundColor: "transparent",
                                            width: "150px",
                                            border: "1px solid lightgrey",
                                            color: "gray",
                                            borderRadius: "5px",
                                            boxShadow: "none",
                                            textTransform: "capitalize",
                                            fontFamily: "Laila",
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                                boxShadow: "none",
                                            },
                                        }}>
                                        <FilterAlt />&nbsp;&nbsp;&nbsp; {activeFilter}
                                    </Button>

                                    <Menu
                                        PaperProps={{
                                            sx: {
                                                mt: 3,
                                                overflow: 'visible',
                                                width: 150,
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 46,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                                        <MenuItem
                                            onClick={() => handleFilterSelect('A-Z')}
                                            style={{ fontFamily: "Laila", color: activeFilter === 'A-Z' ? '#C4B1AB' : 'inherit' }}
                                        >
                                            A-Z
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => handleFilterSelect('Newest')}
                                            style={{ fontFamily: "Laila", color: activeFilter === 'Newest' ? '#C4B1AB' : 'inherit' }}
                                        >
                                            Newest
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => handleFilterSelect('Oldest')}
                                            style={{ fontFamily: "Laila", color: activeFilter === 'Oldest' ? '#C4B1AB' : 'inherit' }}
                                        >
                                            Oldest
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </Grid>

                        </Grid>

                        <Grid container spacing={0} sx={{ pl: 2, pr: 2 }} pt={0}>
                            <Grid xs={12} md={12} align="">
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

                                        <Table sx={{ width: "100%" }} aria-label="simple table">
                                            <TableHead style={{ backgroundColor: 'rgba(182, 190, 169, 0.35)' }}>
                                                <TableRow  >
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> USER NAME </TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> EMAIL ADDRESS</TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> DATE OF BIRTH </TableCell>
                                                    <TableCell align="center" sx={{ fontWeight: "bold", color: "#424242", fontFamily: "Laila", fontSize: "15px" }}> OPK TEST TAKEN </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {displayedRows.map((item) => (
                                                    <TableRow>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} >{highlightMatch(item.name, searchTerm)}</TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} >{item.email}</TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} >{item.dob}</TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: "normal", color: "#545454", fontFamily: "Laila", fontSize: "13px" }} > {item.opttaken} </TableCell>

                                                    </TableRow>
                                                ))}

                                            </TableBody>
                                        </Table>

                                        <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>

                                            <div>
                                                <ArrowBackIos onClick={handlePrevPage} disabled={currentPage === 1}
                                                    sx={{ color: "#444", fontSize: "15px" }} />

                                                {pageNumbers.map((page) => (
                                                    <button
                                                        key={page}
                                                        onClick={() => handlePageChange(page)}
                                                        style={{
                                                            backgroundColor: currentPage === page ? '#C4B1AB' : 'white',
                                                            color: currentPage === page ? 'white' : 'black',
                                                            border: currentPage === page ? 'none' : '1px solid lightgrey',
                                                            padding: '5px 10px',
                                                            margin: '5px',
                                                            borderRadius: "5px",
                                                            cursor: 'pointer',
                                                        }}
                                                    >
                                                        {page}
                                                    </button>
                                                ))}

                                                <ArrowForwardIos onClick={handleNextPage} disabled={currentPage === totalPages}
                                                    sx={{ color: "#444", fontSize: "15px" }} />

                                            </div>
                                        </div>

                                    </TableContainer>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                }
            />
        </>
    )
}

export default Opktest;