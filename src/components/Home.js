import React, { useEffect, useState } from "react";
import Header from "./Header";
import ImageModal from "./ImageModal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddPost from "./AddPost";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserPost, AddFollower, SelectedUser } from "../store/user-action";

import {
  Box,
  Card,
  Button,
  Typography,
  ImageList,
  ImageListItem,
} from "@material-ui/core";

// const testing = async () => {
//   const
//   const test = {
//     username: "rupesh12321",
//     password: "sasasas@123",
//   };
//   const data = await axios.post("http://127.0.0.1:8000/api/login/", test);
//   console.log(data);
// };

// testing();
const baseUrl = "http://127.0.0.1:8000";

const Home = () => {
  const [imageData, setImageData] = useState({});
  const [modalDetails, setModalDetails] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);
  const { post } = useSelector((state) => state.userDetails);
  const { selectedUser } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(getUserPost(selectedUser.id));
  }, [selectedUser.id]);

  const [postModal, SetPostModal] = useState(false);

  const addNewPost = () => {
    SetPostModal(true);
  };

  const entryImage = (images) => {
    setModalDetails(true);
    setImageData(images);
  };

  const handleFollow = () => {
    dispatch(AddFollower(user.id, selectedUser.id)).then((res) => {
      if (res) {
        dispatch(getUserPost(user.id));
        dispatch(SelectedUser(user.id));
      }
    });
  };

  console.log(selectedUser, "sasasssssssssssssssssssss");

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
              borderRadius: "50%",
            }}
            // src="file:///D:\Instagram%20Clone\django-instagram-apis\images\avatar.svg"
            src={
              selectedUser.profileImage &&
              `${baseUrl}${selectedUser.profileImage}`
            }
            alt="profile pic"
          />
        </Box>
        <Box sx={{ margin: "50px 50px", width: "100%" }}>
          <Typography variant="h5">
            {selectedUser.username || "---------"}
          </Typography>
          {selectedUser.id !== user.id && (
            <Box sx={{ margin: "0px 10px" }} style={{ cursor: "pointer" }}>
              <Button
                onClick={handleFollow}
                style={{ backgroundColor: "pink", color: "white" }}
              >
                Follow
              </Button>
            </Box>
          )}
          <Box sx={{ display: "flex", mt: 2 }}>
            <Typography>
              Follower:
              {selectedUser.followers ? selectedUser.followers.length : "0"}
            </Typography>

            <Typography style={{ marginLeft: "20%" }}>
              Following:{" "}
              {selectedUser.following ? selectedUser.following.length : "0"}
            </Typography>
            <Typography style={{ marginLeft: "20%" }}>
              Posts:{post ? post.length : "0"}
            </Typography>
            {selectedUser.id === user.id && (
              <Typography style={{ marginLeft: "20%" }}>Add Post</Typography>
            )}
            {selectedUser.id === user.id && (
              <Box
                sx={{ margin: "0px 10px" }}
                style={{ cursor: "pointer" }}
                onClick={addNewPost}
              >
                <AddCircleOutlineIcon />
              </Box>
            )}
          </Box>
        </Box>
      </Card>

      <Card>
        <ImageList sx={{ width: 300, height: 250 }} cols={4} rowHeight={250}>
          {post &&
            post.map((currImage, index) => (
              <ImageListItem key={index} style={{ cursor: "pointer" }}>
                <img
                  src={`${baseUrl}${currImage.image}`}
                  alt={currImage.AboutImage}
                  loading="lazy"
                  height="250px"
                  width="300px"
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
