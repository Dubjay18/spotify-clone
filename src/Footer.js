import { Grid, Slider } from "@material-ui/core";
import ab from "./images/whatsbg.jpeg";
import {
  PlayCircleOutline,
  PlaylistPlay,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";
import { useStateValue } from "./DataLayer";
const Footer = () => {
  const [{ discover_weekly }, dispatch] = useStateValue();
  console.log(discover_weekly?.tracks.items[0].track.album.images[0].url);
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src={discover_weekly?.tracks.items[0].track.album.images[0].url}
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>{discover_weekly?.tracks.items[0].track.name}</h4>
          <p>
            {discover_weekly?.tracks.items[0].track.artists
              .map((artist) => artist.name)
              .join(" ,")}
          </p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
