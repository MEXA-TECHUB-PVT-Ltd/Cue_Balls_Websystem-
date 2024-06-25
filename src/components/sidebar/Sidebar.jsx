import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import logo from "../../Assets/logo.png";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Assessment, Category, Code, Dashboard, DeviceThermostat, Diversity3, Feedback, FormatAlignLeft, Groups, Home, Interests, LocalLibrary, Lock, Logout, MergeType, Notifications, People, PeopleAlt, PriorityHigh, PrivacyTip, RecordVoiceOver, Report, Restaurant, RestaurantMenu, School, Search, Settings, Subscriptions, TwoWheeler } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import "../../App.css"
import { Avatar, Button, Grid, InputAdornment, Menu, MenuItem, OutlinedInput, TextField, Typography } from '@mui/material';
import "./Sidebar.css"
import url from '../../url';
import endpoint from '../../Endpointurl';
import TypographyMD from '../items/Typography';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function Sidebar({ componentData }) {
    const navigate = useNavigate();

    const [adminimage, setAdminimage] = useState("");
    useEffect(() => {
        const adminimage = JSON.parse(localStorage.getItem('image'));
        if (adminimage) {
            console.log(adminimage)
            setAdminimage(adminimage);
        }
    }, [])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openmenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        // navigate("/profile");
    };

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.innerWidth > 620) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const logoutfunction = () => {
        const items = JSON.parse(localStorage.getItem('jwtoken'));
        console.log(items)
        if (items != null) {
            localStorage.clear("items");
            setTimeout(() => {
                navigate("/")
            }, 3000);
        } else {
            navigate("/dashboard");
        }

        setTimeout(() => {
            navigate("/")
        }, 3000);

    }

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [filterdata, setFilterdata] = useState([]);
    const [data, setData] = useState([]);

    return (
        <>
            <Box sx={{ backgroundColor: "white", height: "auto", display: 'flex' }}>
                <CssBaseline />

                <Drawer variant="permanent" open={open}  >
                    {window.innerWidth < 620 ?
                        <></>
                        :
                        <>
                            <DrawerHeader sx={{ backgroundColor: "transparent" }}>
                                <Grid container spacing={0} pt={2}>
                                    <Grid xs={12} align="center" pt={3}>
                                        <Avatar src={logo}
                                            style={{
                                                width: 110,
                                                height: 110,
                                            }} ></Avatar>
                                    </Grid>
                                </Grid>

                            </DrawerHeader>

                            <Grid container spacing={0} sx={{ pt: 6, pb: 2, backgroundColor: "transparent" }}>
                                <Grid xs={12} align="center">
                                    <TypographyMD variant='paragraph' label="The Smart Stork App" color="#B6BEA9" fontFamily="Laila" marginLeft={1} fontSize="17px" fontWeight={500} align="center" />
                                </Grid>
                            </Grid>
                        </>
                    }
                    {/* <Divider /> */}
                    <List sx={{ backgroundColor: "transparent", height: "100vh", pt: { xs: 5, md: 0 } }}>
                        <ul className='navbar'>
                            <li>
                                <NavLink to={`${endpoint}dashboard`} className="navbar-link">
                                    {[<span ><Typography sx={{ fontFamily: "Laila" }}>Dashboard</Typography></span>].map((text, index) => (
                                        <ListItem key={text} disablePadding sx={{ display: 'block' }} >
                                            <ListItemButton
                                                sx={{
                                                    minHeight: 0,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2, pb: 0,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {index % 2 === 0 ? <Dashboard sx={{ fontSize: "20px" }} /> : <></>}
                                                </ListItemIcon>
                                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={`${endpoint}users`} className="navbar-link">
                                    {[<span ><Typography sx={{ fontFamily: "Laila" }}>Users</Typography></span>].map((text, index) => (
                                        <ListItem key={text} disablePadding sx={{ display: 'block' }} >
                                            <ListItemButton
                                                sx={{
                                                    minHeight: 0,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2, pb: 0,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {index % 2 === 0 ? <Groups sx={{ fontSize: "20px" }} /> : <></>}
                                                </ListItemIcon>
                                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={`${endpoint}subscribedusers`} className="navbar-link">
                                    {[<span ><Typography sx={{ fontFamily: "Laila" }}>Subscribed Users</Typography></span>].map((text, index) => (
                                        <ListItem key={text} disablePadding sx={{ display: 'block' }} >
                                            <ListItemButton
                                                sx={{
                                                    minHeight: 0,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2, pb: 0,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {index % 2 === 0 ? <Subscriptions sx={{ fontSize: "20px" }} /> : <></>}
                                                </ListItemIcon>
                                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={`${endpoint}opktest`} className="navbar-link">
                                    {[<span ><Typography sx={{ fontFamily: "Laila" }}>OPK Test</Typography></span>].map((text, index) => (
                                        <ListItem key={text} disablePadding sx={{ display: 'block' }} >
                                            <ListItemButton
                                                sx={{
                                                    minHeight: 0,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2, pb: 0,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {index % 2 === 0 ? <DeviceThermostat sx={{ fontSize: "20px" }} /> : <></>}
                                                </ListItemIcon>
                                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={`${endpoint}privacypolicy`} className="navbar-link">
                                    {[<span ><Typography sx={{ fontFamily: "Laila" }}>Privacy Policy</Typography></span>].map((text, index) => (
                                        <ListItem key={text} disablePadding sx={{ display: 'block' }} >
                                            <ListItemButton
                                                sx={{
                                                    minHeight: 0,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2, pb: 0,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {index % 2 === 0 ? <PrivacyTip sx={{ fontSize: "20px" }} /> : <></>}
                                                </ListItemIcon>
                                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={`${endpoint}termsconditions`} className="navbar-link">
                                    {[<span ><Typography sx={{ fontFamily: "Laila" }}>Terms & Conditions</Typography></span>].map((text, index) => (
                                        <ListItem key={text} disablePadding sx={{ display: 'block' }} >
                                            <ListItemButton
                                                sx={{
                                                    minHeight: 0,
                                                    justifyContent: open ? 'initial' : 'center',
                                                    px: 2, pb: 0,
                                                }}
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : 'auto',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {index % 2 === 0 ? <Assessment sx={{ fontSize: "20px" }} /> : <></>}
                                                </ListItemIcon>
                                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </NavLink>
                            </li>

                        </ul>
                    </List>

                </Drawer>

                <Box component="main" sx={{ width: { xs: "50%", md: "100%" }, flexGrow: 1 }}>
                    {/* <Dashboard /> */}
                    {componentData}
                </Box>
            </Box>
        </>
    )
}

export default Sidebar