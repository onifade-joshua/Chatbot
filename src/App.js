import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router"; 
import Navbar from "./components/Navbar";
import Header from "./components/Header"; // ✅ Import Header instead of Sidebar
import Adverts from "./pages/Advert";
import Bots from "./pages/ChatBot";
import AboutUs from "./pages/AboutUs";
import { Box, useMediaQuery } from "@mui/material";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const toggleHeader = () => setHeaderOpen(!headerOpen);

  return (
    <ThemeContextProvider>
      <Router>
        
        <Navbar toggleSidebar={toggleHeader} />

        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          {/* ✅ Replace Sidebar with Header */}
          <Header headerOpen={headerOpen} toggleHeader={toggleHeader} />

          {/* ✅ Main Content */}
          <Box sx={{ flexGrow: 1, padding: 3, backgroundColor: "white", minHeight: "80vh", marginTop: "10px"}}>
            <Routes>
              <Route path="/adverts" element={<Adverts />} />
              <Route path="/bots" element={<Bots />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
