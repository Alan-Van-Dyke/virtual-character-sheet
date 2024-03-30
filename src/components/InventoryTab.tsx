import "../style/InventoryTab.css";
import { useCharacterContext } from "../context/CharacterContext";
import CurrencyCard from "./CurrencyCard";
import ItemList from "./ItemList";
import { useState } from "react";
import { Item } from "../context/CharacterReducer";

const InventoryTab = () => {
  const { state, dispatch } = useCharacterContext();

  const [newItemPopupEnabled, setNewItemPopupEnabled] = useState(false);
  const [newItemCategoryIdx, setNewItemCategoryIdx] = useState(0);
  const [newItemUsingCharges, setNewItemUsingCharges] = useState(false);
  const [newItemPopupValue, setNewItemPopupValue] = useState<Item>({
    name: "",
    description: "",
    type: "",
    cost: "",
    requiresAttunement: false,
    location: "",
  });

  function showNewItemPopup(categoryIdx: number) {
    setNewItemCategoryIdx(categoryIdx);
    setNewItemPopupEnabled(true);
  }

  function closeNewItemPopup() {
    setNewItemPopupValue({
      name: "",
      description: "",
      type: "",
      cost: "",
      requiresAttunement: false,
      location: "",
    });
    setNewItemPopupEnabled(false);
  }

  function addNewItem() {
    dispatch({
      type: "ADD_ITEM",
      payload: { categoryIdx: newItemCategoryIdx, newItem: newItemPopupValue },
    });
    closeNewItemPopup();
  }

  return (
    <div className="inventory-tab-container">
      <div className="inventory-top">
        <div className="item-list-container top-category">
          <ItemList
            categoryIdx={0}
            isVariable={false}
            newItemPopupEnabled={newItemPopupEnabled}
            showNewItemPopup={showNewItemPopup}
          />
        </div>
        <CurrencyCard></CurrencyCard>
      </div>

      <div className="inventory-bottom">
        <div className="item-list-container bottom-category">
          <ItemList
            categoryIdx={-1}
            isVariable={true}
            newItemPopupEnabled={newItemPopupEnabled}
            showNewItemPopup={showNewItemPopup}
          />
        </div>
      </div>
      {newItemPopupEnabled && (
        <div className="new-item-popup">
          <h2>
            Add New Item to '
            {state.inventoryCategories[newItemCategoryIdx].name}'{" "}
          </h2>
          <div className="new-item-popup-body">
            <div className="new-item-popup-input-row">
              <div className="new-item-popup-input">
                <p>Name: </p>
                <input
                  type="text"
                  onChange={(event) => {
                    setNewItemPopupValue({
                      ...newItemPopupValue,
                      name: event.target.value,
                    });
                  }}
                  placeholder={"Potion of Healing"}
                ></input>
              </div>
              <div className="new-item-popup-input">
                <p>Type: </p>
                <input
                  type="text"
                  onChange={(event) => {
                    setNewItemPopupValue({
                      ...newItemPopupValue,
                      type: event.target.value,
                    });
                  }}
                  placeholder={"Common Potion"}
                ></input>
              </div>
            </div>
            <div className="new-item-popup-input-row">
              <div className="new-item-popup-input">
                <p>Location: </p>
                <input
                  type="text"
                  onChange={(event) => {
                    setNewItemPopupValue({
                      ...newItemPopupValue,
                      location: event.target.value,
                    });
                  }}
                  placeholder={"Backpack, Bag of Holding, etc."}
                ></input>
              </div>
              <div className="new-item-popup-input">
                <p>Cost: </p>
                <input
                  type="text"
                  onChange={(event) => {
                    setNewItemPopupValue({
                      ...newItemPopupValue,
                      cost: event.target.value,
                    });
                  }}
                  placeholder={"10 gold"}
                ></input>
              </div>
            </div>
            <div className="new-item-popup-input-row">
              <div className="new-item-popup-input check-input">
                <input
                  type="checkbox"
                  onChange={(event) => {
                    setNewItemPopupValue({
                      ...newItemPopupValue,
                      requiresAttunement: event.target.checked,
                    });
                  }}
                ></input>
                <label>Requires Attunement?</label>
              </div>
              <div
                className={
                  "new-item-popup-input check-input " +
                  (!newItemUsingCharges && "charge-input-disabled")
                }
              >
                <input
                  type="checkbox"
                  onChange={(event) => {
                    setNewItemUsingCharges(event.target.checked);
                  }}
                ></input>
                <label>Usages: </label>
                <input
                  type="text"
                  disabled={!newItemUsingCharges}
                  onChange={(event) => {
                    if (
                      !Number.isNaN(event.target.value) &&
                      Number(event.target.value) >= 0
                    ) {
                      setNewItemPopupValue({
                        ...newItemPopupValue,
                        maxCharges: Number(event.target.value),
                        currentCharges: Number(event.target.value),
                      });
                    }
                  }}
                ></input>
                ,<label>refresh on: </label>
                <select
                  className={
                    "refresh-drop-down " +
                    (!newItemUsingCharges && "charge-input-disabled")
                  }
                >
                  <option value={"long-rest"}>Long Rest</option>
                  <option value={"short-rest"}>Short Rest</option>
                  <option value={"turn-rest"}>Turn</option>
                  <option value={"manual"}>Manually</option>
                  <option value={"never"}>Never</option>
                </select>
              </div>
            </div>
            <div className="new-item-popup-description-container">
              <p>Description:</p>
              <textarea
                onChange={(event) => {
                  setNewItemPopupValue({
                    ...newItemPopupValue,
                    description: event.target.value,
                  });
                }}
              ></textarea>
            </div>
            <div className="new-item-popup-btn-container">
              <button
                className="new-item-btn confirm-btn"
                onClick={(event) => {
                  addNewItem();
                }}
              >
                Confirm
              </button>
              <button
                className="new-item-btn cancel-btn"
                onClick={(event) => {
                  closeNewItemPopup();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryTab;
