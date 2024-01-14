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
  const [userUpdatedAC, setUserUpdatedAC] = useState(false); // workaround solution for first loading dexterity bonus on AC if the user doesn't select an armor option

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
    setUserUpdatedAC(true);
  };

  //Default AC bonus for first time case where user updated dexterity but didn't select armor type
  if (!userUpdatedAC) {
    setACBonus(Math.floor((dexterity - 10) / 2));
  }

  return (
    <Container className="ability-box">
      <Row>
        <Card className="character-sheet-cards text-center">
          <h5>
            <b>Armor Class</b>
          </h5>
          {editModeEnabled ? (
            <Container>
              <Row>
                <Col>
                  <label>Base Armor Class</label>

                  <Form.Control
                    type="number"
                    className="text-center edit-mode-inputs"
                    onChange={(event) => {
                      if (!isNaN(parseInt(event.target.value))) {
                        setBaseAC(parseInt(event.target.value));
                      }
                    }}
                    defaultValue={baseAC}
                  ></Form.Control>
                </Col>
              </Row>
              <Row>
                <label>Armor Class Bonus</label>
              </Row>
              <Row>
                <Form id="ac-option-form">
                  <Form.Select
                    onChange={handleACBonusChange}
                    className="edit-mode-inputs"
                  >
                    <option value="light" selected={armorType === "light"}>
                      Light / None
                    </option>
                    <option value="medium" selected={armorType === "medium"}>
                      Medium
                    </option>
                    <option value="heavy" selected={armorType === "heavy"}>
                      Heavy
                    </option>
                  </Form.Select>
                  <Form.Check
                    className="text-start"
                    type="checkbox"
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
            <h3 className="text-center">{baseAC + acBonus + shieldBonus}</h3>
          )}
        </Card>
        <Card className="character-sheet-cards text-center">
          <h5>
            <b>Speed</b>
          </h5>
          {editModeEnabled ? (
            <Form.Control
              type="number"
              className="text-center edit-mode-inputs"
              readOnly={!editModeEnabled}
              onChange={(event) => {
                if (!isNaN(parseInt(event.target.value))) {
                  setSpeed(parseInt(event.target.value));
                }
              }}
              defaultValue={speed}
            ></Form.Control>
          ) : (
            <h3 className="text-center">{speed}</h3>
          )}
        </Card>
        <Card className="character-sheet-cards text-center">
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

                  <Form.Control
                    type="number"
                    className="text-center edit-mode-inputs"
                    onChange={(event) => {
                      if (!isNaN(parseInt(event.target.value))) {
                        setInitiativeBonus(parseInt(event.target.value));
                      }
                    }}
                    defaultValue={initiativeBonus}
                  ></Form.Control>
                </Col>
              </Row>
            </Container>
          ) : (
            <h3 className="text-center">
              {Math.floor((dexterity - 10) / 2) + initiativeBonus}
            </h3>
          )}
        </Card>
      </Row>
    </Container>
  );
};

export default CombatStatBar;
