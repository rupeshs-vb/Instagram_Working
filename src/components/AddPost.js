import React from "react";
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
  width: "700px",
  height: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 3,
};
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
              <Typography sx={{ m: 1 }}>Upload Post:</Typography>
              <TextField size="small" placeholder="Upload Picture" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                m: 3,
              }}
            >
              <Typography sx={{ m: 1 }}>About:</Typography>
              <TextField placeholder="Add Caption" />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
