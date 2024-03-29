import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";
import { SxProps } from "@mui/system";
import {
  Container,
  Duration,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import { CoffeTab } from "../components/BuyMeACoffe";
import { RoomsBoard } from "../components/Rooms";
import { CharacterCard } from "../components/CharacterCard";
import { Action, PlayerActions } from "../components/PlayerActions";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CreateCharacter } from "../components/CreateCharacter";
import { EditNotifications } from "@mui/icons-material";
import { useMenu } from "../hooks/useMenu";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ShareIcon from "@mui/icons-material/Share";
import SettingsIcon from "@mui/icons-material/Settings";

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

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const actions: Action[] = [
    {
      icon: <AddReactionIcon />,
      name: "Characters",
      actionHandler: "handleOpenCharactersModal",
    },
    {
      icon: <SettingsIcon />,
      name: "Configurations",
      actionHandler: "handleOpenConfigurationsModal",
    },
    {
      icon: <ShareIcon />,
      name: "Share",
      actionHandler: "handleOpenShareModal",
    },
  ];

  const { ...menuFunctions } = useMenu() as ReturnType<typeof useMenu>;

  const fabs = [
    {
      color: "primary" as const,
      icon: <PlayerActions actions={actions} />,
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
  const playerData = useSelector((state: RootState) => state.player);

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
            {value === 0 && fab.color === "primary" ? (
              <SpeedDial
                ariaLabel="User actions"
                sx={{ position: "fixed", bottom: "5%", right: "5%" }}
                icon={
                  <SpeedDialIcon
                    openIcon={
                      <EditNotifications sx={{ backgroundColor: "black" }} />
                    }
                  />
                }
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={() => {
                      menuFunctions[action.actionHandler]();
                      console.log(`Executing action: ${action.name}`);
                    }}
                  />
                ))}
              </SpeedDial>
            ) : (
              <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                {fab.icon}
              </Fab>
            )}
          </Zoom>
        ))}

        {value === 0 && (
          <>
            {playerData.characters.length === 0 ? (
              <CreateCharacter />
            ) : (
              playerData.characters.map((character, index) => (
                <CharacterCard key={index} />
              ))
            )}
          </>
        )}
        {value === 1 && <RoomsBoard />}
        {value === 2 && <CoffeTab />}
      </Container>
    </Box>
  );
};
