import React from "react";
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
import { useCharacter } from "../hooks/useCharacter";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { usePlayer } from "../hooks/usePlayer";

export const CharacterCard: React.FC = () => {
  const { image, isEditModalOpen, handleEditModalClose, handleEditClick } =
    useCharacter();

  const { characterList } = usePlayer();

  return characterList.data?.length > 0 ? (
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
              {characterList.data.map((item, index) => (
                <Grid item xs={2} sm={2} md={2} key={index}>
                  <Typography variant="body1">Attributes:</Typography>
                  {["Str", "Dex", "Con", "Int", "Wis", "Car"].map(
                    (attribute) => (
                      <Typography key={attribute} variant="body1">
                        {`${attribute}: ${
                          item.attributes[attribute.toLowerCase()]
                        }`}
                      </Typography>
                    )
                  )}
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
      <CharacterModal
        type="editCharacter"
        open={isEditModalOpen}
        onClose={handleEditModalClose}
      />
    </Container>
  ) : (
    <>
      <Typography>No characters yet</Typography>
    </>
  );
};
