import "../style/Health.css";
import { useCharacterContext } from "../context/CharacterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Health: React.FC<{ editModeEnabled: boolean }> = ({
  editModeEnabled,
}) => {
  const { state, dispatch } = useCharacterContext();

  const [isAddTempPopupVisible, setIsAddTempPopupVisible] = useState(false);
  const [addTempPopupInput, setAddTempPopupInput] = useState("");

  const [isHealPopupVisible, setIsHealPopupVisible] = useState(false);
  const [healPopupInput, setHealPopupInput] = useState("");

  const [isDamagePopupVisible, setIsDamagePopupVisible] = useState(false);
  const [damagePopupInput, setDamagePopupInput] = useState("");

  function handleHeal() {
    if (!Number.isNaN(healPopupInput) && Number(healPopupInput) >= 0) {
      const healAmount = Number(healPopupInput);
      if (state.currentHitPoints + healAmount > state.maxHitPoints) {
        dispatch({
          type: "CHANGE_CURRENT_HIT_POINTS",
          payload: {
            newCurrentHitPoints: state.maxHitPoints,
          },
        });
      } else {
        dispatch({
          type: "CHANGE_CURRENT_HIT_POINTS",
          payload: {
            newCurrentHitPoints: state.currentHitPoints + healAmount,
          },
        });
      }
    }
    setIsHealPopupVisible(false);
  }

  function handleDamage() {
    if (!Number.isNaN(damagePopupInput) && Number(damagePopupInput) >= 0) {
      var damage = Number(damagePopupInput);
      if (state.tempHitPoints - damage >= 0) {
        dispatch({
          type: "CHANGE_TEMP_HIT_POINTS",
          payload: {
            newTempHitPoints: state.tempHitPoints - damage,
          },
        });
        damage = 0;
      } else {
        damage = damage - state.tempHitPoints;
        dispatch({
          type: "CHANGE_TEMP_HIT_POINTS",
          payload: {
            newTempHitPoints: 0,
          },
        });
      }

      if (state.currentHitPoints - damage > 0) {
        dispatch({
          type: "CHANGE_CURRENT_HIT_POINTS",
          payload: {
            newCurrentHitPoints: state.currentHitPoints - damage,
          },
        });
      } else {
        dispatch({
          type: "CHANGE_CURRENT_HIT_POINTS",
          payload: {
            newCurrentHitPoints: 0,
          },
        });
      }
    }
    setIsDamagePopupVisible(false);
  }

  return (
    <div className="health-container">
      <div className="hitpoints-top-bar">
        <div className="max-hitpoints-bar">
          <p className="max-hitpoints-label">
            <i>Max Hit Points: </i>
          </p>
          {editModeEnabled ? (
            <input
              type="text"
              className="max-hitpoints-input"
              defaultValue={state.maxHitPoints}
              onBlur={(event) => {
                if (
                  !Number.isNaN(event.target.value) &&
                  Number(event.target.value) >= 0
                ) {
                  dispatch({
                    type: "CHANGE_MAX_HIT_POINTS",
                    payload: { newMaxHitPoints: Number(event.target.value) },
                  });

                  if (Number(event.target.value) < state.currentHitPoints) {
                    dispatch({
                      type: "CHANGE_CURRENT_HIT_POINTS",
                      payload: {
                        newCurrentHitPoints: Number(event.target.value),
                      },
                    });
                  }
                }
              }}
            ></input>
          ) : (
            <p className="max-hitpoints-value">{state.maxHitPoints}</p>
          )}
        </div>
        <div className="health-btn-container">
          <button
            className="health-btn btn-temp"
            title="Add temporary hit points"
            onClick={(event) => {
              setIsAddTempPopupVisible(true);
            }}
            disabled={editModeEnabled}
          >
            <FontAwesomeIcon icon={faShieldHeart} />
          </button>
          <button
            className="health-btn btn-heal"
            title="Heal"
            onClick={(event) => {
              setIsHealPopupVisible(true);
            }}
            disabled={editModeEnabled}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            className="health-btn btn-damage"
            title="Take damage"
            onClick={(event) => {
              setIsDamagePopupVisible(true);
            }}
            disabled={editModeEnabled}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
      <h4>Current Hit Points</h4>
      {editModeEnabled ? (
        <input
          type="text"
          className="hit-points-input"
          defaultValue={state.currentHitPoints}
          onBlur={(event) => {
            if (
              !Number.isNaN(event.target.value) &&
              Number(event.target.value) >= 0 &&
              Number(event.target.value) <= state.maxHitPoints
            ) {
              dispatch({
                type: "CHANGE_CURRENT_HIT_POINTS",
                payload: {
                  newCurrentHitPoints: Number(event.target.value),
                },
              });
            }
          }}
        ></input>
      ) : (
        <h1>{state.currentHitPoints}</h1>
      )}
      <hr></hr>
      <h4>Temporary Hit Points</h4>
      {editModeEnabled ? (
        <input
          type="text"
          className="hit-points-input"
          defaultValue={state.tempHitPoints}
          onBlur={(event) => {
            if (
              !Number.isNaN(event.target.value) &&
              Number(event.target.value) >= 0
            ) {
              dispatch({
                type: "CHANGE_TEMP_HIT_POINTS",
                payload: {
                  newTempHitPoints: Number(event.target.value),
                },
              });
            }
          }}
        ></input>
      ) : (
        <h1>{state.tempHitPoints}</h1>
      )}

      {isAddTempPopupVisible && (
        <div className="popup-container">
          <div className="popup">
            <p>Set temporary hitpoints</p>
            <input
              type="text"
              onChange={(event) => {
                setAddTempPopupInput(event.target.value);
              }}
            ></input>
            <div className="popup-btn-container">
              <button
                className="popup-confirm-btn"
                onClick={(event) => {
                  if (
                    !Number.isNaN(addTempPopupInput) &&
                    Number(addTempPopupInput) >= 0
                  ) {
                    dispatch({
                      type: "CHANGE_TEMP_HIT_POINTS",
                      payload: { newTempHitPoints: Number(addTempPopupInput) },
                    });
                  }
                  setIsAddTempPopupVisible(false);
                }}
              >
                Set
              </button>
              <button
                className="popup-cancel-btn"
                onClick={(event) => {
                  setIsAddTempPopupVisible(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isHealPopupVisible && (
        <div className="popup-container">
          <div className="popup">
            <p>Heal Hit Points</p>
            <input
              type="text"
              onChange={(event) => {
                setHealPopupInput(event.target.value);
              }}
            ></input>
            <div className="popup-btn-container">
              <button className="popup-confirm-btn" onClick={handleHeal}>
                Heal
              </button>
              <button
                className="popup-cancel-btn"
                onClick={(event) => {
                  setIsHealPopupVisible(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isDamagePopupVisible && (
        <div className="popup-container">
          <div className="popup">
            <p>Take Damage</p>
            <input
              type="text"
              onChange={(event) => {
                setDamagePopupInput(event.target.value);
              }}
            ></input>
            <div className="popup-btn-container">
              <button className="popup-confirm-btn" onClick={handleDamage}>
                Take Damage
              </button>
              <button
                className="popup-cancel-btn"
                onClick={(event) => {
                  setIsDamagePopupVisible(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Health;
