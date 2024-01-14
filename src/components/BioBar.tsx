import "./styles/BioBar.css";
import { Col, Row, Card, Container } from "react-bootstrap";

interface BioBarProps {
  charName: string;
  charRace: string;
  charClass: string;
  charLevel: string;
  charBackground: string;
  setCharName: (val: string) => void;
  setCharRace: (val: string) => void;
  setCharClass: (val: string) => void;
  setCharLevel: (val: string) => void;
  setCharBackground: (val: string) => void;
  editModeEnabled: boolean;
}

const BioBar = ({
  charName,
  charRace,
  charClass,
  charLevel,
  charBackground,
  setCharName,
  setCharRace,
  setCharClass,
  setCharLevel,
  setCharBackground,
  editModeEnabled,
}: BioBarProps) => {
  return (
    <Container>
      <Card className="character-sheet-cards">
        {editModeEnabled ? (
          <>
            <Row>
              <Col xs={12}>
                <input
                  type="text"
                  className="form-control edit-mode-inputs"
                  placeholder="Character Name"
                  onChange={(event) => setCharName(event.target.value)}
                  defaultValue={charName}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <input
                  type="text"
                  className="form-control edit-mode-inputs"
                  placeholder="Character Class"
                  onChange={(event) => setCharClass(event.target.value)}
                  defaultValue={charClass}
                ></input>
              </Col>
              <Col xs={6}>
                <input
                  type="text"
                  className="form-control edit-mode-inputs"
                  placeholder="Character Level"
                  onChange={(event) => setCharLevel(event.target.value)}
                  defaultValue={charLevel}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <input
                  type="text"
                  className="form-control edit-mode-inputs"
                  placeholder="Character Race"
                  readOnly={!editModeEnabled}
                  onChange={(event) => setCharRace(event.target.value)}
                  defaultValue={charRace}
                ></input>
              </Col>
              <Col xs={6}>
                <input
                  type="text"
                  className="form-control edit-mode-inputs"
                  placeholder="Character Background"
                  readOnly={!editModeEnabled}
                  onChange={(event) => setCharBackground(event.target.value)}
                  defaultValue={charBackground}
                ></input>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row className="center-name">
              <Col xs={12}>
                <h1>
                  <b>{charName || "Your Name Here"}</b>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <h4>
                  {"Class: "}
                  <b>{charClass}</b>
                </h4>
              </Col>
              <Col xs={6}>
                <h4>
                  {"Level: "}
                  <b>{charLevel}</b>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <h4>
                  {"Race: "}
                  <b>{charRace}</b>
                </h4>
              </Col>
              <Col xs={6}>
                <h4>
                  {"Background: "}
                  <b>{charBackground}</b>
                </h4>
              </Col>
            </Row>
          </>
        )}
      </Card>
    </Container>
  );
};

export default BioBar;
