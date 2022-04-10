import TodoItemHeader from "../TodoItemHeader/TodoItemHeader";
import Card from "@mui/material/Card";
import TodoItemFooter from "../todoItemFooter/TodoItemFooter";
import TodoItemBody from "../todoItemBody/TodoItemBody";
import { IUserIncluded } from "../../Interfaces";

type Props = {
  taskTitle: string;
  taskDesc: string;
  priority: string;
  isNew: boolean;
  dueDate: string;
  userIncluded: IUserIncluded[];
};
const TodoItem = ({
  priority,
  isNew,
  userIncluded,
  taskDesc,
  taskTitle,
  dueDate,
}: Props) => {
  const handleCardFooter = (): any => {
    if (dueDate !== "" || userIncluded.length !== 0) {
      return <TodoItemFooter userIncluded={userIncluded} dueDate={dueDate} />;
    }
  };
  return (
    <Card
      sx={{
        borderRadius: "2px",
        margin: "4px auto",
        padding: "17px 17px 10px 17px",
        textAlign: "left",
        border: "2px solid #fff",
        boxShadow: "none",
        "&:hover": {
          border: "2px solid #7956ff",
        },
      }}
    >
      <TodoItemHeader priority={priority} isNew={isNew} />
      <TodoItemBody taskDesc={taskDesc} taskTitle={taskTitle} />
      {handleCardFooter()}
    </Card>
  );
};

export default TodoItem;
