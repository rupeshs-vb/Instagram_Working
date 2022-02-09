import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  SvgIcon,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleLogut = () => {
    navigate("/login");
  };

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
      </Box>
    </>
  );
};

export default Header;
