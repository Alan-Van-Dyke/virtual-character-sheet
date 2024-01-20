import "../style/CharacterSheet.css";
import { useState } from "react";
import AbilityBar from "./AbilityBar";
import BioBar from "./BioBar";
import HitDiceList from "./HitDiceList";
import CombatStatBar from "./CombatStatBar";
import { Row, Card, Container, Col } from "react-bootstrap";
import HealthBar from "./HealthBar";
import DeathSaveBar from "./DeathSaveBar";

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

  const [skills, setSkills] = useState([
    {
      name: "Acrobatics",
      ability: "dexterity",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Animal Handling",
      ability: "wisdom",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Arcana",
      ability: "intelligence",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Athletics",
      ability: "strength",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Deception",
      ability: "charisma",
      proficiency: false,
      expertise: false,
    },
    {
      name: "History",
      ability: "intelligence",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Insight",
      ability: "wisdom",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Intimidation",
      ability: "charisma",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Investigation",
      ability: "intelligence",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Medicine",
      ability: "wisdom",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Nature",
      ability: "intelligence",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Perception",
      ability: "wisdom",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Performance",
      ability: "charisma",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Persuasion",
      ability: "charisma",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Religion",
      ability: "intelligence",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Sleight of Hand",
      ability: "dexterity",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Stealth",
      ability: "dexterity",
      proficiency: false,
      expertise: false,
    },
    {
      name: "Survival",
      ability: "wisdom",
      proficiency: false,
      expertise: false,
    },
  ]);

  const [passivePerceptionBonus, setPassivePerceptionBonus] = useState(0);
  const [passiveInsightBonus, setPassiveInsightBonus] = useState(0);

  const [spellcastingAbility, setSpellcastingAbility] =
    useState("Intelligence");

  const [spellAttackBonus, setSpellAttackBonus] = useState(profBonus);
  const [spellAttackOtherBonus, setSpellAttackOtherBonus] = useState(0);
  const [spellSaveDCBonus, setSpellSaveDCBonus] = useState(0);

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
    console.log("SHORT REST" + event);
  };

  const handleLongRest = (event: React.MouseEvent) => {
    console.log("LONG REST" + event);
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
            setSkills={setSkills}
            setPassiveInsightBonus={setPassiveInsightBonus}
            setPassivePerceptionBonus={setPassivePerceptionBonus}
            profBonus={profBonus}
            strength={strength}
            dexterity={dexterity}
            constitution={constitution}
            intelligence={intelligence}
            wisdom={wisdom}
            charisma={charisma}
            skills={skills}
            passiveInsightBonus={passiveInsightBonus}
            passivePerceptionBonus={passivePerceptionBonus}
            savingThrowProficiencies={savingThrowProficiencies}
          />
        </Row>
        <Row id="R3" className="legend-row"></Row>
        <Row id="R4">
          <Col id="R4C1" md={6}>
            <CombatStatBar
              baseAC={baseAC}
              acBonus={acBonus}
              shieldBonus={shieldBonus}
              speed={speed}
              swimSpeed={swimSpeed}
              flySpeed={flySpeed}
              initiativeBonus={initiativeBonus}
              spellAttackOtherBonus={spellAttackOtherBonus}
              spellSaveDCBonus={spellSaveDCBonus}
              spellcastingAbility={spellcastingAbility}
              profBonus={profBonus}
              strength={strength}
              dexterity={dexterity}
              constitution={constitution}
              intelligence={intelligence}
              wisdom={wisdom}
              charisma={charisma}
              setBaseAC={setBaseAC}
              setACBonus={setACBonus}
              setShieldBonus={setShieldBonus}
              setSpeed={setSpeed}
              setSwimSpeed={setSwimSpeed}
              setFlySpeed={setFlySpeed}
              setInitiativeBonus={setInitiativeBonus}
              setSpellAttackOtherBonus={setSpellAttackOtherBonus}
              setSpellSaveDCBonus={setSpellSaveDCBonus}
              setSpellcastingAbility={setSpellcastingAbility}
              editModeEnabled={editModeEnabled}
            />
          </Col>
          <Col id="R4C2" md={6}>
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
