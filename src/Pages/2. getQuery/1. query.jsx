import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const Profile = () => {
  const [searchQuery] = useSearchParams();
  const userName = searchQuery.get("user");
  const color = searchQuery.get("color");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onConfirm = () => {
    handleClose(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog onClose={handleClose} open={handleClickOpen}>
        <DialogTitle>Alert</DialogTitle>
        <div>
          {userName && color ? (
            <>
              <p>
                Hello {userName}, Your favorite color is
                <strong style={{ color }}>{color}</strong>.
              </p>
              <button onClick={onConfirm}>Confirm</button>
            </>
          ) : (
            <p>Hello user, what is your favorite color?</p>
          )}
        </div>
      </Dialog>

      {userName && color ? (
        <p>
          Hello {userName}, Your favorite color is{" "}
          <strong style={{ color }}>{color}</strong>.
        </p>
      ) : (
        <p>Hello user, what is your favorite color?</p>
      )}
    </div>
  );
};

export default Profile;
