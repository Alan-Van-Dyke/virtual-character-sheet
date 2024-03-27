import "../style/HitDice.css";
import { useCharacterContext } from "../context/CharacterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const HitDice: React.FC<{ editModeEnabled: boolean }> = ({
  editModeEnabled,
}) => {
  const { state, dispatch } = useCharacterContext();

  function resetHitDice() {
    state.hitDice.forEach((hitDie) => {
      dispatch({
        type: "CHANGE_HIT_DICE",
        payload: {
          type: hitDie.type,
          newMax: hitDie.max,
          newCurrent: hitDie.max,
        },
      });
    });
  }

  return (
    <div className="hit-dice-container">
      <div className="hit-dice-reset-container">
        <button
          className="hit-dice-reset-btn"
          onClick={() => {
            resetHitDice();
          }}
          disabled={editModeEnabled}
        >
          <FontAwesomeIcon icon={faRotateLeft}></FontAwesomeIcon>
        </button>
      </div>
      <h4>Hit Dice</h4>
      <hr className="hit-dice-divider"></hr>
      {state.hitDice.filter((hitDie) => hitDie.max > 0).length < 1 &&
        !editModeEnabled && <p>Add hit dice in edit mode.</p>}
      <div className="hit-dice-list">
        {state.hitDice.map((hitDie, index) => {
          if (hitDie.max > 0 || editModeEnabled) {
            return (
              <div className="hit-die-list-item" key={"hit-die-" + index}>
                <p>{hitDie.type}</p>
                {editModeEnabled ? (
                  <div className="hit-die-edit-group">
                    <input
                      type="text"
                      className="hit-die-input"
                      defaultValue={hitDie.current}
                      onChange={(event) => {
                        if (
                          !Number.isNaN(event.target.value) &&
                          Number(event.target.value) >= 0
                        ) {
                          dispatch({
                            type: "CHANGE_HIT_DICE",
                            payload: {
                              type: hitDie.type,
                              newCurrent: Number(event.target.value),
                              newMax: hitDie.max,
                            },
                          });
                        }
                      }}
                    ></input>
                    <p>/</p>
                    <input
                      type="text"
                      className="hit-die-input"
                      defaultValue={hitDie.max}
                      onChange={(event) => {
                        if (
                          !Number.isNaN(event.target.value) &&
                          Number(event.target.value) >= 0
                        ) {
                          dispatch({
                            type: "CHANGE_HIT_DICE",
                            payload: {
                              type: hitDie.type,
                              newMax: Number(event.target.value),
                              newCurrent: hitDie.current,
                            },
                          });
                        }
                      }}
                    ></input>
                  </div>
                ) : (
                  <div className="hit-die-value-group">
                    <p>{hitDie.current + " / " + hitDie.max}</p>
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
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HitDice;
