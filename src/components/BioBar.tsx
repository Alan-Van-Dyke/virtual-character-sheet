import { Col, Row } from "react-bootstrap";

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
    <div>
      <div className="card container bio-card">
        {editModeEnabled ? (
          <>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className={"form-control bio-bar-header"}
                  placeholder="Character Name"
                  onChange={(event) => setCharName(event.target.value)}
                  defaultValue={charName}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className={"form-control bio-bar-text"}
                  placeholder="Character Class"
                  onChange={(event) => setCharClass(event.target.value)}
                  defaultValue={charClass}
                ></input>
              </div>
              <div className="col">
                <input
                  type="text"
                  className={"form-control bio-bar-text"}
                  placeholder="Character Level"
                  onChange={(event) => setCharLevel(event.target.value)}
                  defaultValue={charLevel}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className={"form-control bio-bar-text"}
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
                    (editModeEnabled
                      ? "form-control"
                      : "form-control-plaintext") + " bio-bar-text"
                  }
                  placeholder="Character Background"
                  readOnly={!editModeEnabled}
                  onChange={(event) => setCharBackground(event.target.value)}
                  defaultValue={charBackground}
                ></input>
              </div>
            </div>
          </>
        ) : (  
          <>
            <Row>
              <h1><b>{charName || "Your Name Here"}</b></h1>
            </Row>
            <Row>
              <Col><h4>{"Class: "}<b>{charClass}</b></h4></Col>
              <Col><h4>{"Level: "}<b>{charLevel}</b></h4></Col>
            </Row>
            <Row>
              <Col><h4>{"Race: "}<b>{charRace}</b></h4></Col>
              <Col><h4>{"Background: "}<b>{charBackground}</b></h4></Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default BioBar;
