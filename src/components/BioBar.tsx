interface BioBarProps {
  characterName: string;
  characterClass: string;
  characterRace: string;
  characterLevel: number;
  editModeEnabled: boolean;
}

const BioBar = ({
  characterName,
  characterClass,
  characterRace,
  characterLevel,
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
              " bio-bar-text"
            }
            placeholder="Character Name"
            readOnly={!editModeEnabled}
          ></input>
        </div>
        <div className="col">
          <input
            type="text"
            className={
              (editModeEnabled ? "form-control" : "form-control-plaintext") +
              " bio-bar-text"
            }
            placeholder="Character Class"
            readOnly={!editModeEnabled}
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
          ></input>
        </div>
      </div>
    </div>
  );
};

export default BioBar;
