import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatBot = () => {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("chatHistory")) || [
      { text: "Hello! How can I help you?", sender: "bot" },
    ]
  );
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const getBotResponse = (userInput) => {
    // Simple AI response simulation
    const responses = {
      hello: "Hi there! 😊",
      how: "I'm just a bot, but I'm here to help!",
      thanks: "You're welcome! 😊",
      default: "I'm not sure I understand, but I'm learning!",
    };
    return (
      responses[
        Object.keys(responses).find((key) => userInput.toLowerCase().includes(key)) || "default"
      ]
    );
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      // Show typing indicator
      setIsTyping(true);
      setTimeout(() => {
        const botMessage = { text: getBotResponse(input), sender: "bot" };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        margin: "auto",
        padding: 2,
        border: "1px solid",
        borderColor: darkMode ? "#444" : "gray",
        borderRadius: 2,
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#fff" : "#000",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        height: 450,
      }}
    >
      {/* Header & Dark Mode Toggle */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <Typography variant="h6">ChatBot</Typography>
        <Button
          variant="outlined"
          onClick={() => setDarkMode(!darkMode)}
          sx={{
            borderColor: darkMode ? "#bbb" : "#555",
            color: darkMode ? "#fff" : "#000",
            "&:hover": { backgroundColor: darkMode ? "#333" : "#ddd" },
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>

      {/* Chat Messages Section */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          padding: 2,
          backgroundColor: darkMode ? "#1e1e1e" : "#fff",
          borderRadius: 1,
          boxShadow: 2,
          maxHeight: 350,
        }}
      >
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} sx={{ justifyContent: msg.sender === "user" ? "flex-end" : "flex-start" }}>
              <ListItemText
                primary={msg.text}
                sx={{
                  bgcolor: msg.sender === "user" ? "#1976d2" : darkMode ? "#333" : "#eee",
                  color: msg.sender === "user" ? "#fff" : darkMode ? "#ddd" : "#000",
                  padding: 1,
                  borderRadius: 1,
                  maxWidth: "70%",
                }}
              />
            </ListItem>
          ))}
        </List>
        {isTyping && (
          <Typography variant="caption" sx={{ color: darkMode ? "#bbb" : "#666" }}>
            Bot is typing...
            <CircularProgress size={12} sx={{ marginLeft: 1 }} />
          </Typography>
        )}
      </Box>

      {/* Input Section */}
      <Box sx={{ display: "flex", marginTop: 2 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          sx={{
            backgroundColor: darkMode ? "#222" : "#fff",
            input: { color: darkMode ? "#fff" : "#000" },
          }}
        />
        <Button
          onClick={handleSend}
          variant="contained"
          sx={{
            marginLeft: 1,
            backgroundColor: darkMode ? "#007acc" : "#1976d2",
            "&:hover": { backgroundColor: darkMode ? "#005f99" : "#1565c0" },
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBot;
