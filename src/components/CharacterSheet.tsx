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
  const [inspiration, setInspiration] = useState("No");

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
  const [initiativeBonus, setInitiativeBonus] = useState(
    Math.floor((dexterity - 10) / 2)
  );

  const handleToggleEditMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditModeEnabled(event.target.checked);
  };

  const handleShortRest = (event: React.MouseEvent) => {
    console.log("SHORT REST");
  };

  const handleLongRest = (event: React.MouseEvent) => {
    console.log("LONG REST");
  };

  return (
    <Card
      data-bs-theme="dark"
      id="character-sheet"
      className="character-sheet-card"
    >
      <Container>
        <Row id="R0">
          <Col md={2} className="edit-mode-container">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="editModeToggle"
                onChange={handleToggleEditMode}
              ></input>
              <label>Edit Mode</label>
            </div>
          </Col>
          <Col md={{ span: 1, offset: 8 }} className="top-bar-buttons">
            <button className="btn btn-secondary" onClick={handleShortRest}>
              Short Rest
            </button>
          </Col>
          <Col md={{ span: 1, offset: 0 }} className="top-bar-buttons">
            <button className="btn btn-secondary" onClick={handleLongRest}>
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
            setCharName={setCharName}
            setCharClass={setCharClass}
            setCharLevel={setCharLevel}
            setCharBackground={setCharBackground}
            setCharRace={setCharRace}
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
            strength={strength}
            dexterity={dexterity}
            constitution={constitution}
            intelligence={intelligence}
            wisdom={wisdom}
            charisma={charisma}
          />
        </Row>
        <Row id="R3">
          <Col id="R3C1" sm="2">
            <Row id="R3C1r1">
              <Card>
                <CardBody>
                  <Form.Group as={Row}>
                    <Form.Label column sm="7">
                      Proficiency Bonus
                    </Form.Label>
                    <Col sm="5">
                      <Form.Control
                        plaintext={!editModeEnabled}
                        readOnly={!editModeEnabled}
                        defaultValue={profBonus}
                        onChange={
                          (event) => setProfBonus(+event.target.value) // TODO weird unvalidated cast to number. fix this
                        }
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm="7">
                      Inspiration
                    </Form.Label>
                    <Col sm="5">
                      <Form.Control
                        plaintext={!editModeEnabled}
                        readOnly={!editModeEnabled}
                        defaultValue={inspiration}
                        onChange={(event) => setInspiration(event.target.value)}
                      />
                    </Col>
                  </Form.Group>
                </CardBody>
              </Card>
            </Row>
          </Col>
          <Col id="R3C2">
            <SavingThrowBar />
            <Row id="R3C2r3"></Row>
          </Col>
          <Col id="R3C3">
            <SkillsBar />
          </Col>
        </Row>
        <Row id="R4">
          <Col id="R4C1" sm={4}>
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
          <Col id="R4C2">
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
  // return (
  // <>
  //   <div className="card character-sheet-card">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-auto">
  //           <div className="form-check form-switch">
  //             <input
  //               className="form-check-input"
  //               type="checkbox"
  //               role="switch"
  //               id="editModeToggle"
  //               onChange={handleToggleEditMode}
  //             ></input>
  //             <label>Edit Mode</label>
  //           </div>
  //         </div>
  // <div className="col-auto ms-auto">
  //   <button className="btn btn-secondary" onClick={handleShortRest}>
  //     Short Rest
  //   </button>
  // </div>
  // <div className="col-auto">
  //   <button className="btn btn-secondary" onClick={handleLongRest}>
  //     Long Rest
  //   </button>
  // </div>
  //       </div>
  //     </div>
  //     <BioBar
  //       editModeEnabled={editModeEnabled}
  //       setCharName={setCharName}
  //       setCharRace={setCharRace}
  //       setCharClass={setCharClass}
  //       setCharBackground={setCharBackground}
  //       setCharLevel={setCharLevel}
  //       charName={charName}
  //       charRace={charRace}
  //       charClass={charClass}
  //       charBackground={charBackground}
  //       charLevel={charLevel}
  //     />
  //     <AbilityBar
  //       editModeEnabled={editModeEnabled}
  //       setStrength={setStrength}
  //       setDexterity={setDexterity}
  //       setConstitution={setConstitution}
  //       setIntelligence={setIntelligence}
  //       setWisdom={setWisdom}
  //       setCharisma={setCharisma}
  //       strength={strength}
  //       dexterity={dexterity}
  //       constitution={constitution}
  //       intelligence={intelligence}
  //       wisdom={wisdom}
  //       charisma={charisma}
  //     />

  //     <div className="container">
  //       <div className="row">
  //         <div className="col-6">
  //           <div className="container card prof-card">
  //             <div className="row">
  //               <div className="col-3">
  //                 <label className="center-label">Proficiency Bonus: </label>
  //               </div>
  //               <div className="col">
  //                 <input
  //                   type="text"
  //                   className={formControlEditModeToggle()}
  //                   placeholder="Proficiency Bonus"
  //                   readOnly={!editModeEnabled}
  //                   onChange={(event) => setProfBonus(event.target.value)}
  //                   defaultValue={profBonus}
  //                 ></input>
  //               </div>
  //             </div>
  //             <div className="row">
  //               <div className="col-3">
  //                 <label>Inspiration: </label>
  //               </div>
  //               <div className="col">
  //                 <input
  //                   type="text"
  //                   className={formControlEditModeToggle()}
  //                   placeholder="Proficiency Bonus"
  //                   readOnly={!editModeEnabled}
  //                   onChange={(event) => setInspiration(event.target.value)}
  //                   defaultValue={inspiration}
  //                 ></input>
  //               </div>
  //             </div>

  //           </div>
  //         </div>
  //         <div className="col-6">
  //           <CombatStatBar
  //             baseAC={baseAC}
  //             acBonus={acBonus}
  //             shieldBonus={shieldBonus}
  //             speed={speed}
  //             initiativeBonus={initiativeBonus}
  //             dexterity={dexterity}
  //             setBaseAC={setBaseAC}
  //             setACBonus={setACBonus}
  //             setShieldBonus={setShieldBonus}
  //             setSpeed={setSpeed}
  //             setInitiativeBonus={setInitiativeBonus}
  //             editModeEnabled={editModeEnabled}
  //           />
  //         </div>
  //       </div>
  //       <div className="row">
  //       <div className="col">{/* holder for skills card */}</div>
  //               <div className="col">
  //                 <HitDiceList
  //                   currentHitDice={currentHitDice}
  //                   maxHitDice={maxHitDice}
  //                   setCurrentHitDice={setCurrentHitDice}
  //                   setMaxHitDice={setMaxHitDice}
  //                   editModeEnabled={editModeEnabled}
  //                 />
  //               </div>
  //             </div>
  //     </div>
  //   </div>
  // </>
  // );
};

export default CharacterSheet;
