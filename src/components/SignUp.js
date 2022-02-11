import React, { useState } from "react";
import { Container, Box, TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/user-action";

const initialstate = {
  SignUpDetails: {
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    profileImage: null,
    // confirmpassword: "",
  },
};

const SignUp = () => {
  const [state, setState] = useState(initialstate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    SignUpDetails: {
      name,
      username,
      email,
      phoneNumber,
      password,
      profileImage,
      // confirmpassword,
    },
  } = state;

  const signUpDetails = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", state.SignUpDetails.name);
    formData.append("username", state.SignUpDetails.username);
    formData.append("email", state.SignUpDetails.email);
    formData.append("phoneNumber", state.SignUpDetails.phoneNumber);
    formData.append("profileImage", state.SignUpDetails.profileImage);
    formData.append("password", state.SignUpDetails.password);

    console.log(formData, "-----------------------------");

    dispatch(registerUser(formData)).then((res) => {
      if (res) {
        alert(res);
        navigate("/login");
      }
    });
    console.log(state.SignUpDetails);
    setState(initialstate);
  };

  const handleDetails = ({ target }) => {
    setState({
      ...state,
      SignUpDetails: {
        ...state.SignUpDetails,
        [target.name]: target.value,
      },
    });
  };

  const handleEventImage = (event) => {
    state.SignUpDetails.profileImage = event.target.files[0];
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
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
          <Box component="form" onSubmit={signUpDetails} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              variant="outlined"
              placeholder="Enter Your Name"
              value={name}
              onChange={handleDetails}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              variant="outlined"
              placeholder="Enter User Name"
              value={username}
              onChange={handleDetails}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              variant="outlined"
              placeholder="Enter Email"
              value={email}
              onChange={handleDetails}
            />
            <TextField
              type="number"
              margin="normal"
              required
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              variant="outlined"
              placeholder="Enter Contact No"
              value={phoneNumber}
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
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="confirmpassword"
              name="confirmpassword"
              variant="outlined"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={handleDetails}
            /> */}
            <input
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg"
              onChange={handleEventImage}
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;
