import "../style/InventoryTab.css";
import { useCharacterContext } from "../context/CharacterContext";
import CurrencyCard from "./CurrencyCard";
import ItemList from "./ItemList";
import { useState } from "react";

const InventoryTab = () => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className="inventory-tab-container">
      <div className="inventory-top">
        <div className="item-list-container top-bag">
          <ItemList bagIdx={0} isVariable={false} />
        </div>
        <CurrencyCard></CurrencyCard>
      </div>

      <div className="inventory-bottom">
        <div className="item-list-container bottom-bag">
          <ItemList bagIdx={2} isVariable={true} />
        </div>
      </div>
    </div>
  );
};

export default InventoryTab;
