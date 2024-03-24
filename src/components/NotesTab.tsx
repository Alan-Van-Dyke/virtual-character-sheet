import "../style/NotesTab.css";
import NoteColumn from "./NoteColumn";
import { useCharacterContext } from "../context/CharacterContext";


const NotesTab = () => {
  const { state, dispatch } = useCharacterContext();

  return (
    <div className="notes-container">
      {state.characterNotes.map((item, index) => {
        return (
          <NoteColumn
            key={index}
            title={item.title}
            content={item.content}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default NotesTab;
