export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  ham: false,
  playlist_Id: "37i9dQZEVXcPBSIXOl8BHe",
  isPlaying: false,
  currentTrackId: "",
  // Remove later
  // token:
  //   "BQClXUGp9dkj9QXNGS95wtzR08fwzFKAiooOXzFB0RRVl_ctcwwPaYfGqjfA_Yl7pqxg30fQxKhzmWG3GUlvEGEJziilYCOCQ4NUhLS8yJ-OH1WyiYhFer6egEOm1nfSkuVHoIGR5HjSR1m_JoRU9aWuIly0rMUQK1GmbYsl3JKWOGlG",
};
export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
  SET_HAM: "SET_HAM",
  SET_PLAYLISTID: "SET_PLAYLISTID",
  SET_ISPLAYING: "SET_ISPLAYING",
  SET_CURRENTTRACKID: "SET_CURRENTTRACKID",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_CURRENTTRACKID:
      return {
        ...state,
        currentTrackId: action.currentTrackId,
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.SET_ISPLAYING:
      return {
        ...state,
        isPlaying: action.isPlaying,
      };
    case actionTypes.SET_PLAYLISTID:
      return {
        ...state,
        playlist_Id: action.playlist_Id,
      };
    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case actionTypes.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case actionTypes.SET_HAM:
      return {
        ...state,
        ham: action.ham,
      };

    default:
      return state;
  }
};

export default reducer;
