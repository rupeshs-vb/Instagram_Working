import React, { useState, useEffect } from "react";
import { Box, Typography, TextField } from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { SearchUser, SelectedUser } from "../store/user-action";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const { searchUser } = useSelector((state) => state.userDetails);
  const [checkId, setCheckId] = useState(0);
  const { user } = useSelector((state) => state.userDetails);
  const { selectedUser } = useSelector((state) => state.userDetails);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/login");
  };

  const handleUser = () => {
    dispatch(SelectedUser(user.id));
  };

  useEffect(() => {
    dispatch(SearchUser(searchValue));
  }, [searchValue]);

  useEffect(() => {
    dispatch(SelectedUser(checkId));
  }, [checkId]);

  const handleSearchField = (event) => {
    if (event) {
      setSearchValue(event.target.value);
      setOpen(false);
      if (event.target.value && event.target.value.length > 2) {
        setOpen(true);
      }
    }
  };
  const handleOnClick = (event, value) => {
    if (value) {
      setCheckId(value.id);
      setOpen(false);
    }
    setSearchValue("");
  };

  return (
    <>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Box sx={{ margin: "0px 20px" }}>
          <Typography variant="h4">INSTAGRAM</Typography>
        </Box>

        {/* <TextField
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
        /> */}
        <Autocomplete
          size="small"
          onBlur={() => {
            setSearchValue("");
            setOpen(false);
          }}
          onInputChange={handleSearchField}
          getOptionLabel={(option) => option.username}
          onChange={handleOnClick}
          options={searchUser}
          open={open}
          style={{ width: "100%" }}
          // inputValue={
          //   userAccount.employees ? userAccount.employees.empName : username
          // }
          renderInput={(params) => (
            <TextField
              {...params}
              required
              id="username"
              name="username"
              // value={
              //   userAccount.employees ? userAccount.employees.empName : username
              // }
              placeholder="search..."
            />
          )}
        />

        <Box
          sx={{ margin: "5px 20px" }}
          style={{ cursor: "pointer" }}
          onClick={handleUser}
        >
          {user.username}
          {/* <img src={} alt="" /> */}
        </Box>
        <Box
          sx={{ margin: "5px 20px" }}
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
