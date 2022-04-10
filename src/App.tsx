import { FC } from "react";
import "./App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TodoItem from "./components/TodoItem/TodoItem";

interface TodoItem {
  priority: string;
  isNew?: boolean;
  dueDate?: string;
  userIncluded?: boolean;
}

const App: FC = () => {
  return (
    <Box
      m={1}
      p={1}
      bgcolor="#f6f6f6"
      sx={{
        width: "280px",
      }}
    >
      <Typography variant="body2" fontWeight={700}>
        To do list title (3)
      </Typography>
      <Box
        sx={{
          width: "280px",
        }}
      >
        <TodoItem priority="high" dueDate="23.11.2022" isNew />
        <TodoItem priority="low" />
        <TodoItem priority="critical" isNew userIncluded />
        <TodoItem priority="low" dueDate="23.11.2022" userIncluded />
      </Box>
    </Box>
  );
};

export default App;
