import React from "react";
import "./index.css";

class Square extends React.Component {
  render() {
    return (
      <div className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
