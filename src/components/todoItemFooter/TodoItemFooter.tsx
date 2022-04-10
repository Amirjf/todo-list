import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Typography from "@mui/material/Typography";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Divider from "@mui/material/Divider";

type Props = {
  dueDate?: string;
  userIncluded?: boolean;
};
const TodoItemFooter = ({ dueDate, userIncluded }: Props) => {
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
                23.11.2021
              </Typography>
            </>
          )}
        </Box>
        {userIncluded && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AvatarGroup sx={{ width: "24px", height: "24px" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <Avatar
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <Avatar
                alt="Agnes Walker"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
            </AvatarGroup>
            <EditOutlinedIcon fontSize="small" sx={{ color: "#50909a" }} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default TodoItemFooter;
