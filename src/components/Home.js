import React from "react";
import Header from "./Header";
import {
  Container,
  Box,
  Card,
  Button,
  Typography,
  TextField,
  SvgIcon,
  InputAdornment,
} from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Card style={{ margin: "20px" }}>
          <Box sx={{ margin: "20px" }}>
            <img
              style={{
                width: "100px",
              }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
              alt="profile pic"
            />
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
