import Button from "../customBtn/customBtn";
import "./modal.css";
import React, { useState } from "react";

const Modal = ({ setShowModal, firstName, lastName }) => {
  const [inputFirstName, setInputFirstName] = useState(firstName);
  const [inputLastName, setInputLastName] = useState(lastName);

  const handleSave = () => {
    // Handle save logic here if needed
    // For now, just close the modal
    setShowModal(false);
  };

  return (
    <div className="modal-wrapper" onClick={() => setShowModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={inputFirstName}
            onChange={(e) => setInputFirstName(e.target.value)}
          />
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            value={inputLastName}
            onChange={(e) => setInputLastName(e.target.value)}
          />
          <Button customBtn={"Save"} onClick={handleSave} btnColor={"green"} />
          <Button customBtn={"Close"} onClick={() => setShowModal(false)} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
