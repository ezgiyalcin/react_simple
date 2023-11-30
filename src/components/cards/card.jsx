import "./card.css";
import Modal from "../modals/modal";
import React, { useState } from "react";

export default function Card({ personInfo }) {
  const { photo, first_name, last_name, email, gender } = personInfo;
  const cardStyle = {
    backgroundColor:
      gender === "Female" ? "fuchsia" : gender === "Male" ? "blue" : "green",
  };
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div
      className="card"
      style={cardStyle}
      onClick={() => {
        openModal();
      }}
    >
      <img src={photo} alt="" />
      <div>
        <h5>{first_name + " " + last_name}</h5>
        <p>{email}</p>
        <p>{gender}</p>
      </div>
      {showModal === true && (
        <Modal
          setShowModal={setShowModal}
          firstName={first_name}
          lastName={last_name}
        />
      )}
    </div>
  );
}
