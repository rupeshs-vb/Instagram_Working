import React, { useState } from "react";
import Header from "./Header";
import ImageModal from "./ImageModal";

import {
  Box,
  Card,
  Button,
  Typography,
  ImageList,
  ImageListItem,
  Container,
} from "@material-ui/core";

const tempdata = [
  "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://booleanstrings.com/wp-content/uploads/2021/10/profile-picture-circle-hd.png",
  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://booleanstrings.com/wp-content/uploads/2021/10/profile-picture-circle-hd.png",
  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://booleanstrings.com/wp-content/uploads/2021/10/profile-picture-circle-hd.png",
  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

const Home = () => {
  const [imageData, setImageData] = useState({});
  const [modalDetails, setModalDetails] = useState(false);

  const entryImage = (images) => {
    setModalDetails(true);
    setImageData(images);
  };

  return (
    <div>
      <Header />
      <ImageModal
        imageData={imageData}
        modalDetails={modalDetails}
        setModalDetails={setModalDetails}
      />
      <Card style={{ margin: "20px", display: "flex" }}>
        <Box sx={{ margin: "20px" }}>
          <img
            style={{
              width: "150px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
            alt="profile pic"
          />
        </Box>
        <Box sx={{ margin: "50px 50px", width: "100%" }}>
          <Typography variant="h5">Rupesh Sharma</Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Typography>Follower</Typography>
            <Typography style={{ marginLeft: "20%" }}>Following</Typography>
            <Typography style={{ marginLeft: "20%" }}>Post</Typography>
          </Box>
        </Box>
      </Card>

      <Card>
        <ImageList sx={{ width: 300, height: 450 }} cols={4} rowHeight={300}>
          {tempdata.map((currImage, index) => (
            <ImageListItem key={index} style={{ cursor: "pointer" }}>
              <img
                src={currImage}
                alt="images"
                loading="lazy"
                height="300px"
                width="450px"
                onClick={() => entryImage(currImage)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Card>
    </div>
  );
};

export default Home;
