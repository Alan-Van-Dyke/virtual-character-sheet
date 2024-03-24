import "../style/Health.css";
import { useCharacterContext } from "../context/CharacterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

const Health = () => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className="health-container">
      <div className="hitpoints-top-bar">
        <div className="max-hitpoints-bar">
          <p className="max-hitpoints-label">
            <i>Max Hit Points: </i>
          </p>
          <p className="max-hitpoints-value">{state.maxHitPoints}</p>
        </div>
        <div className="health-btn-container">
          <button
            className="health-btn btn-temp"
            title="Add temporary hit points"
          >
            <FontAwesomeIcon icon={faShieldHeart} />
          </button>
          <button className="health-btn btn-heal" title="Heal">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="health-btn btn-damage" title="Take damage">
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
      <h4>Current Hit Points</h4>
      <h1>{state.currentHitPoints}</h1>
      <hr></hr>
      <h4>Temporary Hit Points</h4>
      <h1>{state.tempHitPoints}</h1>
    </div>
  );
};

export default Health;
