import { useCharacterContext } from "../context/CharacterContext";
import "../style/CharacterInfo.css";

const CharacterInfo: React.FC<{ editModeEnabled: boolean }> = ({
  editModeEnabled,
}) => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className="character-info-container">
      {editModeEnabled ? (
        <input
          type="text"
          className="h1-text-input"
          defaultValue={state.name}
          placeholder={"Character Name"}
          onChange={(event) => {
            dispatch({
              type: "CHANGE_NAME",
              payload: { newName: event.target.value },
            });
          }}
        ></input>
      ) : (
        <h1 className="name-title">{state.name || "Character Name"}</h1>
      )}

      <div className="character-info-body">
        <div className="character-info-col-a">
          <div className="character-info-attribute-box">
            {editModeEnabled ? (
              <input
                type="text"
                className="h2-text-input"
                defaultValue={state.charClass}
                placeholder={"Character Class"}
                onChange={(event) => {
                  dispatch({
                    type: "CHANGE_CLASS",
                    payload: { newClass: event.target.value },
                  });
                }}
              ></input>
            ) : (
              <h2>{state.charClass || "Character Class"}</h2>
            )}

            <hr className="character-info-attribute-baseline"></hr>
            <p className="character-info-attribute-label">
              <i>Class</i>
            </p>
          </div>
          <div className="character-info-attribute-box">
            {editModeEnabled ? (
              <input
                type="text"
                className="h2-text-input"
                defaultValue={state.race}
                placeholder={"Character Race"}
                onChange={(event) => {
                  dispatch({
                    type: "CHANGE_RACE",
                    payload: { newRace: event.target.value },
                  });
                }}
              ></input>
            ) : (
              <h2>{state.race || "Character Race"}</h2>
            )}

            <hr className="character-info-attribute-baseline"></hr>
            <p className="character-info-attribute-label">
              <i>Race</i>
            </p>
          </div>
        </div>
        <div className="character-info-col-a">
          <div className="character-info-attribute-box">
            {editModeEnabled ? (
              <input
                type="text"
                className="h2-text-input"
                defaultValue={state.background}
                placeholder={"Character Background"}
                onChange={(event) => {
                  dispatch({
                    type: "CHANGE_BACKGROUND",
                    payload: { newBackground: event.target.value },
                  });
                }}
              ></input>
            ) : (
              <h2>{state.background || "Character Background"}</h2>
            )}

            <hr className="character-info-attribute-baseline"></hr>
            <p className="character-info-attribute-label">
              <i>Background</i>
            </p>
          </div>
          <div className="character-info-row-a">
            <div className="character-info-attribute-box">
              {editModeEnabled ? (
                <input
                  type="text"
                  className="h2-text-input"
                  defaultValue={state.level}
                  placeholder={"Character Level"}
                  onChange={(event) => {
                    dispatch({
                      type: "CHANGE_LEVEL",
                      payload: { newLevel: event.target.value },
                    });
                  }}
                ></input>
              ) : (
                <h2>{state.level || "Character Level"}</h2>
              )}

              <hr className="character-info-attribute-baseline"></hr>
              <p className="character-info-attribute-label">
                <i>Level</i>
              </p>
            </div>
            <div className="character-info-attribute-box">
              {editModeEnabled ? (
                <input
                  type="text"
                  className="h2-text-input"
                  defaultValue={state.proficiencyBonus}
                  placeholder={"Proficiency Bonus"}
                  onChange={(event) => {
                    if (
                      !Number.isNaN(event.target.value) &&
                      Number(event.target.value) >= 0
                    )
                      dispatch({
                        type: "CHANGE_PROFICIENCY_BONUS",
                        payload: {
                          newProficiencyBonus: Number(event.target.value),
                        },
                      });
                  }}
                ></input>
              ) : (
                <h2>{"+" + state.proficiencyBonus || "Proficiency Bonus"}</h2>
              )}

              <hr className="character-info-attribute-baseline"></hr>
              <p className="character-info-attribute-label">
                <i>Proficiency Bonus</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
