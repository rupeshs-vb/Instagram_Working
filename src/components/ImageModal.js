import React from "react";
import { Backdrop, Box, Modal, Fade, Typography } from "@mui/material";
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
export default function BenchModal({
  modalDetails,
  setModalDetails,
  imageData,
}) {
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
              <img src={imageData} alt="images" height="500px" width="680px" />
            </Box>
            <Typography sx={{ mx: 1 }}>Caption</Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
