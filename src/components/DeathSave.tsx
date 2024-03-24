import "../style/DeathSave.css";
import {
  faSkullCrossbones,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Character from "../model/Character";

interface DeathSaveProps {
  playerCharacter: Character;
  setPlayerCharacter: (newCharacter: Character) => void;
}

const DeathSave = ({ playerCharacter, setPlayerCharacter }: DeathSaveProps) => {
  const [failedSaves, setFailedSaves] = useState([false, false, false]);
  const [successfulSaves, setSuccessfulSaves] = useState([false, false, false]);

  const handleClickSuccess = (saveIdx: number) => {
    var newSaveArray = [...successfulSaves];
    newSaveArray[saveIdx] = !successfulSaves[saveIdx];
    setSuccessfulSaves(newSaveArray);
  };

  const handleClickFail = (saveIdx: number) => {
    var newSaveArray = [...failedSaves];
    newSaveArray[saveIdx] = !failedSaves[saveIdx];
    setFailedSaves(newSaveArray);
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
            checked={successfulSaves[0]}
            onChange={() => {
              handleClickSuccess(0);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faHeartPulse}
            className={
              successfulSaves[0] ? "death-save-success" : "death-save-inactive"
            }
          />
        </label>
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={successfulSaves[1]}
            onChange={() => {
              handleClickSuccess(1);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faHeartPulse}
            className={
              successfulSaves[1] ? "death-save-success" : "death-save-inactive"
            }
          />
        </label>
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={successfulSaves[2]}
            onChange={() => {
              handleClickSuccess(2);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faHeartPulse}
            className={
              successfulSaves[2] ? "death-save-success" : "death-save-inactive"
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
            checked={failedSaves[0]}
            onChange={() => {
              handleClickFail(0);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faSkullCrossbones}
            className={
              failedSaves[0] ? "death-save-fail" : "death-save-inactive"
            }
          />
        </label>
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={failedSaves[1]}
            onChange={() => {
              handleClickFail(1);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faSkullCrossbones}
            className={
              failedSaves[1] ? "death-save-fail" : "death-save-inactive"
            }
          />
        </label>
        <label>
          <input
            type="checkbox"
            className="death-save-input"
            checked={failedSaves[2]}
            onChange={() => {
              handleClickFail(2);
            }}
          ></input>
          <FontAwesomeIcon
            icon={faSkullCrossbones}
            className={
              failedSaves[2] ? "death-save-fail" : "death-save-inactive"
            }
          />
        </label>
      </div>
    </div>
  );
};

export default DeathSave;
