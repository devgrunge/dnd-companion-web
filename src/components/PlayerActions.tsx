import { EditNotifications } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon, SxProps } from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ShareIcon from "@mui/icons-material/Share";
import SettingsIcon from "@mui/icons-material/Settings";
import { useMenu } from "../hooks/useMenu";

interface Action {
  icon: JSX.Element;
  name: string;
  actionHandler: keyof ReturnType<typeof useMenu>;
  sx?: SxProps;
}

export const PlayerActions : React.FC<Action> ({ sx }) => {
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

  return (
    <SpeedDial
      ariaLabel="User actions"
      sx={{ position: "fixed", bottom: "5%", right: "5%" }}
      icon={
        <SpeedDialIcon
          openIcon={<EditNotifications sx={{ backgroundColor: "black" }} />}
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
  );
};
