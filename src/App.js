import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router"; 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Adverts from "./pages/Advert";
import Bots from "./pages/ChatBot";
import AboutUs from "./pages/AboutUs";
import { Box, useMediaQuery } from "@mui/material";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <ThemeContextProvider>
      <Router>
        
        <Navbar toggleSidebar={toggleSidebar} />

        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            {/* Sidebar (Mobile & Desktop Support) */}
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            {/* ✅ Main Content */}
            <Box sx={{ flexGrow: 1, padding: 3, backgroundColor: "white", minHeight: "80vh", marginTop: "10px"}}>
              <Routes>
                <Route path="/adverts" element={<Adverts />} />
                <Route path="/bots" element={<Bots />} />
                <Route path="/about" element={<AboutUs />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
