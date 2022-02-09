import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  SvgIcon,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddPost from "./AddPost";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [postModal, SetPostModal] = useState(false);

  const navigate = useNavigate();

  const handleLogut = () => {
    navigate("/login");
  };

  const addNewPost = () => {
    SetPostModal(true);
  };

  return (
    <>
      <AddPost postModal={postModal} SetPostModal={SetPostModal} />

      <Box sx={{ display: "flex", mt: 2 }}>
        <Box sx={{ margin: "0px 20px" }}>
          <Typography variant="h4">INSTAGRAM</Typography>
        </Box>

        <TextField
          placeholder="Search ....."
          fullWidth
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{ margin: "5px 20px" }}
          style={{ cursor: "pointer" }}
          onClick={() => alert("Profile")}
        >
          Name
        </Box>
        <Box
          sx={{ margin: "5px 0px" }}
          style={{ cursor: "pointer" }}
          onClick={handleLogut}
        >
          Logout
        </Box>
        <Box
          sx={{ margin: "5px 20px" }}
          style={{ cursor: "pointer" }}
          onClick={addNewPost}
        >
          <AddCircleOutlineIcon />
        </Box>
      </Box>
    </>
  );
};

export default Header;
