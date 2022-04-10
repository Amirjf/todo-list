import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Divider from "@mui/material/Divider";
import { IUserIncluded } from "../../Interfaces";

type Props = {
  dueDate: string;
  userIncluded: IUserIncluded[];
};
const TodoItemFooter = ({ userIncluded, dueDate }: Props) => {
  return (
    <>
      <Divider
        variant="fullWidth"
        sx={{ marginLeft: "2px", marginRight: "2px" }}
      />
      <Box mt={2} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          {dueDate && (
            <>
              <Typography variant="caption" color="#a9aeaf" display="block">
                Due Date
              </Typography>
              <Typography variant="subtitle2" display="block">
                {dueDate}
              </Typography>
            </>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {userIncluded.map((user) => (
            <Avatar
              alt="Remy Sharp"
              src={user.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
          {userIncluded.length !== 0 ? (
            <EditOutlinedIcon fontSize="small" sx={{ color: "#50909a" }} />
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default TodoItemFooter;
