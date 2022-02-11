import React, { useState } from "react";
import { Container, Box, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUsers } from "../store/user-action";

const initialstate = {
  loginDetails: {
    username: "",
    password: "",
  },
};

const Login = () => {
  const [state, setState] = useState(initialstate);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    loginDetails: { username, password },
  } = state;

  const LoginDetails = (event) => {
    event.preventDefault();
    console.log(state.loginDetails);
    dispatch(LoginUsers(state.loginDetails)).then((res) => {
      if (res) {
        navigate("/home");
      } else {
        alert("bad credentials");
      }
    });
  };

  const handleDetails = ({ target }) => {
    setState({
      ...state,
      loginDetails: {
        ...state.loginDetails,
        [target.name]: target.value,
      },
    });
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "100px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            alt="instagram-logo"
          />
          <Box component="form" onSubmit={LoginDetails} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              variant="outlined"
              placeholder="User Name"
              value={username}
              onChange={handleDetails}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              variant="outlined"
              value={password}
              onChange={handleDetails}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
          Don't have an account?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
