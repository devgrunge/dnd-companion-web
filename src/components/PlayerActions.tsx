import { EditNotifications } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ShareIcon from "@mui/icons-material/Share";
import SettingsIcon from "@mui/icons-material/Settings";
import { useMenu } from "../hooks/useMenu";

export const PlayerActions = () => {
  const actions = [
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

  const {
    charactersModalOpen,
    configurationsModalOpen,
    shareModalOpen,
    ...menuFunctions
  } = useMenu();

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
          onClick={() => {
            menuFunctions[action.actionHandler]();
            console.log(`Executing action: ${action.name}`);
          }}
        />
      ))}
    </SpeedDial>
  );
};
