import Character from "../model/Character";
import "../style/CharacterTab.css";
import ToggleSlider from "./ToggleSlider";
import { useState } from "react";

interface CharacterTabProps {
  playerCharacter: Character;
  setPlayerCharacter: (playerCharacter: Character) => void;
}

const CharacterTab = ({
  playerCharacter,
  setPlayerCharacter,
}: CharacterTabProps) => {
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  function toggleEditMode(event: React.ChangeEvent<HTMLInputElement>) {
    setEditModeEnabled(event.target.checked);
  }

  return (
    <div className="character-container">
      <div className="edit-mode-toggle-container">
        <ToggleSlider handleToggle={toggleEditMode}></ToggleSlider>
        <p>Edit Mode</p>
      </div>
      {!editModeEnabled ? (
        <div className="character-name-container">
          <h1>Player Name</h1>
        </div>
      ) : (
        //Edit Mode Enabled
        <div>testing</div>
      )}
    </div>
  );
};

export default CharacterTab;
