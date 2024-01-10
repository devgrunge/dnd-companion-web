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
import { Characters } from "../store/playerSlice/types/storeTypes";
import { useCharacter } from "../hooks/useCharacter";

export const CharacterCard: React.FC = (key: index, characters: Characters) => {
  const { image, isEditModalOpen, handleEditModalClose, handleEditClick } =
    useCharacter();

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
