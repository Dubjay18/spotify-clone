import React, { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";
const Player = ({ spotify }) => {
  const [ham, setHam] = useState();
  return (
    <div>
      <div className="player">
        <div className="player__body">
          <Sidebar ham={ham} setHam={setHam} />
          <Body ham={ham} setHam={setHam} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Player;
