import "../style/CharacterSheet.css";
import { useState, useEffect } from "react";
import SheetTabs from "./SheetTabs";
import NotesTab from "./NotesTab";
import {
  faUser,
  faWandSparkles,
  faSackDollar,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CharacterTab from "./CharacterTab";
import { useCharacterContext } from "../context/CharacterContext";

export function calculateModifier(stat: number) {
  return Math.floor((stat - 10) / 2);
}
const CharacterSheet = () => {
  const { state, dispatch } = useCharacterContext();

  const tabs = [
    {
      label: "Character",
      icon: <FontAwesomeIcon icon={faUser} />,
      key: 0,
      content: <CharacterTab></CharacterTab>,
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
      content: <NotesTab></NotesTab>,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

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
          value={state.marginNotes}
          onChange={(event) =>
            dispatch({
              type: "CHANGE_MARGIN_NOTES",
              payload: { newMarginNotes: event.target.value },
            })
          }
        ></textarea>
      </div>
    </div>
  );
};

export default CharacterSheet;
