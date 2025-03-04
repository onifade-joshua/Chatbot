import React, { useState, useEffect } from "react";
import {
  Box, TextField, Button, Card, CardContent, Typography,
  IconButton, Grid, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, Avatar
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AdvertManager = () => {
  const [adverts, setAdverts] = useState([]);
  const [newAdvert, setNewAdvert] = useState("");
  const [location, setLocation] = useState("");
  const [posterName, setPosterName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Load adverts from localStorage when component mounts
  useEffect(() => {
    const savedAdverts = JSON.parse(localStorage.getItem("adverts")) || [];
    setAdverts(savedAdverts);
  }, []);

  // Save adverts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("adverts", JSON.stringify(adverts));
  }, [adverts]);

  const handleAddAdvert = () => {
    if (newAdvert.trim() && location.trim() && posterName.trim()) {
      const advertData = {
        text: newAdvert,
        location,
        posterName,
        profilePic: profilePic || null,
        time: new Date().toLocaleString(),
      };

      let updatedAdverts;
      if (editIndex !== null) {
        updatedAdverts = [...adverts];
        updatedAdverts[editIndex] = advertData;
        setEditIndex(null);
      } else {
        updatedAdverts = [...adverts, advertData];
      }

      setAdverts(updatedAdverts);
      setNewAdvert("");
      setLocation("");
      setPosterName("");
      setProfilePic(null);
    }
  };

  const handleEditAdvert = (index) => {
    const advert = adverts[index];
    setNewAdvert(advert.text);
    setLocation(advert.location);
    setPosterName(advert.posterName);
    setProfilePic(advert.profilePic);
    setEditIndex(index);
  };

  const confirmDeleteAdvert = (index) => {
    setDeleteIndex(index);
    setOpenDialog(true);
  };

  const handleDeleteAdvert = () => {
    if (deleteIndex !== null) {
      const updatedAdverts = adverts.filter((_, i) => i !== deleteIndex);
      setAdverts(updatedAdverts);
      setDeleteIndex(null);
      setOpenDialog(false);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Temporary preview URL
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", padding: 2 }}>
      <Card sx={{ padding: 2, mb: 2, boxShadow: 2 }}>
        <Typography variant="h6" textAlign="center" gutterBottom>
          Create Advert
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Advert Content"
              value={newAdvert}
              onChange={(e) => setNewAdvert(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Your Name"
              value={posterName}
              onChange={(e) => setPosterName(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </Grid>
          {profilePic && (
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar src={profilePic} sx={{ width: 60, height: 60 }} />
            </Grid>
          )}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleAddAdvert} variant="contained" size="small" sx={{ width: "auto", px: 3 }}>
              {editIndex !== null ? "Update Advert" : "Add Advert"}
            </Button>
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {adverts.map((advert, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: "flex", alignItems: "center", padding: 1, boxShadow: 2 }}>
              <Avatar src={advert.profilePic} sx={{ width: 40, height: 40, marginLeft: 2, marginRight: 2 }} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {advert.posterName}
                </Typography>
                <Typography variant="body2">{advert.text}</Typography>
                <Typography variant="caption">
                  {advert.location} • {advert.time}
                </Typography>
              </CardContent>
              <Box>
                <IconButton onClick={() => handleEditAdvert(index)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => confirmDeleteAdvert(index)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this advert? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteAdvert} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdvertManager;
