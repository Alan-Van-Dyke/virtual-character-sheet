import { useState } from "react";
import AbilityBar from "./AbilityBar";
import BioBar from "./BioBar";

interface CharacterSheetProps {}

const CharacterSheet = () => {
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  const handleToggleEditMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditModeEnabled(event.target.checked);
  };

  return (
    <>
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
      <div className="card character-sheet-card">
        <BioBar editModeEnabled={editModeEnabled} />
        <AbilityBar editModeEnabled={editModeEnabled} />
      </div>
    </>
  );
};

export default CharacterSheet;
