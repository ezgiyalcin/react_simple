import { useState } from "react";
import Button from "../customBtn/customBtn";
import "./header.css";
import InfoBox from "../infoBox/infoBox";
import Modal from "../modals/modal";

const Header = ({ activeUser, setactiveUser }) => {
  const [loginedBtn, setLoginedBtn] = useState(null);
  const navbarNames = ["Home Page", "About Us", "Products", "Contact"];
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="header">
      <div className="header-logo">Logo</div>
      <nav className="navbar">
        {navbarNames.map((navbarName) => (
          <a className="navMenu">{navbarName}</a>
        ))}
      </nav>
      <div className="header-right">
        {loginedBtn ? (
          <Button
            onClick={() => {
              if (loginedBtn === "User") {
                setactiveUser(activeUser - 1);
              }

              setLoginedBtn(null);
            }}
            customBtn={`Log Out As ${loginedBtn}`}
            btnColor={"red"}
          />
        ) : (
          <>
            <Button
              onClick={() => {
                setactiveUser(activeUser + 1);
                setLoginedBtn("User");
              }}
              customBtn={"User Login"}
              btnColor={"cadetblue"}
            />
            <Button
              onClick={() => {
                setLoginedBtn("Admin");
              }}
              customBtn={"Admin Login"}
              btnColor={"orange"}
            />
            <Button customBtn={"New User"} onClick={() => setShowModal(true)} />
          </>
        )}
        {loginedBtn === "Admin" && (
          <InfoBox infoBoxText={"Active Users:"} infoBoxValue={activeUser} />
        )}
        {loginedBtn === "User" && (
          <InfoBox
            infoBoxText={"Active User with You:"}
            infoBoxValue={activeUser}
          />
        )}
      </div>
      {showModal === true && <Modal setShowModal={setShowModal} />}
    </header>
  );
};

export default Header;
