import Character from "../model/Character";
import "../style/StatBar.css";
import { calculateModifier } from "./CharacterSheet";

interface StatBarProps {
  playerCharacter: Character;
  setPlayerCharacter: (newCharacter: Character) => void;
}

const StatBar = ({ playerCharacter, setPlayerCharacter }: StatBarProps) => {
  return (
    <div className="stat-block-container">
      {Array.from(playerCharacter.statArray).map(([key, value], index) => (
        <div className="stat-card" key={"stat-" + index}>
          <h3>{key}</h3>
          <hr></hr>
          <h2>{value}</h2>
          <h3>{(value > 9 ? "+" : "") + calculateModifier(value)}</h3>
          <hr></hr>
          <div className="skill-list skill">
            <div
              className={
                "skill-list-item skill-" +
                playerCharacter.savingThrowProficiencies.get(key)
              }
            >
              <p>{key + " Save:"}</p>
              <p className="skill-mod-p">
                {calculateModifier(value) +
                  (playerCharacter.savingThrowProficiencies.get(key) || 0) *
                    playerCharacter.proficiencyBonus >=
                0
                  ? "+"
                  : ""}
                {calculateModifier(value) +
                  (playerCharacter.savingThrowProficiencies.get(key) || 0) *
                    playerCharacter.proficiencyBonus}
              </p>
            </div>
            <hr></hr>
            {Array.from(playerCharacter.skillProficiencies)
              .filter(
                ([skillKey, skillValue], skillIndex) =>
                  skillValue.attribute === key
              )
              .map(([skillKey, skillValue], skillIndex) => (
                <div
                  className={"skill-list-item skill-" + skillValue.value}
                  key={skillValue.attribute + "-skill-" + skillIndex}
                >
                  <p>{skillKey + ":"}</p>
                  <p className="skill-mod-p">
                    {calculateModifier(value) +
                      (playerCharacter.skillProficiencies.get(skillKey)
                        ?.value || 0) *
                        playerCharacter.proficiencyBonus >=
                    0
                      ? "+"
                      : ""}
                    {calculateModifier(value) +
                      (playerCharacter.skillProficiencies.get(skillKey)
                        ?.value || 0) *
                        playerCharacter.proficiencyBonus}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* <div className="stat-card">
        <h3>Strength</h3>
        <hr></hr>
        <h2>{playerCharacter.statArray.strength}</h2>
        <h3>
          {(playerCharacter.statArray.strength > 9 ? "+" : "-") +
            calculateModifier(playerCharacter.statArray.strength)}
        </h3>
        <hr></hr>
        <div className="skill-list">
          <div className="skill-list-item">
            <p>Athletics</p>
            <p className="skill-mod-p"></p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default StatBar;
