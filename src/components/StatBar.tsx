import "../style/StatBar.css";
import { calculateModifier } from "./CharacterSheet";
import { useCharacterContext } from "../context/CharacterContext";



const StatBar = () => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className="stat-block-container">
      <div className="skill-container">
        {state.stats.map((stat, index) => (
          <div className="stat-card" key={"stat-" + index}>
            <h3>{stat.attribute}</h3>
            <hr></hr>
            <h2>{stat.value}</h2>
            <h3>
              {(stat.value > 9 ? "+" : "") + calculateModifier(stat.value)}
            </h3>
            <hr></hr>
            <div className="skill-list skill">
              <div className={"skill-list-item skill-" + stat.saveProficiency}>
                <p>{stat.attribute + " Save:"}</p>
                <p className="skill-mod-p">
                  {calculateModifier(stat.value) +
                    stat.saveProficiency * state.proficiencyBonus >=
                  0
                    ? "+"
                    : ""}
                  {calculateModifier(stat.value) +
                    stat.saveProficiency * state.proficiencyBonus}
                </p>
              </div>
              <hr></hr>
              {state.skills
                .filter((skill, index) => skill.attribute === stat.attribute)
                .map((skill, index) => (
                  <div
                    className={"skill-list-item skill-" + skill.proficiency}
                    key={skill.attribute + "-skill-" + index}
                  >
                    <p>{skill.name + ":"}</p>
                    <p className="skill-mod-p">
                      {calculateModifier(stat.value) +
                        skill.proficiency * state.proficiencyBonus >=
                      0
                        ? "+"
                        : ""}
                      {calculateModifier(stat.value) +
                        skill.proficiency * state.proficiencyBonus}
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
                  state.stats.find((stat) => stat.attribute === "Wisdom")
                    ?.value || 10
                ) +
                (state.skills.find((skill) => skill.name === "Perception")
                  ?.proficiency || 0) *
                  state.proficiencyBonus)}
          </p>
          <p>
            {"Passive Investigation: " +
              (10 +
                calculateModifier(
                  state.stats.find((stat) => stat.attribute === "Intelligence")
                    ?.value || 10
                ) +
                (state.skills.find((skill) => skill.name === "Investigation")
                  ?.proficiency || 0) *
                  state.proficiencyBonus)}
          </p>
          <p>
            {"Passive Insight: " +
              (10 +
                calculateModifier(
                  state.stats.find((stat) => stat.attribute === "Wisdom")
                    ?.value || 10
                ) +
                (state.skills.find((skill) => skill.name === "Insight")
                  ?.proficiency || 0) *
                  state.proficiencyBonus)}
          </p>
          <p>
            {"Passive Stealth: " +
              (10 +
                calculateModifier(
                  state.stats.find((stat) => stat.attribute === "Dexterity")
                    ?.value || 10
                ) +
                (state.skills.find((skill) => skill.name === "Stealth")
                  ?.proficiency || 0) *
                  state.proficiencyBonus)}
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
