import { EditNotifications } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ShareIcon from "@mui/icons-material/Share";
import SettingsIcon from "@mui/icons-material/Settings";
import { usePlayer } from "../hooks/usePlayer";

export const PlayerActions = () => {
  const actions = [
    { icon: <AddReactionIcon />, name: "Characters" },
    { icon: <SettingsIcon />, name: "Configurations" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  // const {  } = usePlayer()

  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "absolute", bottom: "2%", right: "2%" }}
      icon={<SpeedDialIcon openIcon={<EditNotifications />} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
          // onClick={}
        />
      ))}
    </SpeedDial>
  );
};
