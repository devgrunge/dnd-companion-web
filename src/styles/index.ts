import { Fab, SxProps, styled } from "@mui/material";

const customFabStyle: SxProps = {
  position: "absolute",
  // bottom: 16,
  // right: 16,
};

export const CustomFab = styled(Fab)(({ theme }) => ({
  ...(customFabStyle as Record<string, unknown>),
  color: "primary",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
