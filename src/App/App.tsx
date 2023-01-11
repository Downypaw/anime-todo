import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme";
import { TaskListPage } from "../pages/TaskListPage/TaskListPage";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TaskListPage />
    </ThemeProvider>
  );
};

export default App;
