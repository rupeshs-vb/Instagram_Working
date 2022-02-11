import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost, getUserPost } from "../store/user-action";

import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "300px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 3,
};

const Input = styled("input")({
  display: "none",
});

export default function BenchModal({ postModal, SetPostModal }) {
  const { user } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  const initialstate = {
    postDetails: {
      image: null,
      AboutImage: "",
      user: user.id || "--",
    },
  };
  const [state, setState] = useState(initialstate);

  const {
    postDetails: { image, AboutImage },
  } = state;

  const onCloseHandle = () => {
    SetPostModal(false);
  };

  const addPostDetails = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", state.postDetails.image);
    formData.append("user", state.postDetails.user);
    formData.append("AboutImage", state.postDetails.AboutImage);

    dispatch(addNewPost(formData)).then((res) => {
      if (res) {
        alert(res);
        dispatch(getUserPost(user.id));
      }
    });
    SetPostModal(false);
  };

  const handleEventValue = ({ target }) => {
    setState({
      ...state,
      postDetails: {
        ...state.postDetails,
        [target.name]: target.value,
      },
    });
  };

  const handleEventImage = (event) => {
    console.log(event.target.files[0]);
    state.postDetails.image = event.target.files[0];
    console.log(state);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={postModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={postModal}>
          <Box sx={style}>
            <CloseIcon
              variant="contained"
              onClick={onCloseHandle}
              style={{
                color: "black",
                cursor: "pointer",
                position: "absolute",
                right: "5px",
                top: "5px",
              }}
            />
            <form onSubmit={addPostDetails}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  m: 3,
                }}
              >
                {/* <Stack direction="row" alignItems="center" spacing={2}>
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <Button variant="contained" component="span">
                      Upload an Image
                    </Button>
                  </label>
                  <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </Stack> */}
                {/* <TextField
                  type="file"
                  name="image"
                  value={image}
                  accept="image/*"
                  onChange={handleEventValue}
                /> */}
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/png, image/jpeg"
                  onChange={handleEventImage}
                  required
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  m: 2,
                }}
              >
                <TextField
                  placeholder="Add Caption"
                  name="AboutImage"
                  value={AboutImage}
                  onChange={handleEventValue}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  textAlign: "center",
                  m: 1,
                }}
              >
                <Button
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    left: "110px",
                    top: "180px",
                  }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
