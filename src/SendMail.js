import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New message</h3>
        <CloseIcon className="sendMail__close" />
      </div>

      <form action="">
        <input placeholder="To" type="text" />
        <input placeholder="Subject" type="text" />
        <input
          placeholder="Message..."
          className="sendMail__message"
          type="text"
        />

        <div className="sendMail__options">
          <Button className="sendMail__send">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
