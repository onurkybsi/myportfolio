import React, { Component } from "react";
import "./style.css";
import pp from "./pp.jpg";
import { Row } from "../Grid";

export default class Sidebar extends Component {
  render() {
    return (
      <div class="sidenav">
        <img src={pp} />
        <Row>Opt1</Row>
        <Row>Opt2</Row>
      </div>
    );
  }
}
