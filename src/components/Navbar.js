import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Switch, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "../assets/samjodatechsolutions-logo.jpg";
import { useMediaQuery } from "@mui/material";

const Navbar = ({ toggleSidebar }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "inherit", // Inherit from global styles
        color: "inherit",
        boxShadow: "none",
        borderBottom: "2px solid #ddd",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Side - Logo & Brand */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile && (
            <IconButton color="inherit" onClick={toggleSidebar} sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
          <img 
            src={Logo} 
            alt="Company logo" 
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #007bff",
              padding: "2px",
              backgroundColor: "#fff",
            }} 
          />
          <Typography variant="h6" sx={{ ml: 2, fontWeight: "bold" }}>
            SamjodaTech Solutions
          </Typography>
        </Box>

        {/* Right Side - Dark Mode Toggle */}
        <Switch checked={darkMode} onChange={toggleDarkMode} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
