import Character from "../model/Character";
import "../style/StatBar.css";

interface StatBarProps {
  playerCharacter: Character;
  setPlayerCharacter: (newCharacter: Character) => void;
}

function calculateModifier(stat: number) {
  return Math.floor((stat - 10) / 2);
}

const StatBar = ({ playerCharacter, setPlayerCharacter }: StatBarProps) => {
  return (
    <div className="stat-block-container">
      <div className="stat-card">
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
            <p
              className={
                "skill-" + playerCharacter.skillProficiencies.athletics
              }
            >
              Athletics
            </p>
            <p className="skill-mod-p">
              {(calculateModifier(playerCharacter.statArray.strength) +
                playerCharacter.proficiencyBonus *
                  playerCharacter.skillProficiencies.athletics >=
              0
                ? "+"
                : "-") +
                (calculateModifier(playerCharacter.statArray.strength) +
                  playerCharacter.proficiencyBonus *
                    playerCharacter.skillProficiencies.athletics)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatBar;
