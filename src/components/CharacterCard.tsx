import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { CharacterEditModal } from "./CharacterEditModal";

export const CharacterCard: React.FC = () => {
  const image =
    "https://images.unsplash.com/photo-1559999831-7deaf136d4a9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  return (
    <Container sx={{ marginTop: 5, width: "100%" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="Warrior Character"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              John doe
            </Typography>
            <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={2} md={2} key={index}>
                  <Typography variant="body1">
                    {["Str", "Dex", "Con", "Int", "Wis", "Car"][index]}
                  </Typography>
                  <Typography variant="h6">
                    {Math.floor(Math.random() * 20) + 1}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Divider sx={{ width: "100%", marginTop: 2, marginBottom: 2 }} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleEditClick}>
            Edit Character
          </Button>
        </CardActions>
      </Card>

      <CharacterEditModal
        open={isEditModalOpen}
        onClose={handleEditModalClose}
      />
    </Container>
  );
};
