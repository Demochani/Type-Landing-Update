import React from "react";
import "../../styles/styles.css";


const NavBar: React.FC = () => {
  return (
    <div className="navbar-container">
        <div>
          <img src="https://seeklogo.com/images/W/Wu-Tang_Clan-logo-9DB1626D69-seeklogo.com.png" />
        </div>
      <p>RZA</p>
      <p>Method Man</p>
      <p>Diseases</p>
      <p>Capadonna</p>
      <p>Masta</p>
    </div>
  );
};

export default NavBar;