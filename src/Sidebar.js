import { Home, LibraryMusic, Search } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "./DataLayer";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
const Sidebar = () => {
  const [{ playlists, ham }, dispatch] = useStateValue();
  const Renderplay = (e) => {
    dispatch({
      type: "SET_PLAYLISTID",
      playlist_Id: e,
    });
  };

  return (
    <div className="sidebar" style={ham ? { left: "0" } : { left: "-100%" }}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="sidebar__logo"
      />
      <SidebarOptions title={"Home"} Icon={Home} />
      <SidebarOptions title={"Search"} Icon={Search} />
      <SidebarOptions title={"Your Library"} Icon={LibraryMusic} />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return (
          <div
            className="sidebarOption"
            onClick={() => Renderplay(playlist.id)}
          >
            <p>{playlist.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
