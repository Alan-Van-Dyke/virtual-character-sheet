import "../style/CombatStatBar.css";
import React, { useState } from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";

interface CombatStatBarProps {
  baseAC: number;
  acBonus: number;
  shieldBonus: number;
  speed: number;
  swimSpeed: number;
  flySpeed: number;
  initiativeBonus: number;
  spellcastingAbility: string;
  spellAttackOtherBonus: number;
  spellSaveDCBonus: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  profBonus: number;
  setBaseAC: (val: number) => void;
  setACBonus: (val: number) => void;
  setShieldBonus: (val: number) => void;
  setSpeed: (val: number) => void;
  setSwimSpeed: (val: number) => void;
  setFlySpeed: (val: number) => void;
  setInitiativeBonus: (val: number) => void;
  setSpellcastingAbility: (val: string) => void;
  setSpellAttackOtherBonus: (val: number) => void;
  setSpellSaveDCBonus: (val: number) => void;
  editModeEnabled: boolean;
}

const CombatStatBar = ({
  baseAC,
  acBonus,
  shieldBonus,
  speed,
  swimSpeed,
  flySpeed,
  initiativeBonus,
  spellcastingAbility,
  spellAttackOtherBonus,
  spellSaveDCBonus,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  profBonus,
  setBaseAC,
  setACBonus,
  setShieldBonus,
  setSpeed,
  setSwimSpeed,
  setFlySpeed,
  setInitiativeBonus,
  setSpellAttackOtherBonus,
  setSpellSaveDCBonus,
  setSpellcastingAbility,
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

  const calculateBaseSpellSaveDC = (ability: string) => {
    switch (ability) {
      case "Strength":
        return 8 + Math.floor((strength - 10) / 2) + profBonus;
      case "Dexterity":
        return 8 + Math.floor((dexterity - 10) / 2) + profBonus;
      case "Constitution":
        return 8 + Math.floor((constitution - 10) / 2) + profBonus;
      case "Intelligence":
        return 8 + Math.floor((intelligence - 10) / 2) + profBonus;
      case "Wisdom":
        return 8 + Math.floor((wisdom - 10) / 2) + profBonus;
      case "Charisma":
        return 8 + Math.floor((charisma - 10) / 2) + profBonus;
    }
    return 8;
  };

  //Default AC bonus for first time case where user updated dexterity but didn't select armor type
  if (!userUpdatedAC) {
    setACBonus(Math.floor((dexterity - 10) / 2));
  }

  return (
    <>
      <Row>
        <Col md={4} className="d-flex flex-column">
          <Card className="character-sheet-cards text-center h-100">
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
        </Col>
        <Col md={4} className="d-flex flex-column">
          <Card className="character-sheet-cards text-center h-100">
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
        </Col>
        <Col md={4}>
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
            <Row>
              <Col>
                <h5 className="minor-speed-labels">
                  <b>Swim Speed</b>
                </h5>
                {editModeEnabled ? (
                  <Form.Control
                    type="number"
                    className="text-center edit-mode-inputs"
                    readOnly={!editModeEnabled}
                    onChange={(event) => {
                      if (!isNaN(parseInt(event.target.value))) {
                        setSwimSpeed(parseInt(event.target.value));
                      }
                    }}
                    defaultValue={swimSpeed}
                  ></Form.Control>
                ) : (
                  <h3 className="text-center minor-speed-labels">
                    {swimSpeed}
                  </h3>
                )}
              </Col>
              <Col>
                <h5 className="minor-speed-labels">
                  <b>Fly Speed</b>
                </h5>
                {editModeEnabled ? (
                  <Form.Control
                    type="number"
                    className="text-center edit-mode-inputs"
                    readOnly={!editModeEnabled}
                    onChange={(event) => {
                      if (!isNaN(parseInt(event.target.value))) {
                        setFlySpeed(parseInt(event.target.value));
                      }
                    }}
                    defaultValue={flySpeed}
                  ></Form.Control>
                ) : (
                  <h3 className="text-center minor-speed-labels">{flySpeed}</h3>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="character-sheet-cards text-center h-100">
            <h5>
              <b>Spell Save Difficulty Class</b>
            </h5>
            {editModeEnabled ? (
              <Container>
                <Row>
                  <label>Spellcasting Ability</label>
                  <Form id="ac-option-form">
                    <Form.Select
                      onChange={(event) => {
                        setSpellcastingAbility(event.target.value);
                      }}
                      className="edit-mode-inputs"
                    >
                      <option
                        value="Strength"
                        selected={spellcastingAbility === "Strength"}
                      >
                        Strength
                      </option>
                      <option
                        value="Dexterity"
                        selected={spellcastingAbility === "Dexterity"}
                      >
                        Dexterity
                      </option>
                      <option
                        value="Constitution"
                        selected={spellcastingAbility === "Constitution"}
                      >
                        Constitution
                      </option>
                      <option
                        value="Intelligence"
                        selected={spellcastingAbility === "Intelligence"}
                      >
                        Intelligence
                      </option>
                      <option
                        value="Wisdom"
                        selected={spellcastingAbility === "Wisdom"}
                      >
                        Wisdom
                      </option>
                      <option
                        value="Charisma"
                        selected={spellcastingAbility === "Charisma"}
                      >
                        Charisma
                      </option>
                    </Form.Select>
                  </Form>
                </Row>
                <Row>
                  <Col>
                    <label>Base Spell Save Difficulty Check</label>
                    <label className="formula-label">
                      8 + {spellcastingAbility} Modifier + Proficiency =
                    </label>
                    <h5 className="text-center">
                      {calculateBaseSpellSaveDC(spellcastingAbility)}
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Other Bonus</label>

                    <Form.Control
                      type="number"
                      className="text-center edit-mode-inputs"
                      onChange={(event) => {
                        if (!isNaN(parseInt(event.target.value))) {
                          setSpellSaveDCBonus(parseInt(event.target.value));
                        }
                      }}
                      defaultValue={spellSaveDCBonus}
                    ></Form.Control>
                  </Col>
                </Row>
              </Container>
            ) : (
              <h3 className="text-center">
                {calculateBaseSpellSaveDC(spellcastingAbility) +
                  spellSaveDCBonus}
              </h3>
            )}
          </Card>
        </Col>
        <Col>
          <Card className="character-sheet-cards text-center h-100">
            <h5>
              <b>Spell Attack Bonus</b>
            </h5>
            {editModeEnabled ? (
              <Container>
                <Row>
                  <label>Spellcasting Ability</label>
                  <Form id="ac-option-form">
                    <Form.Select
                      onChange={(event) => {
                        setSpellcastingAbility(event.target.value);
                      }}
                      className="edit-mode-inputs"
                    >
                      <option
                        value="Strength"
                        selected={spellcastingAbility === "Strength"}
                      >
                        Strength
                      </option>
                      <option
                        value="Dexterity"
                        selected={spellcastingAbility === "Dexterity"}
                      >
                        Dexterity
                      </option>
                      <option
                        value="Constitution"
                        selected={spellcastingAbility === "Constitution"}
                      >
                        Constitution
                      </option>
                      <option
                        value="Intelligence"
                        selected={spellcastingAbility === "Intelligence"}
                      >
                        Intelligence
                      </option>
                      <option
                        value="Wisdom"
                        selected={spellcastingAbility === "Wisdom"}
                      >
                        Wisdom
                      </option>
                      <option
                        value="Charisma"
                        selected={spellcastingAbility === "Charisma"}
                      >
                        Charisma
                      </option>
                    </Form.Select>
                  </Form>
                </Row>
                <Row>
                  <Col>
                    <label>Base Spell Attack Bonus</label>
                    <label className="formula-label">
                      {spellcastingAbility} Modifier + Proficiency =
                    </label>
                    <h5 className="text-center">
                      {calculateBaseSpellSaveDC(spellcastingAbility) - 8}
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label>Other Bonus</label>

                    <Form.Control
                      type="number"
                      className="text-center edit-mode-inputs"
                      onChange={(event) => {
                        if (!isNaN(parseInt(event.target.value))) {
                          setSpellAttackOtherBonus(
                            parseInt(event.target.value)
                          );
                        }
                      }}
                      defaultValue={spellAttackOtherBonus}
                    ></Form.Control>
                  </Col>
                </Row>
              </Container>
            ) : (
              <h3 className="text-center">
                {calculateBaseSpellSaveDC(spellcastingAbility) -
                  8 +
                  spellAttackOtherBonus}
              </h3>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CombatStatBar;
