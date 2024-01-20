import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { usePlayer } from "../hooks/usePlayer";
import { Container, Typography } from "@mui/material";

export const CreateCharacter = () => {
  const {
    formData,
    handleAttributeChange,
    handleInputChange,
    classesOptions,
    attributes,
    createCharacter,
  } = usePlayer();

  return (
    <Container
      sx={{
        maxWidth: "100%",
      }}
    >
      <Typography gutterBottom variant="h6" component="div">
        Don't have a character? Create your first one here!
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={formData.name}
        onChange={(e) => handleInputChange("name", e.target.value)}
        margin="normal"
      />
      <TextField
        label="Level"
        type="number"
        variant="outlined"
        fullWidth
        value={formData.level}
        onChange={(e) =>
          handleInputChange("level", parseInt(e.target.value, 10))
        }
        margin="normal"
      />
      <Autocomplete
        options={classesOptions}
        getOptionLabel={(option) => option}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label="Class"
            variant="outlined"
            margin="normal"
          />
        )}
        onChange={(_, value) => handleInputChange("class", value)}
      />
      <Stack direction="row" spacing={2}>
        {attributes.map((attribute) => (
          <TextField
            key={attribute}
            label={attribute}
            type="number"
            variant="outlined"
            value={formData.attributes[attribute.toLowerCase()]}
            onChange={(e) =>
              handleAttributeChange(
                attribute.toLowerCase(),
                parseInt(e.target.value, 10)
              )
            }
          />
        ))}
      </Stack>
      <TextField
        label="Hitpoints"
        type="number"
        variant="outlined"
        fullWidth
        value={formData.hitpoints}
        onChange={(e) =>
          handleInputChange("hitpoints", parseInt(e.target.value, 10))
        }
        margin="normal"
      />
      <TextField
        label="Armor Class"
        type="number"
        variant="outlined"
        fullWidth
        value={formData.armor_class}
        onChange={(e) =>
          handleInputChange("armor_class", parseInt(e.target.value, 10))
        }
        margin="normal"
      />
      <TextField
        label="Initiative"
        type="number"
        variant="outlined"
        fullWidth
        value={formData.initiative}
        onChange={(e) =>
          handleInputChange("initiative", parseInt(e.target.value, 10))
        }
        margin="normal"
      />
      <Button
        sx={{
          marginTop: 5,
          width: "100%",
        }}
        type="submit"
        variant="contained"
        color="primary"
        onClick={createCharacter}
      >
        Submit
      </Button>
    </Container>
  );
};
