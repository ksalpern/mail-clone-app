import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New message</h3>
        <CloseIcon className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">To is Required!</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && <p className="sendMail__error">Subject is Required!</p>}

        <input
          name="message"
          placeholder="Message..."
          className="sendMail__message"
          type="text"
          ref={register({ required: true })}
        />
        {errors.message && <p className="sendMail__error">Message is Required!</p>}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            type="submit"
            color="primary"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
