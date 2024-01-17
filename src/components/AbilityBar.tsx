import "./styles/AbilityBar.css";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

interface AbilityBarProps {
  setStrength: (val: number) => void;
  setDexterity: (val: number) => void;
  setConstitution: (val: number) => void;
  setIntelligence: (val: number) => void;
  setWisdom: (val: number) => void;
  setCharisma: (val: number) => void;
  setSavingThrowProficiencies: (val: {
    strength: boolean;
    dexterity: boolean;
    constitution: boolean;
    intelligence: boolean;
    wisdom: boolean;
    charisma: boolean;
  }) => void;
  setSkillProficiencies: (val: {
    acrobatics: boolean;
    animalHandling: boolean;
    arcana: boolean;
    athletics: boolean;
    deception: boolean;
    history: boolean;
    insight: boolean;
    intimidation: boolean;
    investigation: boolean;
    medicine: boolean;
    nature: boolean;
    perception: boolean;
    performance: boolean;
    persuasion: boolean;
    religion: boolean;
    sleightOfHand: boolean;
    stealth: boolean;
    survival: boolean;
  }) => void;
  setSkillExpertise: (val: {
    acrobatics: boolean;
    animalHandling: boolean;
    arcana: boolean;
    athletics: boolean;
    deception: boolean;
    history: boolean;
    insight: boolean;
    intimidation: boolean;
    investigation: boolean;
    medicine: boolean;
    nature: boolean;
    perception: boolean;
    performance: boolean;
    persuasion: boolean;
    religion: boolean;
    sleightOfHand: boolean;
    stealth: boolean;
    survival: boolean;
  }) => void;
  profBonus: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  savingThrowProficiencies: {
    strength: boolean;
    dexterity: boolean;
    constitution: boolean;
    intelligence: boolean;
    wisdom: boolean;
    charisma: boolean;
  };
  skillProficiencies: {
    acrobatics: boolean;
    animalHandling: boolean;
    arcana: boolean;
    athletics: boolean;
    deception: boolean;
    history: boolean;
    insight: boolean;
    intimidation: boolean;
    investigation: boolean;
    medicine: boolean;
    nature: boolean;
    perception: boolean;
    performance: boolean;
    persuasion: boolean;
    religion: boolean;
    sleightOfHand: boolean;
    stealth: boolean;
    survival: boolean;
  };
  skillExpertise: {
    acrobatics: boolean;
    animalHandling: boolean;
    arcana: boolean;
    athletics: boolean;
    deception: boolean;
    history: boolean;
    insight: boolean;
    intimidation: boolean;
    investigation: boolean;
    medicine: boolean;
    nature: boolean;
    perception: boolean;
    performance: boolean;
    persuasion: boolean;
    religion: boolean;
    sleightOfHand: boolean;
    stealth: boolean;
    survival: boolean;
  };
  useExpertise: boolean;
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
  setSavingThrowProficiencies,
  setSkillProficiencies,
  setSkillExpertise,
  profBonus,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  savingThrowProficiencies,
  skillProficiencies,
  skillExpertise,
  useExpertise,
}: AbilityBarProps) => {
  const calculateModifier = (score: number) => {
    return Math.floor((score - 10) / 2);
  };

  return (
    <Container className="ability-bar">
      <Row className="ability-bar">
        <Col xs={2} className="skill-col-left">
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
            <h5>{(strength > 9 ? "+" : "") + calculateModifier(strength)}</h5>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
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
            <h5>{(dexterity > 9 ? "+" : "") + calculateModifier(dexterity)}</h5>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
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
              {(constitution > 9 ? "+" : "") + calculateModifier(constitution)}
            </h5>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
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
              {(intelligence > 9 ? "+" : "") + calculateModifier(intelligence)}
            </h5>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
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
            <h5>{(wisdom > 9 ? "+" : "") + calculateModifier(wisdom)}</h5>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-right">
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
            <h5>{(charisma > 9 ? "+" : "") + calculateModifier(charisma)}</h5>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={2} className="skill-col-left">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md="auto" className="check-label">
                  <span>Strength Save:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            strength: true,
                          });
                        } else {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            strength: false,
                          });
                        }
                      }}
                      checked={savingThrowProficiencies.strength}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(strength) +
                        (savingThrowProficiencies.strength ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Athletics Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <>
                      <Form.Check
                        onChange={(event) => {
                          if (event.target.checked) {
                            setSkillProficiencies({
                              ...skillProficiencies,
                              athletics: true,
                            });
                          } else {
                            setSkillProficiencies({
                              ...skillProficiencies,
                              athletics: false,
                            });
                            setSkillExpertise({
                              ...skillExpertise,
                              athletics: false,
                            });
                          }
                        }}
                        checked={skillProficiencies.athletics}
                        className="skill-prof-check-box"
                        inline
                      ></Form.Check>
                      {useExpertise ? (
                        <Form.Check
                          inline
                          disabled={!skillProficiencies.athletics}
                          checked={
                            skillProficiencies.athletics &&
                            skillExpertise.athletics
                          }
                          onChange={(event) => {
                            if (event.target.checked) {
                              setSkillExpertise({
                                ...skillExpertise,
                                athletics: true,
                              });
                            } else {
                              setSkillExpertise({
                                ...skillExpertise,
                                athletics: false,
                              });
                            }
                          }}
                          className="skill-prof-check-box"
                        ></Form.Check>
                      ) : null}
                    </>
                  ) : (
                    <b>
                      {calculateModifier(strength) +
                        (skillProficiencies.athletics ? profBonus : 0) +
                        (skillExpertise.athletics ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md="auto" className="check-label">
                  <span>Dexterity Save:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            dexterity: true,
                          });
                        } else {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            dexterity: false,
                          });
                        }
                      }}
                      checked={savingThrowProficiencies.dexterity}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(dexterity) +
                        (savingThrowProficiencies.dexterity ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Acrobatics Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            acrobatics: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            acrobatics: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.acrobatics}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(dexterity) +
                        (skillProficiencies.acrobatics ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Sleight of Hand Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            sleightOfHand: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            sleightOfHand: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.sleightOfHand}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(dexterity) +
                        (skillProficiencies.sleightOfHand ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Stealth Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            stealth: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            stealth: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.stealth}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(dexterity) +
                        (skillProficiencies.stealth ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md="auto" className="check-label">
                  <span>Constitution Save:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            constitution: true,
                          });
                        } else {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            constitution: false,
                          });
                        }
                      }}
                      checked={savingThrowProficiencies.constitution}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(constitution) +
                        (savingThrowProficiencies.constitution ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md="auto" className="check-label">
                  <span>Intelligence Save:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            intelligence: true,
                          });
                        } else {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            intelligence: false,
                          });
                        }
                      }}
                      checked={savingThrowProficiencies.intelligence}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(intelligence) +
                        (savingThrowProficiencies.intelligence ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Arcana Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            arcana: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            arcana: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.arcana}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(intelligence) +
                        (skillProficiencies.arcana ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>History Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            history: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            history: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.history}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(intelligence) +
                        (skillProficiencies.history ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Investigation Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            investigation: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            investigation: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.investigation}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(intelligence) +
                        (skillProficiencies.investigation ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Nature Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            nature: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            nature: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.nature}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(intelligence) +
                        (skillProficiencies.nature ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Religion Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            religion: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            religion: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.religion}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(intelligence) +
                        (skillProficiencies.religion ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md="auto" className="check-label">
                  <span>Wisdom Save:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            wisdom: true,
                          });
                        } else {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            wisdom: false,
                          });
                        }
                      }}
                      checked={savingThrowProficiencies.wisdom}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(wisdom) +
                        (savingThrowProficiencies.wisdom ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Animal Handling Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            animalHandling: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            animalHandling: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.animalHandling}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(wisdom) +
                        (skillProficiencies.animalHandling ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Insight Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            insight: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            insight: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.insight}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(wisdom) +
                        (skillProficiencies.insight ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Medicine Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            medicine: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            medicine: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.medicine}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(wisdom) +
                        (skillProficiencies.medicine ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Perception Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            perception: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            perception: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.perception}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(wisdom) +
                        (skillProficiencies.perception ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Survival Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            survival: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            survival: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.survival}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(wisdom) +
                        (skillProficiencies.survival ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-right">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md="auto" className="check-label">
                  <span>Charisma Save:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            charisma: true,
                          });
                        } else {
                          setSavingThrowProficiencies({
                            ...savingThrowProficiencies,
                            charisma: false,
                          });
                        }
                      }}
                      checked={savingThrowProficiencies.charisma}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(charisma) +
                        (savingThrowProficiencies.charisma ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Deception Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            deception: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            deception: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.deception}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(charisma) +
                        (skillProficiencies.deception ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Intimidation Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            intimidation: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            intimidation: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.intimidation}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(charisma) +
                        (skillProficiencies.intimidation ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Performance Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            performance: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            performance: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.performance}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(charisma) +
                        (skillProficiencies.performance ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="auto" className="check-label">
                  <span>Persuasion Check:</span>
                </Col>
                <Col className="check-score">
                  {editModeEnabled ? (
                    <Form.Check
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            persuasion: true,
                          });
                        } else {
                          setSkillProficiencies({
                            ...skillProficiencies,
                            persuasion: false,
                          });
                        }
                      }}
                      checked={skillProficiencies.persuasion}
                    ></Form.Check>
                  ) : (
                    <b>
                      {calculateModifier(charisma) +
                        (skillProficiencies.persuasion ? profBonus : 0)}
                    </b>
                  )}
                </Col>
              </Row>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AbilityBar;
