import { SxProps, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export const Copyright = (props: SxProps) => {
  return (
    <Typography
      variant="body2"
      // color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Dungeons and Dragons Battle companion {new Date().getFullYear()}
      </Link>
    </Typography>
  );
};
