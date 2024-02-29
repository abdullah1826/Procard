import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import ColorPicker from "react-pick-color";

const ColorPickerModal = ({
  colorModal,
  handleColorModal,
  setCardColor,
  cardColor,
}) => {
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 300,
    width: "100%",
    height: 300,
    bgcolor: "white",
    borderRadius: "8px",
    // border: '2px solid #000',
    // boxShadow: 24,
    border: "none",
    outline: "none",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",

    // p: "32px",
  };

  return (
    <div>
      <Modal
        open={colorModal}
        onClose={() => handleColorModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <ColorPicker
            color={cardColor}
            onChange={(color) => setCardColor(color.hex)}
            theme={{
              background: "lightgrey",
              inputBackground: "grey",
              borderColor: "darkgrey",
              borderRadius: "8px",
              color: "black",
              width: "300px",
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ColorPickerModal;
