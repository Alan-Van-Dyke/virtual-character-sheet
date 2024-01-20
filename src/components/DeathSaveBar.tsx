import { useState } from "react";
import "../style/DeathSaveBar.css";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

const DeathSaveBar = () => {
  return (
    <Card className="character-sheet-cards">
      <h5 className="text-center">Death Saves</h5>
      <Container>
        <Row className="death-save-row">
          <span>Successes </span>
          <form className="death-save-form">
            <input
              type="checkbox"
              className="form-check-input death-save-check-pos"
            />
            <input
              type="checkbox"
              className="form-check-input death-save-check-pos"
            />
            <input
              type="checkbox"
              className="form-check-input death-save-check-pos"
            />
          </form>
        </Row>
        <hr className="check-divider"></hr>
        <Row className="death-save-row">
          <span>Failures </span>
          <form className="death-save-form">
            <input
              type="checkbox"
              className="form-check-input death-save-check-neg"
            />
            <input
              type="checkbox"
              className="form-check-input death-save-check-neg"
            />
            <input
              type="checkbox"
              className="form-check-input death-save-check-neg"
            />
          </form>
        </Row>
        <Row></Row>
      </Container>
    </Card>
  );
};

export default DeathSaveBar;
