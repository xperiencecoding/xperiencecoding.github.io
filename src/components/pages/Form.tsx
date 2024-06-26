import React, { useEffect, useState } from "react";
import "../../scss/core.scss";
import "../../scss/pages.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import Background from "../../img/form.jpg";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import CodingForm from "../generic/CodingForm";
import ConsultingForm from "../generic/ConsultingForm";
import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";

const Form: React.FC = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [alignment, setAlignment] = useState('consulting');

    const muiTheme = createTheme({
        palette: {
            primary: { main: "#FFFFFF" },
            secondary: { main: '#11cb5f' },
            text: { primary: "#FFFFFF" },
        },
    });

    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        if (newAlignment != null) {
            setAlignment(newAlignment);
        }
    };

    const CustomToggle = styled(ToggleButton)({
        color: "#FFFFFF"
    });

    useEffect(() => {
        theme.setLoadState(-2);

        // Read the query parameter
        const params = new URLSearchParams(location.search);
        const toggle = params.get('toggle');
        if (toggle === 'education') {
            setAlignment('coding');
        }
    }, [theme, location.search]);

    return (
        <div className="apex-test w-100 h-100 col-cc">
            <AnimatePresence>
                {theme.loadState === -2 && (
                    <motion.div
                        className="document col-st"
                        variants={Anim.bounceY(1200).spring(240, 0, 30).build()}
                        initial="inactive"
                        animate="active"
                        exit="inactive"
                    >
                        <div
                            className="h0 oxanium bold col-cc"
                            style={{
                                backgroundImage: `url(${Background})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                fontSize: "4rem ",
                                textAlign: "center"
                            }}
                        >
                            Sign up to contact us!
                            <motion.div
                                className="back"
                                tabIndex={0}
                                onClick={() => {
                                    theme.setLoadState(-1);
                                    setTimeout(() => {
                                        navigate("/");
                                    }, 500);
                                }}
                            >
                                
                            </motion.div>
                            
                        </div>
                        <ThemeProvider theme={muiTheme}>
                        
                            <div>
                                <ToggleButtonGroup
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                    color="standard"
                                    sx={{
                                        outlineColor: 'gray',
                                        outlineWidth: '.1em',
                                        outlineStyle: 'solid',
                                        marginLeft: '15px',
                                    }}
                                >
                                    <CustomToggle value="consulting">Consulting</CustomToggle>
                                    <CustomToggle value="coding">Education</CustomToggle>
                                </ToggleButtonGroup>
                            </div>
                        </ThemeProvider>
                        {alignment === "consulting" ? <ConsultingForm /> : <CodingForm />}
                        <motion.div
                            tabIndex={0}
                            onClick={() => window.open("mailto:adam.lueken@d128.org")}
                            className="click-to col-cc oxanium h6 bold w-100 text-centered"
                            whileHover={{ boxShadow: "0 0 1rem white" }}
                        >
                            Click to contact Adam Lueken (adam.lueken@d128.org) for more information.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Form;
