import "../style/DeathSave.css";
import {
  faSkullCrossbones,
  faHeartPulse,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCharacterContext } from "../context/CharacterContext";

const DeathSave: React.FC<{ editModeEnabled: boolean }> = ({
  editModeEnabled,
}) => {
  const { state, dispatch } = useCharacterContext();

  const resetSaves = () => {
    dispatch({
      type: "CHANGE_DEATH_SAVE_SUCCESSES",
      payload: { newDeathSaveSuccesses: 0 },
    });

    dispatch({
      type: "CHANGE_DEATH_SAVE_FAILS",
      payload: { newDeathSaveFails: 0 },
    });
  };

  const handleClickSuccess = (saveIdx: number) => {
    if (saveIdx === state.deathSaveSuccesses + 1) {
      dispatch({
        type: "CHANGE_DEATH_SAVE_SUCCESSES",
        payload: { newDeathSaveSuccesses: saveIdx },
      });
    }
    if (saveIdx === state.deathSaveSuccesses) {
      dispatch({
        type: "CHANGE_DEATH_SAVE_SUCCESSES",
        payload: { newDeathSaveSuccesses: saveIdx - 1 },
      });
    }
  };

  const handleClickFail = (saveIdx: number) => {
    if (saveIdx === state.deathSaveFails + 1) {
      dispatch({
        type: "CHANGE_DEATH_SAVE_FAILS",
        payload: { newDeathSaveFails: saveIdx },
      });
    }
    if (saveIdx === state.deathSaveFails) {
      dispatch({
        type: "CHANGE_DEATH_SAVE_FAILS",
        payload: { newDeathSaveFails: saveIdx - 1 },
      });
    }
  };

  function getDeathSaveInputClass(
    idx: number,
    counter: number,
    isSuccess: boolean
  ) {
    if (idx === counter) {
      return "death-save-clickable";
    }
    if (idx > counter) {
      return "death-save-inactive";
    }
    if (isSuccess) {
      return "death-save-success";
    } else {
      return "death-save-fail";
    }
  }

  return (
    <div className="death-save-card">
      <div className="death-save-reset-container">
        <button
          className="death-save-reset-btn"
          onClick={() => {
            resetSaves();
          }}
        >
          <FontAwesomeIcon icon={faRotateLeft}></FontAwesomeIcon>
        </button>
      </div>
      <h4>Death Saving Throws</h4>
      <hr></hr>
      <p>Successes</p>
      <div className="death-save-btn-row">
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={state.deathSaveSuccesses > 0}
            onChange={() => {
              handleClickSuccess(1);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faHeartPulse}
            className={getDeathSaveInputClass(
              0,
              state.deathSaveSuccesses,
              true
            )}
          />
        </label>
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={state.deathSaveSuccesses > 1}
            onChange={() => {
              handleClickSuccess(2);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faHeartPulse}
            className={getDeathSaveInputClass(
              1,
              state.deathSaveSuccesses,
              true
            )}
          />
        </label>
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={state.deathSaveSuccesses > 2}
            onChange={() => {
              handleClickSuccess(3);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faHeartPulse}
            className={getDeathSaveInputClass(
              2,
              state.deathSaveSuccesses,
              true
            )}
          />
        </label>
      </div>
      <hr></hr>
      <p>Fails</p>
      <div className="death-save-btn-row">
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={state.deathSaveFails > 0}
            onChange={() => {
              handleClickFail(1);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faSkullCrossbones}
            className={getDeathSaveInputClass(0, state.deathSaveFails, false)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={state.deathSaveFails > 1}
            onChange={() => {
              handleClickFail(2);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faSkullCrossbones}
            className={getDeathSaveInputClass(1, state.deathSaveFails, false)}
          />
        </label>
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={state.deathSaveFails > 2}
            onChange={() => {
              handleClickFail(3);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faSkullCrossbones}
            className={getDeathSaveInputClass(2, state.deathSaveFails, false)}
          />
        </label>
      </div>
    </div>
  );
};

export default DeathSave;
