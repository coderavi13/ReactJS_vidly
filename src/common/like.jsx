import React, { Component } from "react";
class Like extends Component {
  state = {
    selected: true
  };
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
      />
    );

    // return <i className="fa fa-heart" />
  }
}

export default Like;
