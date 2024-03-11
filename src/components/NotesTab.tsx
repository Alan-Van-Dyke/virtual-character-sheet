import "../style/NotesTab.css";
import NoteColumn from "./NoteColumn";

interface NotesTabProps {
  charNotes: { title: string; content: string }[];
  setCharNotes: (charNotes: { title: string; content: string }[]) => void;
}

const NotesTab = ({ charNotes, setCharNotes }: NotesTabProps) => {
  function updateNoteContent(index: number, content: string) {
    var newNotes = [...charNotes];
    newNotes[index].content = content;
    setCharNotes(newNotes);
  }

  function updateNoteTitle(index: number, title: string) {
    var newNotes = [...charNotes];
    newNotes[index].title = title;
    setCharNotes(newNotes);
  }
  return (
    <div className="notes-container">
      {charNotes.map((item, index) => {
        return (
          <NoteColumn
            key={index}
            title={item.title}
            content={item.content}
            index={index}
            updateNoteContent={updateNoteContent}
            updateNoteTitle={updateNoteTitle}
          />
        );
      })}
    </div>
  );
};

export default NotesTab;
