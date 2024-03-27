import "../style/CombatStats.css";
import { useCharacterContext } from "../context/CharacterContext";
import { calculateModifier } from "./CharacterSheet";

const CombatStats: React.FC<{ editModeEnabled: boolean }> = ({
  editModeEnabled,
}) => {
  const { state, dispatch } = useCharacterContext();

  const dexterityScore =
    state.stats.find((stat) => stat.attribute === "Dexterity")?.value || 10;
  const dexterityMod = calculateModifier(dexterityScore);

  function calculateArmorClass() {
    var armorClass = state.baseArmorClass;

    armorClass += state.shieldBonus;
    armorClass += state.armorClassBonusCustom;

    if (state.applyDexterityBonusLimit) {
      if (state.dexterityBonusLimit === 0) {
        // add or subtract nothing. Heavy armor does this apparently, even with negative dex mod
      } else if (dexterityMod <= state.dexterityBonusLimit) {
        armorClass += dexterityMod;
      } else {
        armorClass += state.dexterityBonusLimit;
      }
    } else {
      armorClass += dexterityMod;
    }

    return armorClass;
  }

  function applyDexterityBonusLimit() {
    if (state.dexterityBonusLimit === 0) {
      return "0";
    }

    if (state.dexterityBonusLimit > dexterityMod) {
      return (dexterityMod >= 0 ? "+" : "-") + dexterityMod;
    } else {
      return "+" + state.dexterityBonusLimit;
    }
  }

  return (
    <div className="combat-stat-container">
      <div
        className={
          "combat-stat-row " +
          (editModeEnabled ? "" : "combat-stat-row-no-edit")
        }
      >
        <div className="armor-class-card">
          <h4>Armor Class</h4>
          {editModeEnabled ? (
            <>
              <div className="armor-class-edit-row">
                <p>Base Armor Class:</p>
                <input
                  type="text"
                  className="ac-input"
                  defaultValue={state.baseArmorClass}
                  onChange={(event) => {
                    if (
                      !Number.isNaN(event.target.value) &&
                      Number(event.target.value) >= 0
                    ) {
                      dispatch({
                        type: "CHANGE_BASE_ARMOR_CLASS",
                        payload: {
                          newBaseArmorClass: Number(event.target.value),
                        },
                      });
                    }
                  }}
                ></input>
              </div>
              <div className="armor-class-edit-row">
                <p>
                  Dexterity Bonus:{" "}
                  {state.applyDexterityBonusLimit
                    ? applyDexterityBonusLimit()
                    : (dexterityMod >= 0 ? "+" : "") + dexterityMod}
                </p>
              </div>
              <div className="armor-class-edit-sub-row">
                <input
                  type="checkbox"
                  checked={state.applyDexterityBonusLimit}
                  onChange={(event) => {
                    dispatch({
                      type: "CHANGE_APPLY_DEXTERITY_BONUS_LIMIT",
                      payload: {
                        newApplyDexterityBonusLimit: event.target.checked,
                      },
                    });
                  }}
                ></input>
                <p>Limit Dexterity Bonus to: </p>
                <input
                  type="text"
                  className="ac-input"
                  disabled={!state.applyDexterityBonusLimit}
                  defaultValue={state.dexterityBonusLimit}
                  onChange={(event) => {
                    if (
                      !Number.isNaN(event.target.value) &&
                      Number(event.target.value) >= 0
                    ) {
                      dispatch({
                        type: "CHANGE_DEXTERITY_BONUS_LIMIT",
                        payload: {
                          newDexterityBonusLimit: Number(event.target.value),
                        },
                      });
                    }
                  }}
                ></input>
              </div>
              <div className="armor-class-edit-row">
                <p>Shield Bonus: </p>
                <input
                  type="text"
                  className="ac-input"
                  defaultValue={state.shieldBonus}
                  onChange={(event) => {
                    if (
                      !Number.isNaN(event.target.value) &&
                      Number(event.target.value) >= 0
                    ) {
                      dispatch({
                        type: "CHANGE_SHIELD_BONUS",
                        payload: {
                          newShieldBonus: Number(event.target.value),
                        },
                      });
                    }
                  }}
                ></input>
              </div>
              <div className="armor-class-edit-row">
                <p>Custom Bonus: </p>
                <input
                  type="text"
                  className="ac-input"
                  defaultValue={state.armorClassBonusCustom}
                  onChange={(event) => {
                    if (
                      !Number.isNaN(event.target.value) &&
                      Number(event.target.value) >= 0
                    ) {
                      dispatch({
                        type: "CHANGE_ARMOR_CLASS_BONUS_CUSTOM",
                        payload: {
                          newArmorClassBonusCustom: Number(event.target.value),
                        },
                      });
                    }
                  }}
                ></input>
              </div>
            </>
          ) : (
            <h2>{calculateArmorClass()}</h2>
          )}
        </div>
        <div className="initiative-card">
          <h4>Initiative</h4>
          {editModeEnabled ? (
            <div className="initiative-edit-container">
              <p>Dexterity modifier: {dexterityMod}</p>
              <p>+</p>
              <div className="initiative-bonus-edit">
                <p>{"Custom Bonus:"}</p>
                <input
                  type="text"
                  className="initiative-edit"
                  defaultValue={state.initiativeBonusCustom}
                  onChange={(event) => {
                    if (!Number.isNaN(event.target.value)) {
                      dispatch({
                        type: "CHANGE_INITIATIVE_BONUS_CUSTOM",
                        payload: {
                          newInitiativeBonusCustom: Number(event.target.value),
                        },
                      });
                    }
                  }}
                ></input>
              </div>
            </div>
          ) : (
            <h2>
              {(state.initiativeBonusCustom + dexterityMod >= 0 ? "+" : "") +
                (state.initiativeBonusCustom + dexterityMod)}
            </h2>
          )}
        </div>
      </div>
      <div
        className={
          "combat-stat-row " +
          (editModeEnabled ? "" : "combat-stat-row-no-edit")
        }
      >
        <div className="speed-card">
          <div className="speed-stat-block">
            <h4>Walk Speed</h4>
            {editModeEnabled ? (
              <input
                type="text"
                className="combat-stat-h2-input"
                defaultValue={state.speed}
                onChange={(event) => {
                  if (
                    !Number.isNaN(event.target.value) &&
                    Number(event.target.value) >= 0
                  ) {
                    dispatch({
                      type: "CHANGE_SPEED",
                      payload: { newSpeed: Number(event.target.value) },
                    });
                  }
                }}
              ></input>
            ) : (
              <h2>{state.speed}ft</h2>
            )}
          </div>
          <hr></hr>
          <div className="speed-stat-block">
            <h4>Fly Speed</h4>
            {editModeEnabled ? (
              <input
                type="text"
                className="combat-stat-h2-input"
                defaultValue={state.flySpeed}
                onChange={(event) => {
                  if (
                    !Number.isNaN(event.target.value) &&
                    Number(event.target.value) >= 0
                  ) {
                    dispatch({
                      type: "CHANGE_FLY_SPEED",
                      payload: { newFlySpeed: Number(event.target.value) },
                    });
                  }
                }}
              ></input>
            ) : (
              <h2>{state.flySpeed}ft</h2>
            )}
          </div>
          <hr></hr>
          <div className="speed-stat-block">
            <h4>Swim Speed</h4>
            {editModeEnabled ? (
              <input
                type="text"
                className="combat-stat-h2-input"
                defaultValue={state.swimSpeed}
                onChange={(event) => {
                  if (
                    !Number.isNaN(event.target.value) &&
                    Number(event.target.value) >= 0
                  ) {
                    dispatch({
                      type: "CHANGE_SWIM_SPEED",
                      payload: { newSwimSpeed: Number(event.target.value) },
                    });
                  }
                }}
              ></input>
            ) : (
              <h2>{state.swimSpeed}ft</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombatStats;
