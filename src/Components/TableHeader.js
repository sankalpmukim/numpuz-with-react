import React, { Component } from "react";

export default class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th
            style={{
              width: "4rem",
            }}
          >
            Image
          </th>
          <th>Username</th>
          <th>Best Score</th>
        </tr>
      </thead>
    );
  }
}
