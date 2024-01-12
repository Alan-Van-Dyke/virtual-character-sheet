import React, { useState } from "react";
import { Card, Container, Row, Col, Tooltip, Form } from "react-bootstrap";

interface CombatStatBarProps {
  baseAC: number;
  acBonus: number;
  shieldBonus: number;
  speed: number;
  initiativeBonus: number;
  dexterity: number;
  setBaseAC: (val: number) => void;
  setACBonus: (val: number) => void;
  setShieldBonus: (val: number) => void;
  setSpeed: (val: number) => void;
  setInitiativeBonus: (val: number) => void;
  editModeEnabled: boolean;
}

const CombatStatBar = ({
  baseAC,
  acBonus,
  shieldBonus,
  speed,
  initiativeBonus,
  dexterity,
  setBaseAC,
  setACBonus,
  setShieldBonus,
  setSpeed,
  setInitiativeBonus,
  editModeEnabled,
}: CombatStatBarProps) => {
  const [armorType, setArmorType] = useState("light"); // only used for persisting the dropdown selection between edit mode usages
  const [hasShield, setHasShield] = useState(false);

  const handleACBonusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const dexterityMod = Math.floor((dexterity - 10) / 2);
    switch (event.target.value) {
      case "light":
        setACBonus(dexterityMod);
        setArmorType("light");
        break;
      case "medium":
        setArmorType("medium");
        if (dexterityMod < 2) {
          setACBonus(dexterityMod);
        } else {
          setACBonus(2);
        }
        break;
      case "heavy":
        setArmorType("heavy");
        setACBonus(0);
        break;
    }
  };

  return (
    <Card>
      <Container className="ability-box">
        <Row>
          <Col className="ability-box">
            <Card className="prof-card">
              <h5>
                <b>Armor Class</b>
              </h5>
              {editModeEnabled ? (
                <Container>
                  <Row className="combat-stat-options">
                    <Col>
                      <label>Base AC</label>
                      <input
                        id="base-ac-input"
                        type="number"
                        className="form-control text-center"
                        value={baseAC}
                      ></input>
                    </Col>
                  </Row>
                  <Row className="combat-stat-options">
                    <label>AC Bonus</label>
                  </Row>
                  <Row>
                    <Form className="text-start" id="ac-option-form">
                      <Form.Select onChange={handleACBonusChange}>
                        <option value="light" selected={armorType === "light"}>
                          Light / None
                        </option>
                        <option
                          value="medium"
                          selected={armorType === "medium"}
                        >
                          Medium
                        </option>
                        <option value="heavy" selected={armorType === "heavy"}>
                          Heavy
                        </option>
                      </Form.Select>
                      <Form.Check
                        className="text-start"
                        id="ac-option-form"
                        label="Shield ?"
                        checked={hasShield}
                        onChange={(event) => {
                          if (event.target.checked) {
                            setHasShield(true);
                            setShieldBonus(2);
                          } else {
                            setHasShield(false);
                            setShieldBonus(0);
                          }
                        }}
                      />
                    </Form>
                  </Row>
                </Container>
              ) : (
                <h3 className="text-center">
                  {baseAC + acBonus + shieldBonus}
                </h3>
              )}
            </Card>
          </Col>
          <Col className="ability-box">
            <Card className="prof-card">
              <h5>
                <b>Speed</b>
              </h5>
              {editModeEnabled ? (
                <input
                  type="number"
                  className="form-control text-center ability-input"
                  readOnly={!editModeEnabled}
                  onChange={(event) => setSpeed(event.target.valueAsNumber)}
                  defaultValue={speed}
                ></input>
              ) : (
                <h3 className="text-center">{speed}</h3>
              )}
            </Card>
          </Col>
          <Col className="ability-box">
            <Card className="prof-card">
              <h5>
                <b>Initiative</b>
              </h5>
              {editModeEnabled ? (
                <Container>
                  <Row>
                    <label>Dexterity Mod</label>
                  </Row>
                  <Row>
                    <label>
                      {(dexterity > 9 ? "+" : "") +
                        Math.floor((dexterity - 10) / 2)}
                    </label>
                  </Row>
                  <Row>
                    <Col className="text-center">Other Bonus</Col>
                  </Row>
                  <Row>
                    <Col>
                      <input
                        type="number"
                        className={
                          (editModeEnabled
                            ? "form-control"
                            : "form-control-plaintext") +
                          " text-center ability-input"
                        }
                        readOnly={!editModeEnabled}
                        onChange={(event) => {
                          !Number.isNaN(event.target.valueAsNumber)
                            ? setInitiativeBonus(event.target.valueAsNumber)
                            : console.log("nan");
                        }}
                        defaultValue={initiativeBonus}
                      ></input>
                    </Col>
                  </Row>
                </Container>
              ) : (
                <h3 className="text-center">
                  {Math.floor((dexterity - 10) / 2) + initiativeBonus}
                </h3>
              )}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="ability-box">
            <Card>HEALTH</Card>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CombatStatBar;
