import { useState } from "react";
import AbilityBar from "./AbilityBar";
import BioBar from "./BioBar";
import HitDiceList from "./HitDiceList";
import CombatStatBar from "./CombatStatBar";

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

  const [profBonus, setProfBonus] = useState("2");
  const [inspiration, setInspiration] = useState("0");

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
  const [initiativeBonus, setInitiativeBonus] = useState(Math.floor((dexterity - 10) / 2));

  const handleToggleEditMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditModeEnabled(event.target.checked);
  };

  const handleShortRest = (event: React.MouseEvent) => {
    console.log("SHORT REST");
  };

  const handleLongRest = (event: React.MouseEvent) => {
    console.log("LONG REST");
  };

  const formControlEditModeToggle = () => {
    return editModeEnabled ? "form-control" : "form-control-plaintext";
  };

  return (
    <>
      <div className="card character-sheet-card">
        <div className="container">
          <div className="row">
            <div className="col-auto">
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
            </div>
            <div className="col-auto ms-auto">
              <button className="btn btn-secondary" onClick={handleShortRest}>
                Short Rest
              </button>
            </div>
            <div className="col-auto">
              <button className="btn btn-secondary" onClick={handleLongRest}>
                Long Rest
              </button>
            </div>
          </div>
        </div>
        <BioBar
          editModeEnabled={editModeEnabled}
          setCharName={setCharName}
          setCharRace={setCharRace}
          setCharClass={setCharClass}
          setCharBackground={setCharBackground}
          setCharLevel={setCharLevel}
          charName={charName}
          charRace={charRace}
          charClass={charClass}
          charBackground={charBackground}
          charLevel={charLevel}
        />
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

        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="container card prof-card">
                <div className="row">
                  <div className="col-3">
                    <label className="center-label">Proficiency Bonus: </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className={formControlEditModeToggle()}
                      placeholder="Proficiency Bonus"
                      readOnly={!editModeEnabled}
                      onChange={(event) => setProfBonus(event.target.value)}
                      defaultValue={profBonus}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <label>Inspiration: </label>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className={formControlEditModeToggle()}
                      placeholder="Proficiency Bonus"
                      readOnly={!editModeEnabled}
                      onChange={(event) => setInspiration(event.target.value)}
                      defaultValue={inspiration}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <HitDiceList
                    currentHitDice={currentHitDice}
                    maxHitDice={maxHitDice}
                    setCurrentHitDice={setCurrentHitDice}
                    setMaxHitDice={setMaxHitDice}
                    editModeEnabled={editModeEnabled}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
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
            </div>
            <div className="col">{/* holder for AC, health card */}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterSheet;
