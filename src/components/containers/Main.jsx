import React, { Component } from "react";
import styles from "./main.style";
import Container from 'react-bootstrap/Container';
import DestinationForm from "../layouts/DestinationForm";
import Toaster from "../reusable/Toaster";

let containerStyle = {
  textAlign: "center",
  paddingTop: "1em",
};

export class Main extends Component {
  render() {
    return (
      <>
        <Container style={styles.appContainer}>
          <div style={containerStyle}>
            <DestinationForm />
            <Toaster />
          </div>
        </Container>
      </>
    );
  }
}

export default Main;
