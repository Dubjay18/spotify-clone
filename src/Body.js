import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import "./Body.css";
import { useStateValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyN = new SpotifyWebApi();
const Body = ({ spotify }) => {
  const [{ discover_weekly, playlist_Id }, dispatch] = useStateValue();
  useEffect(() => {
    spotifyN.getPlaylist(playlist_Id).then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );
  }, [playlist_Id, dispatch]);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;
