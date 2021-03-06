import React, { Component, Fragment } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";
import TrackLists from "../tracks/TrackLists";

export class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map((item) => (
                    <TrackLists
                      key={item.track.track_id}
                      track_list={item.track}
                    />
                  ))}
                </div>
              </Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
