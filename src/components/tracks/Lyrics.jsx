import React, { Component, Fragment } from "react";
import axios from "axios";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  getTrack(id) {
    const url = `${process.env.REACT_APP_MUSIC_URL}track.get?commontrack_id=${id}&apikey=${process.env.REACT_APP_MUSIC_KEY}`;

    axios
      .get(`${url}`)
      .then((res) => this.setState({ track: res.data.message.body.track }))
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_MUSIC_URL}track.lyrics.get?track_id=${this.props.match.params.idTest}&apikey=${process.env.REACT_APP_MUSIC_KEY}`;
    axios
      .get(`${url}`)
      .then((res) => {
        this.setState({ lyrics: res.data.message.body.lyrics });

        return this.getTrack(this.state.lyrics.lyrics_id);
      })
      .catch((err) => console.log(err));
  }

  lyrics = (track, lyrics) => (
    <Fragment>
      <Link to="/" className="btn btn-dark btn-sm mb-4">
        Go Back
      </Link>
      <div className="card">
        <h5 className="card-header">
          {track.track_name} by {""}
          <span className="text-secondary">{track.artist_name}</span>
        </h5>
        <div className="card-body">
          <p className="card-text">{lyrics.lyrics_body}</p>
        </div>
      </div>

      <ul className="list-group mt-3">
        <li className="list-group-item">
          <strong>Album ID</strong>: {track.album_id}
        </li>
        <li className="list-group-item">
          <strong>Song Genre</strong>:{" "}
          {
            track.primary_genres.music_genre_list[0].music_genre
              .music_genre_name
          }
        </li>
        <li className="list-group-item">
          <strong>Explicit Words</strong>: {""}
          {track.explicit ? "Yes" : "No"}
        </li>
        <li className="list-group-item">
          <strong>Release Date</strong>:{" "}
          <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
        </li>
      </ul>
    </Fragment>
  );

  render() {
    const { track, lyrics } = this.state;

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return this.lyrics(track, lyrics);
    }
  }
}

export default Lyrics;
