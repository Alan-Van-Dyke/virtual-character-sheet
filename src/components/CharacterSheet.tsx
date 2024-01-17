import "./styles/CharacterSheet.css";
import { useState } from "react";
import AbilityBar from "./AbilityBar";
import BioBar from "./BioBar";
import HitDiceList from "./HitDiceList";
import CombatStatBar from "./CombatStatBar";
import { Row, Card, Container, Col, CardBody, Form } from "react-bootstrap";
import SavingThrowBar from "./SavingThrowBar";
import SkillsBar from "./SkillsBar";
import HealthBar from "./HealthBar";
import DeathSaveBar from "./DeathSaveBar";

interface CharacterSheetProps {}

const CharacterSheet = () => {
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  const [charName, setCharName] = useState("");
  const [charRace, setCharRace] = useState("");
  const [charClass, setCharClass] = useState("");
  const [charBackground, setCharBackground] = useState("");
  const [charLevel, setCharLevel] = useState("");

  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);

  const [profBonus, setProfBonus] = useState(2);
  const [inspiration, setInspiration] = useState("None");

  const [currentHitDice, setCurrentHitDice] = useState({
    d6: 0,
    d8: 0,
    d10: 0,
    d12: 0,
  });

  const [maxHitDice, setMaxHitDice] = useState({
    d6: 0,
    d8: 0,
    d10: 0,
    d12: 0,
  });

  const [baseAC, setBaseAC] = useState(10);
  const [acBonus, setACBonus] = useState(Math.floor((dexterity - 10) / 2));
  const [shieldBonus, setShieldBonus] = useState(0);

  const [speed, setSpeed] = useState(30);
  const [swimSpeed, setSwimSpeed] = useState(0);
  const [flySpeed, setFlySpeed] = useState(0);
  const [initiativeBonus, setInitiativeBonus] = useState(
    Math.floor((dexterity - 10) / 2)
  );

  const [savingThrowProficiencies, setSavingThrowProficiencies] = useState({
    strength: false,
    dexterity: false,
    constitution: false,
    intelligence: false,
    wisdom: false,
    charisma: false,
  });

  const [skillProficiencies, setSkillProficiencies] = useState({
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false,
  });

  const [skillExpertise, setSkillExpertise] = useState({
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false,
  });

  const [useExpertise, setUseExpertise] = useState(false)

  const handleToggleEditMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditModeEnabled(event.target.checked);
  };

  // Rest schedule

  // 1. recognize list of things to do
  // 2. do each list item
  //      Append a log to a list of "things done"
  //      Append any optional things
  // 3. Render popup
  // 4. Show list of things done
  // 5. Show list of optional things with "yes do" or "no don't" buttons
  // 6. Handle each button choice
  // 7. user closes popup. All unanswered choices marked as "no don't"

  const handleShortRest = (event: React.MouseEvent) => {
    console.log("SHORT REST");
  };

  const handleLongRest = (event: React.MouseEvent) => {
    console.log("LONG REST");
  };

  return (
    <Card id="character-sheet" className="character-sheet-card character-sheet">
      <Container>
        <Row id="R0">
          <Col md={2} className="edit-mode-container">
            <div className="form-check form-switch ">
              <input
                className="form-check-input edit-mode-switch"
                type="checkbox"
                id="editModeToggle"
                onChange={handleToggleEditMode}
              ></input>
              <label className="edit-mode-switch-label">Edit Mode</label>
            </div>
          </Col>
          <Col md={{ span: 1, offset: 8 }} className="top-bar-buttons">
            <button
              className="btn character-sheet-buttons"
              onClick={handleShortRest}
            >
              Short Rest
            </button>
          </Col>
          <Col md={{ span: 1, offset: 0 }} className="top-bar-buttons">
            <button
              className="btn character-sheet-buttons"
              onClick={handleLongRest}
            >
              Long Rest
            </button>
          </Col>
        </Row>
        <Row id="R1">
          <BioBar
            charName={charName}
            charClass={charClass}
            charLevel={charLevel}
            charBackground={charBackground}
            charRace={charRace}
            profBonus={profBonus}
            inspiration={inspiration}
            setCharName={setCharName}
            setCharClass={setCharClass}
            setCharLevel={setCharLevel}
            setCharBackground={setCharBackground}
            setCharRace={setCharRace}
            setProfBonus={setProfBonus}
            setInspiration={setInspiration}
            setUseExpertise={setUseExpertise}
            editModeEnabled={editModeEnabled}
          ></BioBar>
        </Row>
        <Row id="R2">
          <AbilityBar
            editModeEnabled={editModeEnabled}
            setStrength={setStrength}
            setDexterity={setDexterity}
            setConstitution={setConstitution}
            setIntelligence={setIntelligence}
            setWisdom={setWisdom}
            setCharisma={setCharisma}
            setSavingThrowProficiencies={setSavingThrowProficiencies}
            setSkillProficiencies={setSkillProficiencies}
            setSkillExpertise={setSkillExpertise}
            profBonus={profBonus}
            strength={strength}
            dexterity={dexterity}
            constitution={constitution}
            intelligence={intelligence}
            wisdom={wisdom}
            charisma={charisma}
            savingThrowProficiencies={savingThrowProficiencies}
            skillProficiencies={skillProficiencies}
            skillExpertise={skillExpertise}
            useExpertise={useExpertise}
          />
        </Row>
        <Row id="R3"></Row>
        <Row id="R4">
          <Col id="R4C1" sm={2}>
            <CombatStatBar
              baseAC={baseAC}
              acBonus={acBonus}
              shieldBonus={shieldBonus}
              speed={speed}
              initiativeBonus={initiativeBonus}
              dexterity={dexterity}
              setBaseAC={setBaseAC}
              setACBonus={setACBonus}
              setShieldBonus={setShieldBonus}
              setSpeed={setSpeed}
              setInitiativeBonus={setInitiativeBonus}
              editModeEnabled={editModeEnabled}
            />
          </Col>
          <Col id="R4C2" sm={10}>
            <Row id="R4C2r1">
              <HealthBar></HealthBar>
            </Row>
            <Row id="R4C2r2">
              <Col id="R4C2r2c1">
                <DeathSaveBar />
              </Col>
              <Col id="R4C2r2c2">
                <HitDiceList
                  currentHitDice={currentHitDice}
                  maxHitDice={maxHitDice}
                  setCurrentHitDice={setCurrentHitDice}
                  setMaxHitDice={setMaxHitDice}
                  editModeEnabled={editModeEnabled}
                />
              </Col>
            </Row>
          </Col>
          <Card id="REMOVE ME">put the rest down here</Card>
        </Row>
      </Container>
    </Card>
  );
};

export default CharacterSheet;
