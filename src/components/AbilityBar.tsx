interface AbilityBarProps {
  setStrength: (val: number) => void;
  setDexterity: (val: number) => void;
  setConstitution: (val: number) => void;
  setIntelligence: (val: number) => void;
  setWisdom: (val: number) => void;
  setCharisma: (val: number) => void;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  editModeEnabled: boolean;
}

const AbilityBar = ({
  editModeEnabled,
  setStrength,
  setDexterity,
  setConstitution,
  setIntelligence,
  setWisdom,
  setCharisma,
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
}: AbilityBarProps) => {
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
            value={strength}
          ></input>
          <h5> {((strength > 9) ? "+" : "") + Math.floor((strength - 10) / 2)} </h5>
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
            value={dexterity}
          ></input>
          <h5> {((dexterity > 9) ? "+" : "") + Math.floor((dexterity - 10) / 2)} </h5>
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
            value={constitution}
          ></input>
          <h5> {((constitution > 9) ? "+" : "") + Math.floor((constitution - 10) / 2)} </h5>
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
            value={intelligence}
          ></input>
          <h5> {((intelligence > 9) ? "+" : "") + Math.floor((intelligence - 10) / 2)} </h5>
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
            value={wisdom}
          ></input>
          <h5> {((wisdom > 9) ? "+" : "") + Math.floor((wisdom - 10) / 2)} </h5>
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
            value={charisma}
          ></input>
          <h5> {((charisma > 9) ? "+" : "") + Math.floor((charisma - 10) / 2)} </h5>
        </div>
      </div>
    </div>
  );
};

export default AbilityBar;
