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
  setSkills: (
    val: {
      name: string;
      ability: string;
      proficiency: boolean;
      expertise: boolean;
    }[]
  ) => void;
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
  skills: {
    name: string;
    ability: string;
    proficiency: boolean;
    expertise: boolean;
  }[];
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
  setSkills,
  profBonus,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  skills,
  savingThrowProficiencies,
}: AbilityBarProps) => {
  const calculateModifier = (score: number) => {
    return Math.floor((score - 10) / 2);
  };

  const generateModifierDisplay = (
    score: number,
    proficiency: boolean,
    expertise: boolean
  ) => {
    const bonus =
      calculateModifier(score) +
      (proficiency ? profBonus : 0) +
      (expertise ? profBonus : 0);

    const prefix = bonus > 0 ? "+" : "";

    return prefix + bonus;
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
                <Col md={7} className="check-label">
                  <span>Strength Save:</span>
                </Col>
                <Col md={5} className="check-score">
                  {editModeEnabled ? (
                    <Form.Select
                      className="prof-select-box edit-mode-inputs"
                      size="sm"
                      onChange={(event) => {
                        switch (event.target.value) {
                          case "None":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              strength: false,
                            });
                            break;
                          case "Proficiency":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              strength: true,
                            });
                            break;
                        }
                      }}
                    >
                      <option
                        selected={!savingThrowProficiencies.strength}
                        value="None"
                      >
                        None
                      </option>
                      <option
                        selected={savingThrowProficiencies.strength}
                        value="Proficiency"
                      >
                        Proficiency
                      </option>
                    </Form.Select>
                  ) : (
                    <b>
                      {generateModifierDisplay(
                        strength,
                        savingThrowProficiencies.strength,
                        false
                      )}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              {skills
                .map((skill, idx) => ({ ...skill, originalIdx: idx }))
                .filter((skill) => skill.ability === "strength")
                .map((skill) => (
                  <Row>
                    <Col md={7} className="check-label">
                      <span>{skill.name}:</span>
                    </Col>
                    <Col md={5} className="check-score">
                      {editModeEnabled ? (
                        <>
                          <Form.Select
                            className="prof-select-box edit-mode-inputs"
                            size="sm"
                            onChange={(event) => {
                              const newSkills = [...skills];

                              switch (event.target.value) {
                                case "None":
                                  newSkills[skill.originalIdx].proficiency =
                                    false;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Proficiency":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Expertise":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise = true;
                                  break;
                              }

                              setSkills(newSkills);
                            }}
                          >
                            <option
                              selected={!skill.proficiency && !skill.expertise}
                              value="None"
                            >
                              None
                            </option>
                            <option
                              selected={skill.proficiency && !skill.expertise}
                              value="Proficiency"
                            >
                              Proficiency
                            </option>
                            <option
                              selected={skill.proficiency && skill.expertise}
                              value="Expertise"
                            >
                              Expertise
                            </option>
                          </Form.Select>
                        </>
                      ) : (
                        <b>
                          {generateModifierDisplay(
                            strength,
                            skill.proficiency,
                            skill.expertise
                          )}
                        </b>
                      )}
                    </Col>
                  </Row>
                ))}
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md={7} className="check-label">
                  <span>Dexterity Save:</span>
                </Col>
                <Col md={5} className="check-score">
                  {editModeEnabled ? (
                    <Form.Select
                      className="prof-select-box edit-mode-inputs"
                      size="sm"
                      onChange={(event) => {
                        switch (event.target.value) {
                          case "None":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              dexterity: false,
                            });
                            break;
                          case "Proficiency":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              dexterity: true,
                            });
                            break;
                        }
                      }}
                    >
                      <option
                        selected={!savingThrowProficiencies.dexterity}
                        value="None"
                      >
                        None
                      </option>
                      <option
                        selected={savingThrowProficiencies.dexterity}
                        value="Proficiency"
                      >
                        Proficiency
                      </option>
                    </Form.Select>
                  ) : (
                    <b>
                      {generateModifierDisplay(
                        dexterity,
                        savingThrowProficiencies.dexterity,
                        false
                      )}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              {skills
                .map((skill, idx) => ({ ...skill, originalIdx: idx }))
                .filter((skill) => skill.ability === "dexterity")
                .map((skill) => (
                  <Row>
                    <Col md={7} className="check-label">
                      <span>{skill.name}:</span>
                    </Col>
                    <Col md={5} className="check-score">
                      {editModeEnabled ? (
                        <>
                          <Form.Select
                            className="prof-select-box edit-mode-inputs"
                            size="sm"
                            onChange={(event) => {
                              const newSkills = [...skills];

                              switch (event.target.value) {
                                case "None":
                                  newSkills[skill.originalIdx].proficiency =
                                    false;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Proficiency":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Expertise":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise = true;
                                  break;
                              }

                              setSkills(newSkills);
                            }}
                          >
                            <option
                              selected={!skill.proficiency && !skill.expertise}
                              value="None"
                            >
                              None
                            </option>
                            <option
                              selected={skill.proficiency && !skill.expertise}
                              value="Proficiency"
                            >
                              Proficiency
                            </option>
                            <option
                              selected={skill.proficiency && skill.expertise}
                              value="Expertise"
                            >
                              Expertise
                            </option>
                          </Form.Select>
                        </>
                      ) : (
                        <b>
                          {generateModifierDisplay(
                            dexterity,
                            skill.proficiency,
                            skill.expertise
                          )}
                        </b>
                      )}
                    </Col>
                  </Row>
                ))}
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md={7} className="check-label">
                  <span>Constitution Save:</span>
                </Col>
                <Col md={5} className="check-score">
                  {editModeEnabled ? (
                    <Form.Select
                      className="prof-select-box edit-mode-inputs"
                      size="sm"
                      onChange={(event) => {
                        switch (event.target.value) {
                          case "None":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              constitution: false,
                            });
                            break;
                          case "Proficiency":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              constitution: true,
                            });
                            break;
                        }
                      }}
                    >
                      <option
                        selected={!savingThrowProficiencies.constitution}
                        value="None"
                      >
                        None
                      </option>
                      <option
                        selected={savingThrowProficiencies.constitution}
                        value="Proficiency"
                      >
                        Proficiency
                      </option>
                    </Form.Select>
                  ) : (
                    <b>
                      {generateModifierDisplay(
                        constitution,
                        savingThrowProficiencies.constitution,
                        false
                      )}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              {skills
                .map((skill, idx) => ({ ...skill, originalIdx: idx }))
                .filter((skill) => skill.ability === "constitution")
                .map((skill) => (
                  <Row>
                    <Col md={7} className="check-label">
                      <span>{skill.name}:</span>
                    </Col>
                    <Col md={5} className="check-score">
                      {editModeEnabled ? (
                        <>
                          <Form.Select
                            className="prof-select-box edit-mode-inputs"
                            size="sm"
                            onChange={(event) => {
                              const newSkills = [...skills];

                              switch (event.target.value) {
                                case "None":
                                  newSkills[skill.originalIdx].proficiency =
                                    false;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Proficiency":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Expertise":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise = true;
                                  break;
                              }

                              setSkills(newSkills);
                            }}
                          >
                            <option
                              selected={!skill.proficiency && !skill.expertise}
                              value="None"
                            >
                              None
                            </option>
                            <option
                              selected={skill.proficiency && !skill.expertise}
                              value="Proficiency"
                            >
                              Proficiency
                            </option>
                            <option
                              selected={skill.proficiency && skill.expertise}
                              value="Expertise"
                            >
                              Expertise
                            </option>
                          </Form.Select>
                        </>
                      ) : (
                        <b>
                          {generateModifierDisplay(
                            constitution,
                            skill.proficiency,
                            skill.expertise
                          )}
                        </b>
                      )}
                    </Col>
                  </Row>
                ))}
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md={7} className="check-label">
                  <span>Intelligence Save:</span>
                </Col>
                <Col md={5} className="check-score">
                  {editModeEnabled ? (
                    <Form.Select
                      className="prof-select-box edit-mode-inputs"
                      size="sm"
                      onChange={(event) => {
                        switch (event.target.value) {
                          case "None":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              intelligence: false,
                            });
                            break;
                          case "Proficiency":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              intelligence: true,
                            });
                            break;
                        }
                      }}
                    >
                      <option
                        selected={!savingThrowProficiencies.intelligence}
                        value="None"
                      >
                        None
                      </option>
                      <option
                        selected={savingThrowProficiencies.intelligence}
                        value="Proficiency"
                      >
                        Proficiency
                      </option>
                    </Form.Select>
                  ) : (
                    <b>
                      {generateModifierDisplay(
                        intelligence,
                        savingThrowProficiencies.intelligence,
                        false
                      )}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              {skills
                .map((skill, idx) => ({ ...skill, originalIdx: idx }))
                .filter((skill) => skill.ability === "intelligence")
                .map((skill) => (
                  <Row>
                    <Col md={7} className="check-label">
                      <span>{skill.name}:</span>
                    </Col>
                    <Col md={5} className="check-score">
                      {editModeEnabled ? (
                        <>
                          <Form.Select
                            className="prof-select-box edit-mode-inputs"
                            size="sm"
                            onChange={(event) => {
                              const newSkills = [...skills];

                              switch (event.target.value) {
                                case "None":
                                  newSkills[skill.originalIdx].proficiency =
                                    false;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Proficiency":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Expertise":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise = true;
                                  break;
                              }

                              setSkills(newSkills);
                            }}
                          >
                            <option
                              selected={!skill.proficiency && !skill.expertise}
                              value="None"
                            >
                              None
                            </option>
                            <option
                              selected={skill.proficiency && !skill.expertise}
                              value="Proficiency"
                            >
                              Proficiency
                            </option>
                            <option
                              selected={skill.proficiency && skill.expertise}
                              value="Expertise"
                            >
                              Expertise
                            </option>
                          </Form.Select>
                        </>
                      ) : (
                        <b>
                          {generateModifierDisplay(
                            intelligence,
                            skill.proficiency,
                            skill.expertise
                          )}
                        </b>
                      )}
                    </Col>
                  </Row>
                ))}
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-inner">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md={7} className="check-label">
                  <span>Wisdom Save:</span>
                </Col>
                <Col md={5} className="check-score">
                  {editModeEnabled ? (
                    <Form.Select
                      className="prof-select-box edit-mode-inputs"
                      size="sm"
                      onChange={(event) => {
                        switch (event.target.value) {
                          case "None":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              wisdom: false,
                            });
                            break;
                          case "Proficiency":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              wisdom: true,
                            });
                            break;
                        }
                      }}
                    >
                      <option
                        selected={!savingThrowProficiencies.wisdom}
                        value="None"
                      >
                        None
                      </option>
                      <option
                        selected={savingThrowProficiencies.wisdom}
                        value="Proficiency"
                      >
                        Proficiency
                      </option>
                    </Form.Select>
                  ) : (
                    <b>
                      {generateModifierDisplay(
                        wisdom,
                        savingThrowProficiencies.wisdom,
                        false
                      )}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              {skills
                .map((skill, idx) => ({ ...skill, originalIdx: idx }))
                .filter((skill) => skill.ability === "wisdom")
                .map((skill) => (
                  <Row>
                    <Col md={7} className="check-label">
                      <span>{skill.name}:</span>
                    </Col>
                    <Col md={5} className="check-score">
                      {editModeEnabled ? (
                        <>
                          <Form.Select
                            className="prof-select-box edit-mode-inputs"
                            size="sm"
                            onChange={(event) => {
                              const newSkills = [...skills];

                              switch (event.target.value) {
                                case "None":
                                  newSkills[skill.originalIdx].proficiency =
                                    false;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Proficiency":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Expertise":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise = true;
                                  break;
                              }

                              setSkills(newSkills);
                            }}
                          >
                            <option
                              selected={!skill.proficiency && !skill.expertise}
                              value="None"
                            >
                              None
                            </option>
                            <option
                              selected={skill.proficiency && !skill.expertise}
                              value="Proficiency"
                            >
                              Proficiency
                            </option>
                            <option
                              selected={skill.proficiency && skill.expertise}
                              value="Expertise"
                            >
                              Expertise
                            </option>
                          </Form.Select>
                        </>
                      ) : (
                        <b>
                          {generateModifierDisplay(
                            wisdom,
                            skill.proficiency,
                            skill.expertise
                          )}
                        </b>
                      )}
                    </Col>
                  </Row>
                ))}
            </Container>
          </Card>
        </Col>
        <Col xs={2} className="skill-col-right">
          <Card className="ability-card h-100">
            <Container className="proficiency-stack">
              <Row>
                <Col md={7} className="check-label">
                  <span>Charisma Save:</span>
                </Col>
                <Col md={5} className="check-score">
                  {editModeEnabled ? (
                    <Form.Select
                      className="prof-select-box edit-mode-inputs"
                      size="sm"
                      onChange={(event) => {
                        switch (event.target.value) {
                          case "None":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              charisma: false,
                            });
                            break;
                          case "Proficiency":
                            setSavingThrowProficiencies({
                              ...savingThrowProficiencies,
                              charisma: true,
                            });
                            break;
                        }
                      }}
                    >
                      <option
                        selected={!savingThrowProficiencies.charisma}
                        value="None"
                      >
                        None
                      </option>
                      <option
                        selected={savingThrowProficiencies.charisma}
                        value="Proficiency"
                      >
                        Proficiency
                      </option>
                    </Form.Select>
                  ) : (
                    <b>
                      {generateModifierDisplay(
                        charisma,
                        savingThrowProficiencies.charisma,
                        false
                      )}
                    </b>
                  )}
                </Col>
              </Row>
              <hr className="check-divider"></hr>
              {skills
                .map((skill, idx) => ({ ...skill, originalIdx: idx }))
                .filter((skill) => skill.ability === "charisma")
                .map((skill) => (
                  <Row>
                    <Col md={7} className="check-label">
                      <span>{skill.name}:</span>
                    </Col>
                    <Col md={5} className="check-score">
                      {editModeEnabled ? (
                        <>
                          <Form.Select
                            className="prof-select-box edit-mode-inputs"
                            size="sm"
                            onChange={(event) => {
                              const newSkills = [...skills];

                              switch (event.target.value) {
                                case "None":
                                  newSkills[skill.originalIdx].proficiency =
                                    false;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Proficiency":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise =
                                    false;
                                  break;
                                case "Expertise":
                                  newSkills[skill.originalIdx].proficiency =
                                    true;
                                  newSkills[skill.originalIdx].expertise = true;
                                  break;
                              }

                              setSkills(newSkills);
                            }}
                          >
                            <option
                              selected={!skill.proficiency && !skill.expertise}
                              value="None"
                            >
                              None
                            </option>
                            <option
                              selected={skill.proficiency && !skill.expertise}
                              value="Proficiency"
                            >
                              Proficiency
                            </option>
                            <option
                              selected={skill.proficiency && skill.expertise}
                              value="Expertise"
                            >
                              Expertise
                            </option>
                          </Form.Select>
                        </>
                      ) : (
                        <b>
                          {generateModifierDisplay(
                            charisma,
                            skill.proficiency,
                            skill.expertise
                          )}
                        </b>
                      )}
                    </Col>
                  </Row>
                ))}
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AbilityBar;
