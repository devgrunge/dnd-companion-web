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
import { CharacterModal } from "./CharacterModal";
import { Characters } from "../store/playerSlice/types/storeTypes";
import { useCharacter } from "../hooks/useCharacter";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { usePlayer } from "../hooks/usePlayer";

export const CharacterCard: React.FC = (key: index, characters: Characters) => {
  const { image, isEditModalOpen, handleEditModalClose, handleEditClick } =
    useCharacter();

  const { getCharacters } = usePlayer()
  const state = useSelector((state: RootState) => state.player);
  console.log("state ==>", state);

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
              {/* {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={2} md={2} key={index}>
                  <Typography variant="body1">
                    {["Str", "Dex", "Con", "Int", "Wis", "Car"][index]}
                  </Typography>
                  <Typography variant="h6">
                    {Math.floor(Math.random() * 20) + 1}
                  </Typography>
                </Grid>
              ))} */}
              {state.characters.map((item, index) => {
                return (
                  <Grid item xs={2} sm={2} md={2} key={index}>
                    <Typography variant="body1">
                      {["Str", "Dex", "Con", "Int", "Wis", "Car"]}
                    </Typography>
                    {/* <Typography variant="body1">
                      {item.attributes.str}
                    </Typography>
                    <Typography variant="body1">
                      {item.attributes.str}
                    </Typography>
                    <Typography variant="body1">
                      {item.attributes.str}
                    </Typography>
                    <Typography variant="body1">
                      {item.attributes.str}
                    </Typography>
                    <Typography variant="body1">
                      {item.attributes.str}
                    </Typography>
                    <Typography variant="body1">
                      {item.attributes.str}
                    </Typography> */}
                  </Grid>
                );
              })}
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
      <Button
        sx={{
          width: "100%",
          background: 'green',
          marginTop: 5
        }}
        onClick={getCharacters}
      >
        Reload
      </Button>
      <CharacterModal open={isEditModalOpen} onClose={handleEditModalClose} />
    </Container>
  );
};
