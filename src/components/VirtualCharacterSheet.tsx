import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/VirtualCharacterSheet.css";
import CharacterSheet from "./CharacterSheet";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CharacterContextProvider } from "../context/CharacterContext";

const VirtualCharacterSheet = () => {
  return (
    <CharacterContextProvider>
      <div className="header-div">
        <div className="header-text">
          <h1>Virtual Character Sheet</h1>
          <h4 className="vcs-title">by Alan Van Dyke</h4>
        </div>
        <div className="header-icons">
          <a
            href="https://github.com/Alan-Van-Dyke/virtual-character-sheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <hr></hr>

      <CharacterSheet></CharacterSheet>
    </CharacterContextProvider>
  );
};

export default VirtualCharacterSheet;
