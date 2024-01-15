import "./styles/AbilityBar.css";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

interface AbilityBarProps {
  setStrength: (val: number) => void;
  setDexterity: (val: number) => void;
  setConstitution: (val: number) => void;
  setIntelligence: (val: number) => void;
  setWisdom: (val: number) => void;
  setCharisma: (val: number) => void;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  editModeEnabled: boolean;
}

const AbilityBar = ({
  editModeEnabled,
  setStrength,
  setDexterity,
  setConstitution,
  setIntelligence,
  setWisdom,
  setCharisma,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
}: AbilityBarProps) => {
  return (
    <Container>
      <Row>
        <Col xs={2}>
          <Card className="ability-card">
            <h5>
              <b>Strength</b>
            </h5>
            {editModeEnabled ? (
              <Form.Control
                type="number"
                className="edit-mode-inputs text-center"
                readOnly={!editModeEnabled}
                plaintext={!editModeEnabled}
                onChange={(event) => {
                  if (!isNaN(parseInt(event.target.value))) {
                    setStrength(parseInt(event.target.value));
                  }
                }}
                defaultValue={strength}
              ></Form.Control>
            ) : (
              <h3 className="ability-score">{strength}</h3>
            )}
            <h5>
              {(strength > 9 ? "+" : "") + Math.floor((strength - 10) / 2)}
            </h5>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="ability-card">
            <h5>
              <b>Dexterity</b>
            </h5>
            {editModeEnabled ? (
              <Form.Control
                type="number"
                className="edit-mode-inputs text-center"
                readOnly={!editModeEnabled}
                plaintext={!editModeEnabled}
                onChange={(event) => {
                  if (!isNaN(parseInt(event.target.value))) {
                    setDexterity(parseInt(event.target.value));
                  }
                }}
                defaultValue={dexterity}
              ></Form.Control>
            ) : (
              <h3 className="ability-score">{dexterity}</h3>
            )}
            <h5>
              {(dexterity > 9 ? "+" : "") + Math.floor((dexterity - 10) / 2)}
            </h5>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="ability-card">
            <h5>
              <b>Constitution</b>
            </h5>
            {editModeEnabled ? (
              <Form.Control
                type="number"
                className="edit-mode-inputs text-center"
                readOnly={!editModeEnabled}
                plaintext={!editModeEnabled}
                onChange={(event) => {
                  if (!isNaN(parseInt(event.target.value))) {
                    setConstitution(parseInt(event.target.value));
                  }
                }}
                defaultValue={constitution}
              ></Form.Control>
            ) : (
              <h3 className="ability-score">{constitution}</h3>
            )}
            <h5>
              {(constitution > 9 ? "+" : "") +
                Math.floor((constitution - 10) / 2)}
            </h5>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="ability-card">
            <h5>
              <b>Intelligence</b>
            </h5>
            {editModeEnabled ? (
              <Form.Control
                type="number"
                className="edit-mode-inputs text-center"
                readOnly={!editModeEnabled}
                plaintext={!editModeEnabled}
                onChange={(event) => {
                  if (!isNaN(parseInt(event.target.value))) {
                    setIntelligence(parseInt(event.target.value));
                  }
                }}
                defaultValue={intelligence}
              ></Form.Control>
            ) : (
              <h3 className="ability-score">{intelligence}</h3>
            )}
            <h5>
              {(intelligence > 9 ? "+" : "") +
                Math.floor((intelligence - 10) / 2)}
            </h5>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="ability-card">
            <h5>
              <b>Wisdom</b>
            </h5>
            {editModeEnabled ? (
              <Form.Control
                type="number"
                className="edit-mode-inputs text-center"
                readOnly={!editModeEnabled}
                plaintext={!editModeEnabled}
                onChange={(event) => {
                  if (!isNaN(parseInt(event.target.value))) {
                    setWisdom(parseInt(event.target.value));
                  }
                }}
                defaultValue={wisdom}
              ></Form.Control>
            ) : (
              <h3 className="ability-score">{wisdom}</h3>
            )}
            <h5>{(wisdom > 9 ? "+" : "") + Math.floor((wisdom - 10) / 2)}</h5>
          </Card>
        </Col>
        <Col xs={2}>
          <Card className="ability-card">
            <h5>
              <b>Charisma</b>
            </h5>
            {editModeEnabled ? (
              <Form.Control
                type="number"
                className="edit-mode-inputs text-center"
                readOnly={!editModeEnabled}
                plaintext={!editModeEnabled}
                onChange={(event) => {
                  if (!isNaN(parseInt(event.target.value))) {
                    setCharisma(parseInt(event.target.value));
                  }
                }}
                defaultValue={charisma}
              ></Form.Control>
            ) : (
              <h3 className="ability-score">{charisma}</h3>
            )}
            <h5>
              {(charisma > 9 ? "+" : "") + Math.floor((charisma - 10) / 2)}
            </h5>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AbilityBar;
