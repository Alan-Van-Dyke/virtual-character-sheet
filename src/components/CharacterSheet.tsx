import "../style/CharacterSheet.css";
import { useState, useEffect } from "react";
import ToggleSlider from "./ToggleSlider";
import SheetTabs from "./SheetTabs";
import Character from "../model/Character";
import NotesTab from "./NotesTab";
import {
  faUser,
  faWandSparkles,
  faSackDollar,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CharacterTab from "./CharacterTab";

const CharacterSheet = () => {
  const [playerCharacter, setPlayerCharacter] = useState(() => {
    const savedCharacter = sessionStorage.getItem("playerCharacter");
    return savedCharacter !== null
      ? JSON.parse(savedCharacter)
      : new Character("", "", "", "", "", "", "", [
          { title: "", content: "" },
          { title: "", content: "" },
          { title: "", content: "" },
          { title: "", content: "" },
        ]);
  });

  useEffect(() => {
    sessionStorage.setItem("playerCharacter", JSON.stringify(playerCharacter));
  }, [playerCharacter]);

  const tabs = [
    {
      label: "Character",
      icon: <FontAwesomeIcon icon={faUser} />,
      key: 0,
      content: (
        <CharacterTab
          playerCharacter={playerCharacter}
          setPlayerCharacter={setPlayerCharacter}
        />
      ),
    },
    {
      label: "Abilities",
      icon: <FontAwesomeIcon icon={faWandSparkles} />,
      key: 1,
      content: <div>Abilities</div>,
    },
    {
      label: "Inventory",
      icon: <FontAwesomeIcon icon={faSackDollar} />,
      key: 2,
      content: <div>Inventory</div>,
    },
    {
      label: "Notes",
      icon: <FontAwesomeIcon icon={faPencil} />,
      key: 3,
      content: (
        <NotesTab
          charNotes={playerCharacter.characterNotes}
          setCharNotes={(newNotes: { title: string; content: string }[]) => {
            var newChar = { ...playerCharacter };
            newChar.characterNotes = newNotes;
            setPlayerCharacter(newChar);
          }}
        ></NotesTab>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  function updateMarginNotes(event: React.ChangeEvent<HTMLTextAreaElement>) {
    var newChar = { ...playerCharacter };
    newChar.marginNotes = event.target.value != null ? event.target.value : "";
    setPlayerCharacter(newChar);
    console.log(event.target.value);
  }

  return (
    <div className="character-sheet">
      <div className="character-sheet-main">
        <div className="character-sheet-card character-sheet-content">
          <div className="top-bar-container">
            <SheetTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            ></SheetTabs>
            <div className="rest-btn-container">
              <button className="rest-btn">Short Rest</button>
              <button className="rest-btn">Long Rest</button>
            </div>
          </div>
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
