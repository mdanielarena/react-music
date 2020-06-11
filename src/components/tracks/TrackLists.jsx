import React from "react";
import { Link } from "react-router-dom";

const TrackLists = (props) => {
  const { track_list } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track_list.artist_name}</h5>
          <p className="card-tex">
            <strong>
              <i className="fas fa-play"></i>Track
            </strong>
            : {track_list.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-dis"></i>Album
            </strong>
            :{track_list.album_name}
          </p>
          <Link
            to={`lyrics/track/${track_list.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-righ"></i>Views Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackLists;
