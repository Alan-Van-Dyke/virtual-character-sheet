import "../style/CharacterTab.css";
import StatBar from "./StatBar";
import ToggleSlider from "./ToggleSlider";
import DeathSave from "./DeathSave";
import { useState } from "react";
import HitDice from "./HitDice";
import Health from "./Health";
import CombatStats from "./CombatStats";

import { useCharacterContext } from "../context/CharacterContext";
import CharacterImage from "./CharacterImage";
import CharacterInfo from "./CharacterInfo";

const CharacterTab = () => {
  const [editModeEnabled, setEditModeEnabled] = useState(false);
  const { state, dispatch } = useCharacterContext();

  function toggleEditMode(event: React.ChangeEvent<HTMLInputElement>) {
    setEditModeEnabled(event.target.checked);
  }

  return (
    <div className="character-container">
      <div className="edit-mode-toggle-container">
        <ToggleSlider handleToggle={toggleEditMode}></ToggleSlider>
        <p>Edit Mode</p>
      </div>

      <div className="character-bio-container">
        <CharacterImage></CharacterImage>
        <CharacterInfo editModeEnabled={editModeEnabled}></CharacterInfo>
      </div>

      <StatBar editModeEnabled={editModeEnabled}></StatBar>

      <div className="other-stat-bar">
        <DeathSave editModeEnabled={editModeEnabled}></DeathSave>
        <HitDice editModeEnabled={editModeEnabled}></HitDice>
        <Health editModeEnabled={editModeEnabled}></Health>
        <CombatStats editModeEnabled={editModeEnabled}></CombatStats>
      </div>
    </div>
  );
};

export default CharacterTab;
