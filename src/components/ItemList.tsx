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
}

const ItemList = ({ categoryIdx, isVariable }: ItemListProps) => {
  const { state, dispatch } = useCharacterContext();

  const [activeCategoryIdx, setActiveCategoryIdx] = useState(categoryIdx);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div className="item-list">
      <div className="item-list-header">
        {isVariable ? (
          <div className="bag-dropdown-container">
            <select
              className="bag-dropdown"
              onChange={(event) => {
                setActiveCategoryIdx(Number(event.target.value));
              }}
            >
              <option value={-1}>All Inventory</option>
              {state.inventoryCategories.map(
                (category, idx) =>
                  idx >= 1 && (
                    <option className={"bag-dropdown-option"} value={idx}>
                      {category.name}
                    </option>
                  )
              )}
            </select>
            <hr></hr>
          </div>
        ) : (
          <h3>{state.inventoryCategories[activeCategoryIdx].name}</h3>
        )}
        {isVariable && (
          <div className="edit-bag-btn-container">
            <button className="edit-bag-btn add">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Category
            </button>
            <button className="edit-bag-btn delete">
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> Delete
              Category
            </button>
            <button className="edit-bag-btn edit">
              <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon> Rename
              Category
            </button>
          </div>
        )}
        <div className="item-list-search-bar">
          <input type="text" placeholder={"Search..."}></input>
          <hr></hr>
        </div>
        <button className="new-item-button add">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> New Item
        </button>
      </div>
      <hr></hr>
    </div>
  );
};

export default ItemList;
