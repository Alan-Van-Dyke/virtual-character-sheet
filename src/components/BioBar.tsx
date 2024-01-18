import "./styles/BioBar.css";
import { Col, Row, Card, Container, Form } from "react-bootstrap";

interface BioBarProps {
  charName: string;
  charRace: string;
  charClass: string;
  charLevel: string;
  charBackground: string;
  profBonus: number;
  inspiration: string;
  setCharName: (val: string) => void;
  setCharRace: (val: string) => void;
  setCharClass: (val: string) => void;
  setCharLevel: (val: string) => void;
  setCharBackground: (val: string) => void;
  setProfBonus: (val: number) => void;
  setInspiration: (val: string) => void;
  editModeEnabled: boolean;
}

const BioBar = ({
  charName,
  charRace,
  charClass,
  charLevel,
  charBackground,
  profBonus,
  inspiration,
  setCharName,
  setCharRace,
  setCharClass,
  setCharLevel,
  setCharBackground,
  setProfBonus,
  setInspiration,
  editModeEnabled,
}: BioBarProps) => {

  return (
    <Container>
      <Card className="character-sheet-cards">
        {editModeEnabled ? (
          <>
            <Row>
              <Col xs={9}>
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
                      onChange={(event) =>
                        setCharBackground(event.target.value)
                      }
                      defaultValue={charBackground}
                    ></input>
                  </Col>
                </Row>
              </Col>
              <Col xs={3}>
                <Card className="character-sheet-cards">
                  <Row>
                    <Form.Group as={Row}>
                      <Form.Label column sm="7">
                        Proficiency Bonus:
                      </Form.Label>
                      <Col sm="5">
                        <Form.Control
                          className="edit-mode-inputs"
                          defaultValue={profBonus}
                          onChange={(event) => {
                            if (!isNaN(parseInt(event.target.value))) {
                              setProfBonus(parseInt(event.target.value));
                            }
                          }}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                      <Form.Label column sm="7">
                        Inspiration:
                      </Form.Label>
                      <Col sm="5">
                        <Form.Control
                          defaultValue={inspiration}
                          className="edit-mode-inputs"
                          onChange={(event) =>
                            setInspiration(event.target.value)
                          }
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                </Card>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col xs={9}>
                <Row>
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
              </Col>
              <Col xs={3}>
                <h1>ㅤ</h1> {/* Blank character to shift the h4s down*/}
                <h4>
                  Proficiency Bonus: +<b>{profBonus}</b>
                </h4>
                <h4>
                  Inspiration: <b>{inspiration}</b>
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
