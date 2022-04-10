import TodoItemHeader from "../TodoItemHeader/TodoItemHeader";
import Card from "@mui/material/Card";
import TodoItemFooter from "../todoItemFooter/TodoItemFooter";
import TodoItemBody from "../todoItemBody/TodoItemBody";

type Props = {
  priority: string;
  isNew?: boolean;
  dueDate?: string;
  userIncluded?: boolean;
};
const TodoItem = ({ priority, isNew, dueDate, userIncluded }: Props) => {
  const handleCardFooter = (): any => {
    if (dueDate !== undefined || userIncluded !== undefined) {
      return <TodoItemFooter dueDate={dueDate} userIncluded={userIncluded} />;
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
      <TodoItemBody />
      {handleCardFooter()}
    </Card>
  );
};

export default TodoItem;
