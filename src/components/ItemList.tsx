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
  bagIdx: number;
  isVariable: boolean;
}

const ItemList = ({ bagIdx, isVariable }: ItemListProps) => {
  const { state, dispatch } = useCharacterContext();

  const [activeBagIdx, setActiveBagIdx] = useState(bagIdx);
  const [serachFilter, setSearchFilter] = useState("");

  return (
    <div className="item-list">
      <div className="item-list-header">
        {isVariable ? (
          <div className="bag-dropdown-container">
            <select
              className="bag-dropdown"
              onChange={(event) => {
                setActiveBagIdx(Number(event.target.value));
              }}
            >
              {state.bags.map(
                (bag, idx) =>
                  idx >= 2 && (
                    <option className={"bag-dropdown-option"} value={idx}>
                      {bag.name}
                    </option>
                  )
              )}
            </select>
            <hr></hr>
          </div>
        ) : (
          <h3>{state.bags[activeBagIdx].name}</h3>
        )}
        {isVariable && (
          <div className="edit-bag-btn-container">
            <button className="edit-bag-btn add">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Bag
            </button>
            <button className="edit-bag-btn delete">
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> Delete Bag
            </button>
            <button className="edit-bag-btn edit">
              <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon> Edit Bag
            </button>
          </div>
        )}
        <div className="item-list-search-bar">
          <input type="text" placeholder={"Search..."}></input>
          <hr></hr>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default ItemList;
