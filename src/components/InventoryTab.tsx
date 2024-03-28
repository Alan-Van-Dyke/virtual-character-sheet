import "../style/InventoryTab.css";
import { useCharacterContext } from "../context/CharacterContext";
import CurrencyCard from "./CurrencyCard";

const InventoryTab = () => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className="inventory-tab-grid">
      <div className="item-list-container">{/* favorite items here */}</div>
      <div className="side-inventory-group">
        <CurrencyCard></CurrencyCard>
        <div className="item-list-container">{/* equipped items here */}a</div>
      </div>
      <div className="item-list-container inventory-bottom">
        <div className="bag-dropdown-container">{/* bag dropdown here */}</div>
        {/* bag items here */}
      </div>
    </div>
  );
};

export default InventoryTab;
