import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
require("dotenv").config();

export default function Contact() {
  //for modal message after email is successfully sent
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SEVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            handleShow();
          }
        },
        (error) => {
          console.log(error.text);
          alert(
            "There is an error to send message. Please use the contact information after the form!"
          );
        }
      );
  }

  return (
    <div className="container-md">
      <div className="row mx-0">
        <div className="col-12 col-md-8 border bg-white py-4">
          <div className="page-header border-bottom">
            <h1 className="h1 text-info">Contact</h1>
          </div>
          <div className="row mt-3">
            <form className="col text-muted" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                  placeholder="John Smith"
                  name="from_name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="example@google.com"
                  name="reply_to"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-info">
                Submit
              </button>
            </form>
          </div>
          <div className="row mt-3">
            <div className="col text-muted">
              <p>
                <FontAwesomeIcon icon="envelope" />: angelina890308@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon="mobile-alt" />: 607-793-7301
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="text-info bg-light">
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent successfully!</Modal.Body>
      </Modal>
    </div>
  );
}
