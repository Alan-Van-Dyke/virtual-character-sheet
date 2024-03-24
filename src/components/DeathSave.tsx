import "../style/DeathSave.css";
import {
  faSkullCrossbones,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCharacterContext } from "../context/CharacterContext";

const DeathSave = () => {

  const { state, dispatch } = useCharacterContext();

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

  return (
    <div className="death-save-card">
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
            className={
              state.deathSaveSuccesses > 0
                ? "death-save-success"
                : "death-save-inactive"
            }
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
            className={
              state.deathSaveSuccesses > 1
                ? "death-save-success"
                : "death-save-inactive"
            }
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
            className={
              state.deathSaveSuccesses > 2
                ? "death-save-success"
                : "death-save-inactive"
            }
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
            className={
              state.deathSaveFails > 0
                ? "death-save-fail"
                : "death-save-inactive"
            }
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
            className={
              state.deathSaveFails > 1
                ? "death-save-fail"
                : "death-save-inactive"
            }
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
            className={
              state.deathSaveFails > 2
                ? "death-save-fail"
                : "death-save-inactive"
            }
          />
        </label>
      </div>
    </div>
  );
};

export default DeathSave;
