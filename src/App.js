import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import CharacterSheet from "./components/CharacterSheet";

function App() {
  return (
    <div className="App">
      <header>
        <div className="app-header-text">
          <h1>Virtual Character Sheet</h1>
          <h4>by Alan Van Dyke</h4>
        </div>
        <div className="app-header-icons">
          <a href="https://github.com/Alan-Van-Dyke/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:alan.m.van.dyke@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </header>

      <main>
        <CharacterSheet/>
      </main>
    </div>
  );
}

export default App;
