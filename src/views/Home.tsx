import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import { Container } from "@mui/material";
import { CoffeTab } from "../components/BuyMeACoffe";
import { RoomsBoard } from "../components/Rooms";
import { CharacterCard } from "../components/CharacterCard";
import { PlayerActions } from "../components/PlayerActions";


const a11yProps = (index: number) => {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
};

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: "common.white",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[600],
  },
};

export const Home = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index: number) => {
  //   setValue(index);
  // };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "primary" as const,
      sx: fabStyle as SxProps,
      icon: <PlayerActions />,
      label: "Add",
    },
    {
      color: "secondary" as const,
      sx: fabStyle as SxProps,
      icon: <EditIcon />,
      label: "Edit",
    },
    {
      color: "inherit" as const,
      sx: { ...fabStyle, ...fabGreenStyle } as SxProps,
      icon: <UpIcon />,
      label: "Expand",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Characters ⚒️" {...a11yProps(0)} />
          <Tab label="Rooms ⚔️" {...a11yProps(1)} />
          <Tab label="Buy me a coffe ☕" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <Container
        sx={{
          marginTop: 5,
          width: "100%",
        }}
      >
        {value === 0 && <CharacterCard />}
        {value === 1 && <RoomsBoard />}
        {value === 2 && <CoffeTab />}
      </Container>

      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>
  );
};
