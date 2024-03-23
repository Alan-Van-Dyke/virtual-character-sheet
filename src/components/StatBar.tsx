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
      <div className="skill-container">
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
      </div>
      <div className="stat-footer">
        <div className="passive-container">
          <p>
            {"Passive Perception: " +
              (10 +
                calculateModifier(
                  playerCharacter.statArray.get("Wisdom") || 10
                ) +
                (playerCharacter.skillProficiencies.get("Perception")?.value ||
                  0) *
                  playerCharacter.proficiencyBonus)}
          </p>
          <p>
            {"Passive Investigation: " +
              (10 +
                calculateModifier(
                  playerCharacter.statArray.get("Intelligence") || 10
                ) +
                (playerCharacter.skillProficiencies.get("Investigation")
                  ?.value || 0) *
                  playerCharacter.proficiencyBonus)}
          </p>
          <p>
            {"Passive Insight: " +
              (10 +
                calculateModifier(
                  playerCharacter.statArray.get("Wisdom") || 10
                ) +
                (playerCharacter.skillProficiencies.get("Insight")?.value ||
                  0) *
                  playerCharacter.proficiencyBonus)}
          </p>
          <p>
            {"Passive Stealth: " +
              (10 +
                calculateModifier(
                  playerCharacter.statArray.get("Dexterity") || 10
                ) +
                (playerCharacter.skillProficiencies.get("Stealth")?.value ||
                  0) *
                  playerCharacter.proficiencyBonus)}
          </p>
        </div>
        <div className="key-container">
          <p className="skill-0">No bonus</p>
          <p className="skill-1">Proficiency</p>
          <p className="skill-2">Expertise</p>
        </div>
      </div>
    </div>
  );
};

export default StatBar;
