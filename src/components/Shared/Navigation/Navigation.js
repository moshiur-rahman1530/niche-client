import React, { useState } from "react";
import {
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
    Container,
    AppBar,
} from "@mui/material";

import { Box } from "@mui/system";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DrawerComponent from "./DrawerComponent";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
    const [openDrawer, setOpenDrawer] = useState(true); //
    //theme instance
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container>
            <Box elevation={0} sx={{ flexGrow: 1 }}>
                <AppBar style={{ backgroundColor: '#3366ff' }}>
                    <Toolbar>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                            }}
                            component="div"
                        >
                            {/* logo */}
                            <Box>
                                <IconButton>
                                    <DirectionsCarIcon sx={{ fontSize: "2.4rem", marginRight: '5px', color: 'white' }} />
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                                        Topcar
                                    </Typography>
                                </IconButton>
                            </Box>

                            {/* Links */}
                            {matches ? (
                                <DrawerComponent
                                    openDrawer={openDrawer}
                                    setOpenDrawer={setOpenDrawer}
                                />
                            ) : (
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        News
                                    </Typography>

                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        News
                                    </Typography>

                                    <Typography
                                        sx={{
                                            cursor: "pointer",
                                            color: "#616161",
                                        }}
                                    >
                                        Men
                                    </Typography>
                                    <Typography
                                        sx={{
                                            cursor: "pointer",
                                            color: "#616161",
                                        }}
                                    >
                                        Women
                                    </Typography>
                                    <Typography
                                        sx={{
                                            cursor: "pointer",
                                            color: "#616161",
                                        }}
                                    >
                                        FAQ
                                    </Typography>
                                </Box>
                            )}

                            {/* button links */}

                            {matches && (
                                <Box>
                                    <IconButton onClick={() => setOpenDrawer(true)}>
                                        <MenuIcon />
                                    </IconButton>
                                </Box>
                            )}

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
};


export default Navigation;