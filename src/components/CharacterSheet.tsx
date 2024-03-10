import "../style/CharacterSheet.css";
import { useState, useEffect } from "react";
import ToggleSlider from "./ToggleSlider";
import SheetTabs from "./SheetTabs";
import Character from "../model/Character";
import {
  faUser,
  faWandSparkles,
  faSackDollar,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterSheet = () => {
  const [playerCharacter, setPlayerCharacter] = useState(() => {
    const savedCharacter = localStorage.getItem("playerCharacter");
    return savedCharacter !== null
      ? JSON.parse(savedCharacter)
      : new Character("", "", "", "", "", "", "");
  });

  useEffect(() => {
    localStorage.setItem("playerCharacter", JSON.stringify(playerCharacter));
  }, [playerCharacter]);

  const [editModeEnabled, setEditModeEnabled] = useState(false);

  const tabs = [
    {
      label: "Character",
      icon: <FontAwesomeIcon icon={faUser} />,
      id: 0,
      content: <div>Character Info</div>,
    },
    {
      label: "Abilities",
      icon: <FontAwesomeIcon icon={faWandSparkles} />,
      id: 1,
      content: <div>Abilities</div>,
    },
    {
      label: "Inventory",
      icon: <FontAwesomeIcon icon={faSackDollar} />,
      id: 2,
      content: <div>Inventory</div>,
    },
    {
      label: "Notes",
      icon: <FontAwesomeIcon icon={faPencil} />,
      id: 3,
      content: <div>Notes</div>,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  function handleEditModeToggle(event: React.ChangeEvent<HTMLInputElement>) {
    setEditModeEnabled(event.target.checked);
    console.log("changed edit mode to: " + event.target.checked);
  }

  function updateMarginNotes(event: React.ChangeEvent<HTMLTextAreaElement>) {
    var newChar = { ...playerCharacter };
    newChar.marginNotes = event.target.value != null ? event.target.value : "";
    setPlayerCharacter(newChar);
    console.log(event.target.value);
  }

  return (
    <div className="character-sheet">
      <div className="character-sheet-main">
        <div className="character-sheet-card character-sheet-controls">
          <div className="edit-mode-container">
            <div className="edit-mode-toggle">
              <ToggleSlider handleToggle={handleEditModeToggle} />
            </div>
            <div>
              <p>Edit Mode</p>
            </div>
          </div>
          <div className="rest-btn-container">
            <button className="rest-btn">Short Rest</button>
            <button className="rest-btn">Long Rest</button>
          </div>
        </div>
        <div className="character-sheet-card character-sheet-content">
          <SheetTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></SheetTabs>
          <div className="character-sheet-tab">{activeTab.content}</div>
        </div>
      </div>
      <div className="character-sheet-margin">
        <textarea
          className="margin-notes"
          placeholder="Add some notes in the margin..."
          value={playerCharacter.marginNotes}
          onChange={updateMarginNotes}
        ></textarea>
      </div>
    </div>
  );
};

export default CharacterSheet;
