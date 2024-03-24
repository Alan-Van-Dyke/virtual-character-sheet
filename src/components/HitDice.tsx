import "../style/HitDice.css";
import { useCharacterContext } from "../context/CharacterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const HitDice = () => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className="hit-dice-container">
      <h4>Hit Dice</h4>
      <hr className="hit-dice-divider"></hr>
      <div className="hit-dice-list">
        {state.hitDice.map((hitDie, index) => {
          if (hitDie.max > 0) {
            return (
              <div className="hit-die-list-item" key={"hit-die-" + index}>
                <p>{hitDie.type}</p>
                <div className="hit-die-value-group">
                  <p>{hitDie.current + "/" + hitDie.max}</p>
                  <button
                    className="hit-die-btn btn-up"
                    onClick={(event) => {
                      if (hitDie.current < hitDie.max) {
                        dispatch({
                          type: "CHANGE_HIT_DICE",
                          payload: {
                            type: hitDie.type,
                            newCurrent: hitDie.current + 1,
                            newMax: hitDie.max,
                          },
                        });
                      }
                    }}
                    title="Restore"
                  >
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  </button>
                  <button
                    className="hit-die-btn btn-down"
                    onClick={(event) => {
                      console.log(
                        "TRYING " + hitDie.current + " on " + hitDie.type
                      );
                      if (hitDie.current > 0) {
                        dispatch({
                          type: "CHANGE_HIT_DICE",
                          payload: {
                            type: hitDie.type,
                            newCurrent: hitDie.current - 1,
                            newMax: hitDie.max,
                          },
                        });
                      }
                    }}
                    title="Spend"
                  >
                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HitDice;
