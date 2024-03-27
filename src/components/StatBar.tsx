import "../style/StatBar.css";
import { calculateModifier } from "./CharacterSheet";
import { useCharacterContext } from "../context/CharacterContext";

const StatBar: React.FC<{ editModeEnabled: boolean }> = ({
  editModeEnabled,
}) => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className="stat-block-container">
      <div className="skill-container">
        {state.stats.map((stat, index) => (
          <div className="stat-card" key={"stat-" + index}>
            <h3>{stat.attribute}</h3>
            <hr></hr>
            {editModeEnabled ? (
              <input
                type="text"
                className="stat-edit-input"
                defaultValue={stat.value}
                onChange={(event) => {
                  if (
                    !Number.isNaN(event.target.value) &&
                    Number(event.target.value) >= 0
                  )
                    dispatch({
                      type: "CHANGE_STAT",
                      payload: {
                        attribute: stat.attribute,
                        newValue: Number(event.target.value),
                        newSaveProficiency: stat.saveProficiency,
                      },
                    });
                }}
              ></input>
            ) : (
              <h2>{stat.value}</h2>
            )}

            <h3>
              {(stat.value > 9 ? "+" : "") + calculateModifier(stat.value)}
            </h3>
            <hr></hr>
            <div className="skill-list skill">
              <div className={"skill-list-item skill-" + stat.saveProficiency}>
                <p>{stat.attribute + " Save:"}</p>
                {editModeEnabled ? (
                  <select
                    className="proficiency-dropdown"
                    onChange={(event) => {
                      dispatch({
                        type: "CHANGE_STAT",
                        payload: {
                          attribute: stat.attribute,
                          newValue: stat.value,
                          newSaveProficiency: event.target.value,
                        },
                      });
                    }}
                    defaultValue={stat.saveProficiency}
                  >
                    <option value={0}>No bonus</option>
                    <option value={1}>Proficiency</option>
                  </select>
                ) : (
                  <p className="skill-mod-p">
                    {calculateModifier(stat.value) +
                      stat.saveProficiency * state.proficiencyBonus >=
                    0
                      ? "+"
                      : ""}
                    {calculateModifier(stat.value) +
                      stat.saveProficiency * state.proficiencyBonus}
                  </p>
                )}
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
                    {editModeEnabled ? (
                      <select
                        className="proficiency-dropdown"
                        onChange={(event) => {
                          dispatch({
                            type: "CHANGE_SKILL",
                            payload: {
                              name: skill.name,
                              newValue: event.target.value,
                            },
                          });
                        }}
                        defaultValue={skill.proficiency}
                      >
                        <option value={0}>No bonus</option>
                        <option value={1}>Proficiency</option>
                        <option value={2}>Expertise</option>
                      </select>
                    ) : (
                      <p className="skill-mod-p">
                        {calculateModifier(stat.value) +
                          skill.proficiency * state.proficiencyBonus >=
                        0
                          ? "+"
                          : ""}
                        {calculateModifier(stat.value) +
                          skill.proficiency * state.proficiencyBonus}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="stat-footer">
        <div className="passive-container">
          <div className="passive-stat">
            <p>
              {"Passive Perception: " +
                (10 +
                  calculateModifier(
                    state.stats.find((stat) => stat.attribute === "Wisdom")
                      ?.value || 10
                  ) +
                  (state.skills.find((skill) => skill.name === "Perception")
                    ?.proficiency || 0) *
                    state.proficiencyBonus +
                  (editModeEnabled ? 0 : state.passivePerceptionBonusCustom))}
              {editModeEnabled ? " (Default)" : ""}
            </p>
            {editModeEnabled && (
              <>
                <p>+</p>
                <input
                  type="text"
                  className="passive-input"
                  defaultValue={"" + state.passivePerceptionBonusCustom}
                  onChange={(event) => {
                    if (!Number.isNaN(event.target.value)) {
                      dispatch({
                        type: "CHANGE_PASSIVE_PERCEPTION_BONUS_CUSTOM",
                        payload: { newValue: Number(event.target.value) },
                      });
                    }
                  }}
                ></input>
                <p>{"(Custom)"}</p>
              </>
            )}
          </div>
          <div className="passive-stat">
            <p>
              {"Passive Investigation: " +
                (10 +
                  calculateModifier(
                    state.stats.find(
                      (stat) => stat.attribute === "Intelligence"
                    )?.value || 10
                  ) +
                  (state.skills.find((skill) => skill.name === "Investigation")
                    ?.proficiency || 0) *
                    state.proficiencyBonus +
                  (editModeEnabled
                    ? 0
                    : state.passiveInvestigationBonusCustom))}
              {editModeEnabled ? " (Default)" : ""}
            </p>
            {editModeEnabled && (
              <>
                <p>+</p>
                <input
                  type="text"
                  className="passive-input"
                  defaultValue={"" + state.passiveInvestigationBonusCustom}
                  onChange={(event) => {
                    if (!Number.isNaN(event.target.value)) {
                      dispatch({
                        type: "CHANGE_PASSIVE_INVESTIGATION_BONUS_CUSTOM",
                        payload: { newValue: Number(event.target.value) },
                      });
                    }
                  }}
                ></input>
                <p>{"(Custom)"}</p>
              </>
            )}
          </div>
          <div className="passive-stat">
            <p>
              {"Passive Insight: " +
                (10 +
                  calculateModifier(
                    state.stats.find((stat) => stat.attribute === "Wisdom")
                      ?.value || 10
                  ) +
                  (state.skills.find((skill) => skill.name === "Insight")
                    ?.proficiency || 0) *
                    state.proficiencyBonus +
                  (editModeEnabled ? 0 : state.passiveInsightBonusCustom))}
              {editModeEnabled ? " (Default)" : ""}
            </p>
            {editModeEnabled && (
              <>
                <p>+</p>
                <input
                  type="text"
                  className="passive-input"
                  defaultValue={"" + state.passiveInsightBonusCustom}
                  onChange={(event) => {
                    if (!Number.isNaN(event.target.value)) {
                      dispatch({
                        type: "CHANGE_PASSIVE_INSIGHT_BONUS_CUSTOM",
                        payload: { newValue: Number(event.target.value) },
                      });
                    }
                  }}
                ></input>
                <p>{"(Custom)"}</p>
              </>
            )}
          </div>
          <div className="passive-stat">
            <p>
              {"Passive Stealth: " +
                (10 +
                  calculateModifier(
                    state.stats.find((stat) => stat.attribute === "Dexterity")
                      ?.value || 10
                  ) +
                  (state.skills.find((skill) => skill.name === "Stealth")
                    ?.proficiency || 0) *
                    state.proficiencyBonus +
                  (editModeEnabled ? 0 : state.passiveStealthBonusCustom))}
              {editModeEnabled ? " (Default)" : ""}
            </p>
            {editModeEnabled && (
              <>
                <p>+</p>
                <input
                  type="text"
                  className="passive-input"
                  defaultValue={"" + state.passiveStealthBonusCustom}
                  onChange={(event) => {
                    if (!Number.isNaN(event.target.value)) {
                      dispatch({
                        type: "CHANGE_PASSIVE_STEALTH_BONUS_CUSTOM",
                        payload: { newValue: Number(event.target.value) },
                      });
                    }
                  }}
                ></input>
                <p>{"(Custom)"}</p>
              </>
            )}
          </div>
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
