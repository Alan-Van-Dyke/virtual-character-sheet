import React from "react";
import "../style/CharacterSheet.css";
import MarginNotes from "./MarginNotes";

const CharacterSheet = () => {
  return (
    <div className="character-sheet-container">
      <div className="character-sheet-card">card here</div>
      <MarginNotes></MarginNotes>
    </div>
  );
};

export default CharacterSheet;
