import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const TodoItemBody = () => {
  return (
    <CardContent sx={{ paddingLeft: 0, paddingBottom: 0 }}>
      <Typography variant="body2" fontWeight={700}>
        new Task
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests.
      </Typography>
      <Button
        sx={{
          margin: "15px 2px 9px 2px ",
          border: "1px solid #50909a",
          borderRadius: "30px",
          color: "#50909a",
          height: 28,
          padding: "15px 12px",
          fontSize: ".7em",
        }}
      >
        Some Action
      </Button>
    </CardContent>
  );
};

export default TodoItemBody;
