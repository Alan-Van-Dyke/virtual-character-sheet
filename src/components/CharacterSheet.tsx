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

export function calculateModifier(stat: number) {
  return Math.floor((stat - 10) / 2);
}
const CharacterSheet = () => {
  const [playerCharacter, setPlayerCharacter] = useState(() => {
    const savedCharacter = sessionStorage.getItem("playerCharacter");
    return savedCharacter !== null
      ? JSON.parse(savedCharacter)
      : new Character(
          "Not Gork",
          "Warlock (Genie)",
          "3",
          "Half-Elf",
          "Ruined",
          "Some margin notes",
          [
            { title: "Backstory", content: "cool dude" },
            { title: "Session notes", content: "1- started\n2- died. unlucky" },
            { title: "Places and People", content: "idk nobody takes notes" },
            { title: "Quests", content: "revive party" },
          ],
          2,
          new Map<string, number>([
            ["Strength", 6],
            ["Dexterity", 16],
            ["Constitution", 14],
            ["Intelligence", 10],
            ["Wisdom", 12],
            ["Charisma", 18],
          ]),
          new Map<string, { attribute: string; value: number }>([
            ["Acrobatics", { attribute: "Dexterity", value: 0 }],
            ["Animal Handling", { attribute: "Wisdom", value: 0 }],
            ["Arcana", { attribute: "Intelligence", value: 1 }],
            ["Athletics", { attribute: "Strength", value: 0 }],
            ["Deception", { attribute: "Charisma", value: 2 }],
            ["History", { attribute: "Intelligence", value: 0 }],
            ["Insight", { attribute: "Wisdom", value: 0 }],
            ["Intimidation", { attribute: "Charisma", value: 0 }],
            ["Investigation", { attribute: "Intelligence", value: 1 }],
            ["Medicine", { attribute: "Wisdom", value: 0 }],
            ["Nature", { attribute: "Intelligence", value: 0 }],
            ["Perception", { attribute: "Wisdom", value: 1 }],
            ["Performance", { attribute: "Charisma", value: 0 }],
            ["Persuasion", { attribute: "Charisma", value: 1 }],
            ["Religion", { attribute: "Intelligence", value: 1 }],
            ["Sleight of Hand", { attribute: "Dexterity", value: 0 }],
            ["Stealth", { attribute: "Dexterity", value: 1 }],
            ["Survival", { attribute: "Wisdom", value: 1 }],
          ]),
          new Map<string, number>([
            ["Strength", 0],
            ["Dexterity", 0],
            ["Constitution", 0],
            ["Intelligence", 0],
            ["Wisdom", 1],
            ["Charisma", 1],
          ])
        );
  });

  useEffect(() => {
    sessionStorage.setItem("playerCharacter", JSON.stringify(playerCharacter));
  }, [playerCharacter]);

  useEffect(() => {
    document.title = playerCharacter.name
      ? playerCharacter.name + " - Character Sheet"
      : "Virtual Character Sheet";
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
