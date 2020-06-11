import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

export class Search extends Component {
  state = {
    trackTitle: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchSong = (dispatch, e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_MUSIC_URL}track.search?q_artist=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MUSIC_KEY}`;
    axios
      .get(`${url}`)
      .then((res) => {
        this.setState({ track_list: res.data.message.body.track_list });
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list,
        });
        this.setState({ trackTitle: "" });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music">Search For A Song</i>
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form
                className="form-group"
                onSubmit={this.searchSong.bind(this, dispatch)}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="trackTitle"
                    id="trackTitle"
                    className="form-control form-control-lg"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mb-5"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
