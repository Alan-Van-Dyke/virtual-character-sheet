import Character from "../model/Character";
import "../style/CharacterTab.css";
import ToggleSlider from "./ToggleSlider";
import { useEffect, useState } from "react";

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
        <>
          <div className="character-picture-container">This will be an image</div>
          <div className="character-info-container">
            <h1 className="name-title">{playerCharacter.name || "Your name here"}</h1>

            <div className="character-info-body">
              <div className="character-info-col-a">
                <div className="character-info-attribute-box">
                  <h2>{playerCharacter.charClass || "Character Class"}</h2>
                  <hr className="character-info-attribute-baseline"></hr>
                  <p className="character-info-attribute-label">
                    <i>Class</i>
                  </p>
                </div>
                <div className="character-info-attribute-box">
                  <h2>{playerCharacter.race || "Character Race"}</h2>
                  <hr className="character-info-attribute-baseline"></hr>
                  <p className="character-info-attribute-label">
                    <i>Race</i>
                  </p>
                </div>
              </div>
              <div className="character-info-col-a">
                <div className="character-info-attribute-box">
                  <h2>{playerCharacter.level || "Character Level"}</h2>
                  <hr className="character-info-attribute-baseline"></hr>
                  <p className="character-info-attribute-label">
                    <i>Level</i>
                  </p>
                </div>
                <div className="character-info-attribute-box">
                  <h2>{playerCharacter.background || "Character Background"}</h2>
                  <hr className="character-info-attribute-baseline"></hr>
                  <p className="character-info-attribute-label">
                    <i>Background</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        //Edit Mode Enabled
        <div>testing</div>
      )}
    </div>
  );
};

export default CharacterTab;
