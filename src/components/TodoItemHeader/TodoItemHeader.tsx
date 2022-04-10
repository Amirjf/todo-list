import React, { FC } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

type Props = {
  priority: string;
  isNew?: boolean;
};

const TodoItemHeader = ({ priority, isNew }: Props) => {
  const handlePriorityIcon = (): any => {
    switch (priority.toLowerCase()) {
      case "critical":
        return (
          <>
            <ArrowRightAltIcon
              fontSize="small"
              sx={{
                background: "#fff4f4",
                borderRadius: "100%",
                transform: "rotate(270deg)",
                color: "red",
              }}
            />
            <Typography sx={{ color: "#ff5e67", fontSize: "12px" }}>
              {priority.toUpperCase()}
            </Typography>
          </>
        );
      case "high":
        return (
          <>
            <KeyboardArrowUpOutlinedIcon
              fontSize="small"
              sx={{
                background: "#fff4f4",
                borderRadius: "100%",
                color: "#ff893a",
              }}
            />
            <Typography sx={{ color: "#ff893a", fontSize: "12px" }}>
              {priority.toUpperCase()}
            </Typography>
          </>
        );
      case "low":
        return (
          <>
            <KeyboardArrowDownOutlinedIcon
              fontSize="small"
              sx={{
                background: "#fff4f4",
                borderRadius: "100%",
                color: "#29d6f5",
              }}
            />
            <Typography sx={{ color: "#29d6f5", fontSize: "12px" }}>
              {priority.toUpperCase()}
            </Typography>
          </>
        );
      default:
        return "";
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {handlePriorityIcon()}
      </Box>
      {isNew && (
        <Box ml="auto">
          <Box
            sx={{
              color: "#fff",
              backgroundColor: "#00cb8b",
              borderRadius: 3,
              padding: "3px 8px",
              fontSize: "12px",
            }}
          >
            New
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TodoItemHeader;
