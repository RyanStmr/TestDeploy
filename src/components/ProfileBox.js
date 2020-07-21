import SettingsIcon from "@material-ui/icons/Settings";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

import InfoIcon from "@material-ui/icons/Info";

class ProfileBox extends Component {
  state = {
    submitted: false,
  };
  render() {
    return (
      <div style={{ marginLeft: "auto" }}>
        {!this.state.submitted ? (
          <div>
            <Button variant="contained" style={{ margin: "5px" }}>
              {" "}
              <SettingsIcon></SettingsIcon>
            </Button>
            <Button variant="contained" style={{ margin: "5px" }}>
              {" "}
              <InfoIcon></InfoIcon>
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#75c974", margin: "10px" }}
              onClick={() => {
                this.props.setInboxResult();
                this.setState({ submitted: true });
                alert("submitted: Click Continue to proceed");
              }}
            >
              {" "}
              <ExitToAppIcon></ExitToAppIcon>Submit
            </Button>
          </div>
        ) : (
          <div>
            <Link to="/Survey">
              <Button
                variant="contained"
                style={{ backgroundColor: "#75c974", margin: "10px" }}
              >
                {" "}
                <ExitToAppIcon></ExitToAppIcon>Continue
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileBox;
