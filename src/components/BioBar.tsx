interface BioBarProps {
  charName: string;
  charRace: string;
  charClass: string;
  charLevel: string;
  charBackground: string;
  setCharName: (val: string) => void;
  setCharRace: (val: string) => void;
  setCharClass: (val: string) => void;
  setCharLevel: (val: string) => void;
  setCharBackground: (val: string) => void;
  editModeEnabled: boolean;
}

const BioBar = ({
  charName,
  charRace,
  charClass,
  charLevel,
  charBackground,
  setCharName,
  setCharRace,
  setCharClass,
  setCharLevel,
  setCharBackground,
  editModeEnabled,
}: BioBarProps) => {
  return (
    <div className="card container character-sheet-card">
      <div className="row">
        <div className="col">
          <input
            type="text"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " bio-bar-header"
            }
            placeholder="Character Name"
            readOnly={!editModeEnabled}
            onChange={(event) => setCharName(event.target.value)}
            defaultValue={charName}
          ></input>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input
            type="text"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " bio-bar-text"
            }
            placeholder="Character Class"
            readOnly={!editModeEnabled}
            onChange={(event) => setCharClass(event.target.value)}
            defaultValue={charClass}
          ></input>
        </div>
        <div className="col">
          <input
            type="text"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " bio-bar-text"
            }
            placeholder="Character Level"
            readOnly={!editModeEnabled}
            onChange={(event) => setCharLevel(event.target.value)}
            defaultValue={charLevel}
          ></input>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input
            type="text"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " bio-bar-text"
            }
            placeholder="Character Race"
            readOnly={!editModeEnabled}
            onChange={(event) => setCharRace(event.target.value)}
            defaultValue={charRace}
          ></input>
        </div>
        <div className="col">
          <input
            type="text"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " bio-bar-text"
            }
            placeholder="Character Background"
            readOnly={!editModeEnabled}
            onChange={(event) => setCharBackground(event.target.value)}
            defaultValue={charBackground}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default BioBar;
