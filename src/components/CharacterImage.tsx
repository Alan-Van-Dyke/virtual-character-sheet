import { useRef } from "react";
import { useCharacterContext } from "../context/CharacterContext";
import { deathImageOverlay } from "../context/deathImageOverlay";
import "../style/CharacterImage.css";

const CharacterImage = () => {
  const { state, dispatch } = useCharacterContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const f = event.target.files ? event.target.files[0] : null;
    if (f) {
      encodeImage(f);
    }
  };

  const encodeImage = (f: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = 256;
        let width = image.width;
        let height = image.height;

        if (width > height) {
          height *= maxSize / width;
          width = maxSize;
        } else {
          width *= maxSize / height;
          height = maxSize;
        }
        canvas.width = maxSize;
        canvas.height = maxSize;

        const xPos = (maxSize - width) / 2;
        const yPos = (maxSize - height) / 2;

        const ctx = canvas.getContext("2d");
        ctx!.drawImage(image, xPos, yPos, width, height);

        const base64String = canvas.toDataURL("image/png");
        dispatch({
          type: "CHANGE_CHARACTER_IMAGE",
          payload: { newImage: base64String },
        });
      };
      image.src = e.target!.result as string;
    };
    reader.readAsDataURL(f);
  };

  return (
    <div className="character-picture-card">
      <div
        className="character-picture-container"
        onClick={(e) => fileInputRef.current?.click()}
        title="Click to upload image"
      >
        <input
          type="file"
          onChange={handleUpload}
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <img
          src={state.characterImage}
          className={state.deathSaveFails === 3 ? "dead-image" : ""}
        ></img>
      </div>
      <div
        className="character-picture-container character-picture-death-overlay"
        style={state.deathSaveFails === 3 ? {} : { display: "none" }}
      >
        <img src={deathImageOverlay}></img>
      </div>
      <p onClick={(e) => fileInputRef.current?.click()}>
        <i>Click to upload new image</i>
      </p>
    </div>
  );
};

export default CharacterImage;
