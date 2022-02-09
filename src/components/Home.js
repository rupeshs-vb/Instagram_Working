import React, { useState } from "react";
import Header from "./Header";
import ImageModal from "./ImageModal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddPost from "./AddPost";

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
  "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/koqopb9ejoxrzg2rfdkk.jpg",
  "https://iso.500px.com/wp-content/uploads/2015/10/max_cover.jpeg",
  "https://images.unsplash.com/photo-1587381419916-78fc843a36f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTc0ODE5Mnx8ZW58MHx8fHw%3D&w=1000&q=80",
  "https://cdn.naturettl.com/wp-content/uploads/2020/02/05200812/12-best-landscape-photography-locations-in-canada-800x533.jpg?p=18252",
  "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/koqopb9ejoxrzg2rfdkk.jpg",
  "https://iso.500px.com/wp-content/uploads/2015/10/max_cover.jpeg",
  "https://images.unsplash.com/photo-1587381419916-78fc843a36f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTc0ODE5Mnx8ZW58MHx8fHw%3D&w=1000&q=80",
  "https://cdn.naturettl.com/wp-content/uploads/2020/02/05200812/12-best-landscape-photography-locations-in-canada-800x533.jpg?p=18252",
  "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/koqopb9ejoxrzg2rfdkk.jpg",
  "https://iso.500px.com/wp-content/uploads/2015/10/max_cover.jpeg",
  "https://images.unsplash.com/photo-1587381419916-78fc843a36f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTc0ODE5Mnx8ZW58MHx8fHw%3D&w=1000&q=80",
  "https://cdn.naturettl.com/wp-content/uploads/2020/02/05200812/12-best-landscape-photography-locations-in-canada-800x533.jpg?p=18252",
];

const Home = () => {
  const [imageData, setImageData] = useState({});
  const [modalDetails, setModalDetails] = useState(false);

  const [postModal, SetPostModal] = useState(false);

  const addNewPost = () => {
    SetPostModal(true);
  };

  const entryImage = (images) => {
    setModalDetails(true);
    setImageData(images);
  };

  return (
    <div>
      <Header />
      <AddPost postModal={postModal} SetPostModal={SetPostModal} />
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
            <Typography style={{ marginLeft: "20%" }}>Posts</Typography>
            <Typography style={{ marginLeft: "20%" }}>Add Post</Typography>
            <Box
              sx={{ margin: "0px 10px" }}
              style={{ cursor: "pointer" }}
              onClick={addNewPost}
            >
              <AddCircleOutlineIcon />
            </Box>
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
