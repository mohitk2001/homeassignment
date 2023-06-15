import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../Pages/Home";
import { axiosInstance } from "../api/axiosInstance";
import Spinner from "@atlaskit/spinner";
// This code is for styling the pop up box, which will be shown to user when they click to delet project
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PopupAlert({ projectName, projectId, setProjects }) {
  const [isDeleted, setisDeleted] = useState(true);
  // Open state will check whether the pop up (Modal) has opened
  const [open, setOpen] = React.useState(false);
  // handleOpen method will be responsible to open the pop up (Modal)
  const handleOpen = () => setOpen(true);
  // handleOpen method will be responsible to close the pop up (Modal)
  const handleClose = () => setOpen(false);

  // handleDelete function will handle the user action, when user click on delete button to delete the project
  const handleDelete = () => {
    setisDeleted(false)

    // This will make a api call and tell the backend api to delete the project
    axiosInstance
      .get(`/deleteProject/${projectId}`)
      .then((res) => {
        setOpen(false);
        setisDeleted(true);
        axiosInstance
          .get("/getallprojects")
          .then((res) => {
            setProjects(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button onClick={handleOpen} color="warning" variant="contained">
        Delete
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {isDeleted !== true ? (
          <Spinner interactionName="load" />
        ) : (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              This action will delete "{projectName}" project
            </Typography>
            <Button
              color="primary"
              variant="contained"
              className="modalButtons"
              onClick={handleDelete}
            >
              Ok
            </Button>
            <Button
              color="primary"
              variant="contained"
              className="modalButtons"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        )}
      </Modal>
    </div>
  );
}
