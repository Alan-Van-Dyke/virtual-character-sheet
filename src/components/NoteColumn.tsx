import "../style/NoteColumn.css";
import { useCharacterContext } from "../context/CharacterContext";

interface NoteColumnProps {
  index: number;
  title: string;
  content: string;
}

const NoteColumn = ({ title, content, index }: NoteColumnProps) => {
  const { state, dispatch } = useCharacterContext();
  return (
    <div className="notes-col">
      <input
        type="text"
        className="notes-title"
        placeholder="Note category name..."
        defaultValue={title}
        onChange={(event) => {
          dispatch({
            type: "CHANGE_NOTE_SECTION",
            payload: {
              index: index,
              title: event.target.value,
              content: state.characterNotes[index].content,
            },
          });
        }}
      ></input>
      <hr></hr>
      <textarea
        className="notes-content"
        placeholder="Add some notes here..."
        defaultValue={content}
        onChange={(event) => {
          dispatch({
            type: "CHANGE_NOTE_SECTION",
            payload: {
              index: index,
              title: state.characterNotes[index].title,
              content: event.target.value,
            },
          });
        }}
      ></textarea>
    </div>
  );
};

export default NoteColumn;
