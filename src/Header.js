import { Avatar, IconButton } from "@material-ui/core";
import { Dehaze, Search } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "./DataLayer";
import "./Header.css";
const Header = () => {
  const [{ user, ham }, dispatch] = useStateValue();
  const sideMenu = () => {
    dispatch({
      type: "SET_HAM",
      ham: !ham,
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input type="text" placeholder="Search for Artists, Songs  " />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="user" />
        <h4>{user?.display_name}</h4>
        <div className="mobile">
          <IconButton onClick={sideMenu}>
            <Dehaze className="mobile" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
