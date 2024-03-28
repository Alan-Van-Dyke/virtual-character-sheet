import "../style/CurrencyCard.css";
import { useCharacterContext } from "../context/CharacterContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CurrencyCard = () => {
  const { state, dispatch } = useCharacterContext();
  const [currencyPopupEnabled, setCurrencyPopupEnabled] = useState(false);
  const [isSpending, setIsSpending] = useState(false);
  const [popupValues, setPopupValues] = useState({ c: 0, s: 0, g: 0, p: 0 });

  function showPopup(enableSpending: boolean) {
    setIsSpending(enableSpending);
    setCurrencyPopupEnabled(true);
  }

  function hidePopup() {
    setPopupValues({ c: 0, s: 0, g: 0, p: 0 });
    setCurrencyPopupEnabled(false);
  }

  function confirmTransaction() {
    if (isSpending) {
      dispatch({
        type: "UPDATE_CURRENCY",
        payload: {
          newAmmounts: {
            newCopper: -popupValues.c,
            newSilver: -popupValues.s,
            newGold: -popupValues.g,
            newPlatinum: -popupValues.p,
          },
        },
      });
    } else {
      dispatch({
        type: "UPDATE_CURRENCY",
        payload: {
          newAmmounts: {
            newCopper: popupValues.c,
            newSilver: popupValues.s,
            newGold: popupValues.g,
            newPlatinum: popupValues.p,
          },
        },
      });
    }

    hidePopup();
  }

  return (
    <div className="currency-card">
      <div className="currency-btn-container">
        <button
          className="currency-btn recieve"
          disabled={currencyPopupEnabled}
          onClick={() => {
            showPopup(false);
          }}
        >
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Recieve
        </button>
        <button
          className="currency-btn spend"
          disabled={currencyPopupEnabled}
          onClick={() => {
            showPopup(true);
          }}
        >
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> Spend
        </button>
      </div>
      {currencyPopupEnabled && (
        <div className="currency-popup">
          <p className="currency-popup-title">
            {isSpending ? "Spend: " : "Recieve: "}
          </p>
          <div className="currency-popup-input">
            <input
              type="text"
              className="copper"
              onChange={(event) => {
                if (
                  !Number.isNaN(event.target.value) &&
                  Number(event.target.value) >= 0
                ) {
                  setPopupValues({
                    ...popupValues,
                    c: Number(event.target.value),
                  });
                }
              }}
            ></input>
            <p className="copper">c</p>
          </div>
          <div className="currency-popup-input">
            <input
              type="text"
              className="silver"
              onChange={(event) => {
                if (
                  !Number.isNaN(event.target.value) &&
                  Number(event.target.value) >= 0
                ) {
                  setPopupValues({
                    ...popupValues,
                    s: Number(event.target.value),
                  });
                }
              }}
            ></input>
            <p className="silver">s</p>
          </div>
          <div className="currency-popup-input">
            <input
              type="text"
              className="gold"
              onChange={(event) => {
                if (
                  !Number.isNaN(event.target.value) &&
                  Number(event.target.value) >= 0
                ) {
                  setPopupValues({
                    ...popupValues,
                    g: Number(event.target.value),
                  });
                }
              }}
            ></input>
            <p className="gold">g</p>
          </div>
          <div className="currency-popup-input">
            <input
              type="text"
              className="platinum"
              onChange={(event) => {
                if (
                  !Number.isNaN(event.target.value) &&
                  Number(event.target.value) >= 0
                ) {
                  setPopupValues({
                    ...popupValues,
                    p: Number(event.target.value),
                  });
                }
              }}
            ></input>
            <p className="platinum">p</p>
          </div>
          <div className="currency-popup-btn-container">
            <button
              className="currency-popup-btn btn-confirm"
              onClick={() => {
                confirmTransaction();
              }}
            >
              Confirm
            </button>
            <button
              className="currency-popup-btn btn-cancel"
              onClick={() => {
                hidePopup();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="currency-label copper">
        <h2>{state.copper}</h2>
        <p>Copper</p>
      </div>
      <hr></hr>
      <div className="currency-label silver">
        <h2>{state.silver}</h2>
        <p>Silver</p>
      </div>
      <hr></hr>
      <div className="currency-label gold">
        <h2>{state.gold}</h2>
        <p>Gold</p>
      </div>
      <hr></hr>
      <div className="currency-label platinum">
        <h2>{state.platinum}</h2>
        <p>Platinum</p>
      </div>
    </div>
  );
};

export default CurrencyCard;
