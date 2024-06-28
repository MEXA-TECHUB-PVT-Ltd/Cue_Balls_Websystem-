import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Box, Button, Card, CardContent, Divider, Grid, IconButton, InputAdornment, Menu, MenuItem, OutlinedInput, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
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
import endpoint, { url_FE } from "../Endpointurl";
import url from "../url";
import ModalSuccess from "../components/items/ModalSuccess";
import { useNavigate } from "react-router-dom";

function Paypalsuccess() {

    const navigate = useNavigate();

    // success 
    const [opensuccess, setOpensuccess] = useState(false);

    useEffect(() => {
        setOpensuccess(true);
    }, [])

    return (
        <>
            <ModalSuccess
                open={opensuccess}
                onClose={() => setOpensuccess(false)}
                title="Amount Deposit Successfully"
                // subheading={`User ${userdetails.status == "unblock" ? "block" : "unblock"} Successfully`}
                data={
                    <ButtonMD variant="contained" title="ok" width="60%" type="submit" borderColor="orange" backgroundColor="orange" borderRadius="10px" onClickTerm={() => navigate(`${endpoint}dashboard`)} />
                }
            />

            <ToastContainer />
        </>
    )
}

export default Paypalsuccess;