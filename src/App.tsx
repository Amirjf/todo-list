import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TodoItem from "./components/TodoItem/TodoItem";
import { Tasks } from "./fakeData";
import { ITodoItem } from "./Interfaces";
import "./App.css";

interface TodoItem {
  tasks: ITodoItem[];
}

const App = () => {
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
        {Tasks.map((item) => (
          <TodoItem
            taskTitle={item.taskTitle}
            dueDate={item.dueDate}
            priority={item.priority}
            taskDesc={item.taskDesc}
            isNew={item.isNew}
            userIncluded={item.userIncluded}
          />
        ))}
      </Box>
    </Box>
  );
};

export default App;
