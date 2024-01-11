import { useState } from "react";

interface AbilityBarProps {
  editModeEnabled: boolean;
}

const AbilityBar = ({ editModeEnabled }: AbilityBarProps) => {
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col card ability-box">
          <h5>
            <b>Strength</b>
          </h5>
          <input
            type="number"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " text-center ability-input"
            }
            readOnly={!editModeEnabled}
            onChange={(event) => setStrength(event.target.valueAsNumber)}
            defaultValue={strength}
          ></input>
          <h5> {Math.floor((strength - 10) / 2)} </h5>
        </div>

        <div className="col card ability-box">
          <h5>
            <b>Dexterity</b>
          </h5>
          <input
            type="number"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " text-center ability-input"
            }
            readOnly={!editModeEnabled}
            onChange={(event) => setDexterity(event.target.valueAsNumber)}
            defaultValue={dexterity}
          ></input>
          <h5> {Math.floor((dexterity - 10) / 2)} </h5>
        </div>

        <div className="col card ability-box">
          <h5>
            <b>Constitution</b>
          </h5>
          <input
            type="number"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " text-center ability-input"
            }
            readOnly={!editModeEnabled}
            onChange={(event) => setConstitution(event.target.valueAsNumber)}
            defaultValue={constitution}
          ></input>
          <h5> {Math.floor((constitution - 10) / 2)} </h5>
        </div>

        <div className="col card ability-box">
          <h5>
            <b>Intelligence</b>
          </h5>
          <input
            type="number"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " text-center ability-input"
            }
            readOnly={!editModeEnabled}
            onChange={(event) => setIntelligence(event.target.valueAsNumber)}
            defaultValue={intelligence}
          ></input>
          <h5> {Math.floor((intelligence - 10) / 2)} </h5>
        </div>

        <div className="col card ability-box">
          <h5>
            <b>Wisdom</b>
          </h5>
          <input
            type="number"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " text-center ability-input"
            }
            readOnly={!editModeEnabled}
            onChange={(event) => setWisdom(event.target.valueAsNumber)}
            defaultValue={wisdom}
          ></input>
          <h5> {Math.floor((wisdom - 10) / 2)} </h5>
        </div>

        <div className="col card ability-box">
          <h5>
            <b>Charisma</b>
          </h5>
          <input
            type="number"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " text-center ability-input"
            }
            readOnly={!editModeEnabled}
            onChange={(event) => setCharisma(event.target.valueAsNumber)}
            defaultValue={charisma}
          ></input>
          <h5> {Math.floor((charisma - 10) / 2)} </h5>
        </div>
      </div>
    </div>
  );
};

export default AbilityBar;
