import { useCharacterContext } from "../context/CharacterContext";
import "../style/CharacterInfo.css";

const CharacterInfo = () => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className="character-info-container">
      <h1 className="name-title">{state.name || "Character Name"}</h1>
      <div className="character-info-body">
        <div className="character-info-col-a">
          <div className="character-info-attribute-box">
            <h2>{state.charClass || "Character Class"}</h2>
            <hr className="character-info-attribute-baseline"></hr>
            <p className="character-info-attribute-label">
              <i>Class</i>
            </p>
          </div>
          <div className="character-info-attribute-box">
            <h2>{state.race || "Character Race"}</h2>
            <hr className="character-info-attribute-baseline"></hr>
            <p className="character-info-attribute-label">
              <i>Race</i>
            </p>
          </div>
        </div>
        <div className="character-info-col-a">
          <div className="character-info-attribute-box">
            <h2>{state.background || "Character Background"}</h2>
            <hr className="character-info-attribute-baseline"></hr>
            <p className="character-info-attribute-label">
              <i>Background</i>
            </p>
          </div>
          <div className="character-info-row-a">
            <div className="character-info-attribute-box">
              <h2>{state.level || "Character Level"}</h2>
              <hr className="character-info-attribute-baseline"></hr>
              <p className="character-info-attribute-label">
                <i>Level</i>
              </p>
            </div>
            <div className="character-info-attribute-box">
              <h2>{"+" + state.proficiencyBonus || "Proficiency Bonus"}</h2>
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
