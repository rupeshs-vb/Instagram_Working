import React, { useState, useEffect } from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePost, getUserPost, updateUserPost } from "../store/user-action";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "550px",
  height: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 3,
};
const baseUrl = "http://127.0.0.1:8000";

export default function BenchModal({
  modalDetails,
  setModalDetails,
  imageData,
}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);
  const { selectedUser } = useSelector((state) => state.userDetails);
  console.log(imageData, "hello====");
  const [editpost, setEditPost] = useState(false);
  const [editpostDetails, setEditPostDetails] = useState("");
  // if (Object.keys(imageData).length != 0) {
  //   setEditPostDetails(imageData.AboutImage);
  // }
  useEffect(() => {
    setEditPostDetails(imageData.AboutImage);
  }, [imageData]);

  const onDeleteHandle = () => {
    dispatch(deletePost(imageData.id)).then((res) => {
      if (res) {
        alert(res);
        dispatch(getUserPost(user.id));
      }
    });
    setModalDetails(false);
  };

  const onCloseHandle = () => {
    setModalDetails(false);
    setEditPost(false);
  };

  const handleSave = () => {
    dispatch(
      updateUserPost(imageData.id, { AboutImage: editpostDetails })
    ).then((res) => {
      if (res) {
        alert(res);
        dispatch(getUserPost(user.id));
      }
    });
    setModalDetails(false);
    setEditPost(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalDetails}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalDetails}>
          <Box sx={style}>
            {user.id === selectedUser.id && (
              <DeleteIcon
                onClick={onDeleteHandle}
                style={{
                  color: "grey",
                  cursor: "pointer",
                  position: "absolute",
                  right: "30px",
                  top: "5px",
                }}
              />
            )}
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
            />{" "}
            <Box sx={{ mx: 1 }}>
              <img
                src={`${baseUrl}${imageData.image}`}
                alt="images"
                height="450px"
                width="510px"
              />
            </Box>
            <Typography sx={{ mx: 1, textAlign: "center" }}>
              {imageData.AboutImage}
            </Typography>
            {user.id === selectedUser.id && editpost && (
              <TextField
                value={editpostDetails}
                onChange={(e) => setEditPostDetails(e.target.value)}
              />
            )}
            {user.id === selectedUser.id && editpost && (
              <SaveIcon onClick={handleSave} />
            )}
            {user.id === selectedUser.id && (
              <EditIcon onClick={() => setEditPost(!editpost)} />
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
