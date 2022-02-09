import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
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
  const onCloseHandle = () => {
    SetPostModal(false);
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                m: 3,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
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
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                m: 2,
              }}
            >
              <TextField placeholder="Add Caption" />
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
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
