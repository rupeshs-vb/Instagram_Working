import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  SvgIcon,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
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
        <Box sx={{ margin: "5px 20px" }} onClick={() => alert("Profile")}>
          Name
        </Box>
        <Box sx={{ margin: "5px 0px" }} onClick={() => alert("Logout")}>
          Logout
        </Box>
        <Box sx={{ margin: "5px 20px" }} onClick={() => alert("Post")}>
          Post
        </Box>
      </Box>
    </>
  );
};

export default Header;
