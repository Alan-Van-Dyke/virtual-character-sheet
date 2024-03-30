import "../style/ItemList.css";
import { useCharacterContext } from "../context/CharacterContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

interface ItemListProps {
  categoryIdx: number;
  isVariable: boolean;
  newItemPopupEnabled: boolean;
  showNewItemPopup: (categoryIdx: number) => void;
}

type CategoryPopupStates = "invisible" | "add" | "delete" | "rename";

const ItemList = ({
  categoryIdx,
  isVariable,
  newItemPopupEnabled,
  showNewItemPopup,
}: ItemListProps) => {
  const { state, dispatch } = useCharacterContext();

  const [activeCategoryIdx, setActiveCategoryIdx] = useState(categoryIdx);
  const [searchFilter, setSearchFilter] = useState("");

  const [categoryPopupState, setCategoryPopupState] =
    useState<CategoryPopupStates>("invisible");
  const [categoryPopupValue, setCategoryPopupValue] = useState("");

  function closePopup() {
    setCategoryPopupValue("");
    setCategoryPopupState("invisible");
  }

  function openCategoryPopup(type: CategoryPopupStates) {
    setCategoryPopupValue("");
    setCategoryPopupState(type);
  }

  function confirmDeleteCategory() {
    dispatch({
      type: "DELETE_INVENTORY_CATEGORY",
      payload: { categoryIdx: activeCategoryIdx },
    });
    setActiveCategoryIdx(-1);
    closePopup();
  }

  function confirmRenameCategory() {
    dispatch({
      type: "RENAME_INVENTORY_CATEGORY",
      payload: {
        categoryIdx: activeCategoryIdx,
        newCategoryName: categoryPopupValue,
      },
    });
    closePopup();
  }

  function confirmAddCategory() {
    dispatch({
      type: "ADD_INVENTORY_CATEGORY",
      payload: { categoryName: categoryPopupValue },
    });
    setActiveCategoryIdx(state.inventoryCategories.length - 1);
    closePopup();
  }

  return (
    <div className="item-list">
      {categoryPopupState !== "invisible" && isVariable && (
        <div className="manage-category-popup">
          <h3 className="manage-category-header">
            {categoryPopupState === "delete" &&
              "Delete '" +
                state.inventoryCategories[activeCategoryIdx].name +
                "'?"}
            {categoryPopupState === "add" && "New Category"}
            {categoryPopupState === "rename" &&
              "Rename '" +
                state.inventoryCategories[activeCategoryIdx].name +
                "'?"}
          </h3>
          {(categoryPopupState === "rename" ||
            categoryPopupState === "add") && (
            <div className="manage-category-popup-input">
              <p>Name:</p>
              <input
                type="text"
                defaultValue={
                  categoryPopupState === "rename"
                    ? state.inventoryCategories[activeCategoryIdx].name
                    : ""
                }
                onChange={(event) => {
                  setCategoryPopupValue(event.target.value);
                }}
              ></input>
            </div>
          )}
          <div className="manage-category-popup-btn-container">
            <button
              className={"manage-category-popup-btn btn-confirm"}
              onClick={() => {
                switch (categoryPopupState) {
                  case "add":
                    confirmAddCategory();
                    break;
                  case "delete":
                    confirmDeleteCategory();
                    break;
                  case "rename":
                    confirmRenameCategory();
                    break;
                  default:
                    closePopup();
                    break;
                }
              }}
            >
              Confirm
            </button>
            <button
              className={"manage-category-popup-btn btn-cancel"}
              onClick={() => {
                closePopup();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="item-list-header">
        {isVariable ? (
          <div className="category-dropdown-container">
            <select
              className="category-dropdown"
              onChange={(event) => {
                setActiveCategoryIdx(Number(event.target.value));
              }}
              defaultValue={activeCategoryIdx + 1}
              disabled={categoryPopupState !== "invisible" || newItemPopupEnabled}
            >
              <option value={-1}>All Inventory</option>
              {state.inventoryCategories.map(
                (category, idx) =>
                  idx >= 1 && <option value={idx}>{category.name}</option>
              )}
            </select>
            <hr></hr>
          </div>
        ) : (
          <h3>{state.inventoryCategories[activeCategoryIdx].name}</h3>
        )}
        {isVariable && (
          <div className="edit-category-btn-container">
            <button
              className="edit-category-btn add"
              disabled={
                categoryPopupState !== "invisible" || newItemPopupEnabled
              }
              onClick={() => {
                openCategoryPopup("add");
              }}
            >
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Category
            </button>
            <button
              className="edit-category-btn delete"
              disabled={
                activeCategoryIdx < 2 ||
                categoryPopupState !== "invisible" ||
                newItemPopupEnabled
              }
              onClick={() => {
                openCategoryPopup("delete");
              }}
            >
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> Delete
              Category
            </button>
            <button
              className="edit-category-btn edit"
              disabled={
                activeCategoryIdx < 2 ||
                categoryPopupState !== "invisible" ||
                newItemPopupEnabled
              }
              onClick={() => {
                openCategoryPopup("rename");
              }}
            >
              <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon> Rename
              Category
            </button>
          </div>
        )}

        <div className="item-list-search-bar">
          <input type="text" placeholder={"Search..."}></input>
          <hr></hr>
        </div>
        <button
          className="new-item-button add"
          disabled={categoryPopupState !== "invisible" || newItemPopupEnabled}
          onClick={() => showNewItemPopup(activeCategoryIdx === -1 ? 1 : activeCategoryIdx)}
        >
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> New Item
        </button>
      </div>
      <hr></hr>
      <p>items go here</p>
    </div>
  );
};

export default ItemList;
