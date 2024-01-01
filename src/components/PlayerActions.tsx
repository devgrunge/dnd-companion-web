import { EditNotifications } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

export const PlayerActions = () => {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditNotifications />} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipOpen
        />
      ))}
    </SpeedDial>
  );
};
