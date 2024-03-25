import "../style/CombatStats.css";
import { useCharacterContext } from "../context/CharacterContext";
import { calculateModifier } from "./CharacterSheet";

const CombatStats = () => {
  const { state, dispatch } = useCharacterContext();

  const dexterityScore =
    state.stats.find((stat) => stat.attribute === "Dexterity")?.value || 10;
  const dexterityMod = calculateModifier(dexterityScore);

  function calculateArmorClass() {
    var armorClass = state.baseArmorClass;

    armorClass += state.shieldBonus;
    armorClass += state.armorClassBonusCustom;

    if (state.applyDexterityBonusLimit) {
      if (dexterityMod <= state.dexterityBonusLimit) {
        armorClass += dexterityMod;
      } else {
        armorClass += state.dexterityBonusLimit;
      }
    } else {
      armorClass += dexterityMod;
    }

    return armorClass;
  }

  return (
    <div className="combat-stat-container">
      <div className="combat-stat-row">
        <div className="combat-stat-card">
          <h4>Armor Class</h4>
          <h2>{calculateArmorClass()}</h2>
        </div>
        <div className="combat-stat-card">
          <h4>Initiative</h4>
          <h2>
            {state.initiativeBonusCustom + dexterityMod >= 0 ? "+" : "-"}
            {state.initiativeBonusCustom + dexterityMod}
          </h2>
        </div>
      </div>
      <div className="combat-stat-row">
        <div className="speed-card">
          <div className="speed-stat-block">
            <h4>Walk Speed</h4>
            <h2>{state.speed}ft</h2>
          </div>
          <hr></hr>
          <div className="speed-stat-block">
            <h4>Fly Speed</h4>
            <h2>{state.flySpeed}ft</h2>
          </div>
          <hr></hr>
          <div className="speed-stat-block">
            <h4>Swim Speed</h4>
            <h2>{state.swimSpeed}ft</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombatStats;
