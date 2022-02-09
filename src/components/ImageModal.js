import React from "react";
import { Backdrop, Box, Modal, Fade, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "550px",
  height: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 3,
};
export default function BenchModal({
  modalDetails,
  setModalDetails,
  imageData,
}) {
  const onDeleteHandle = () => {
    setModalDetails(false);
  };

  const onCloseHandle = () => {
    setModalDetails(false);
  };

  console.log(imageData);

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
            <DeleteIcon
              onClick={onDeleteHandle}
              style={{
                color: "grey",
                cursor: "pointer",
                position: "absolute",
                right: "30px",
                top: "5px",
              }}
            />{" "}
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
              <img src={imageData} alt="images" height="450px" width="510px" />
            </Box>
            <Typography sx={{ mx: 1, textAlign: "center" }}>Caption</Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
