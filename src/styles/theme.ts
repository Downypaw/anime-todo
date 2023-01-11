import { createTheme } from "@mui/material";

export const initialStyles = {
  palette: {
    primary: {
      main: "#715B83",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
  },
};

export default createTheme(initialStyles);
