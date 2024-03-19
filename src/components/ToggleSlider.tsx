import "../style/ToggleSlider.css";

interface ToggleSliderProps {
    handleToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSlider = ({handleToggle}: ToggleSliderProps) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={handleToggle}></input>
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSlider;
