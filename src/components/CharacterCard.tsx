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
import { useCharacter } from "../hooks/useCharacter";
import { usePlayer } from "../hooks/usePlayer";
import { SkeletonCard } from "./skeletons/SkeletonCard";
import { ModalContainer } from "../contexts/ModalContainer";
import { useModal } from "../contexts/modalContext";

export const CharacterCard: React.FC = () => {
  const { image } = useCharacter();
  const { openModal } = useModal();

  const { characterList, isLoading } = usePlayer();

  return (
    <Container sx={{ marginTop: 5, width: "100%" }}>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        characterList.data?.map((item, characterIndex: number) => (
          <Card
            key={characterIndex}
            sx={{ maxWidth: "100%", marginTop: 5, marginBottom: 5 }}
          >
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
                <Grid
                  container
                  spacing={2}
                  columns={{ xs: 12, sm: 12, md: 12 }}
                >
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="body1">
                      {["Str", "Dex", "Con", "Int", "Wis", "Car"]
                        .map(
                          (attribute) =>
                            `${attribute}: ${
                              item.attributes[attribute.toLowerCase()]
                            }`
                        )
                        .join(" | ")}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider
                  sx={{ width: "100%", marginTop: 2, marginBottom: 2 }}
                />
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => openModal("character")}
              >
                Edit Character
              </Button>
            </CardActions>
          </Card>
        ))
      )}
      <ModalContainer />
    </Container>
  );
};
