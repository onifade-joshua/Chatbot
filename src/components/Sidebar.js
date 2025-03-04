import React, { useContext } from "react";
import { Box, Tab, Tabs, Drawer } from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router"; 

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      {/* Sidebar for Larger Screens */}
      <Box
        sx={{
          width: "220px",
          maxHeight: "auto",
          backgroundColor: darkMode ? "#1e1e1e" : "#fff",
          color: darkMode ? "#fff" : "#000",
          borderRight: "1px solid #333",
          display: { xs: "none", sm: "block" },
          flexDirection: "column",

        }}
      >
        <NavTabs />
      </Box>

      {/* Drawer for Mobile Screens */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={toggleSidebar}
        sx={{
          "& .MuiDrawer-paper": {
            width: 220,
            backgroundColor: darkMode ? "#1e1e1e" : "#fff",
            color: darkMode ? "#fff" : "#000",
            borderRight: "1px solid #333",
          },
        }}
      >
        <NavTabs />
      </Drawer>
    </>
  );
};

const NavTabs = () => {
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      sx={{
        "& .MuiTabs-indicator": { backgroundColor: "#ff9800" },
        "& .MuiTab-root": {
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "gray",
            color: "#ffffff",
            borderRadius: "5px",
          },
        },
        "& .Mui-selected": { color: "#ff9800", fontWeight: "bold" },
      }}
    >
      <Tab label="Advert" component={Link} to="/adverts" />
      <Tab label="Bots" component={Link} to="/bots" />
      <Tab label="About Us" component={Link} to="/about" />
    </Tabs>
  );
};

export default Sidebar;
