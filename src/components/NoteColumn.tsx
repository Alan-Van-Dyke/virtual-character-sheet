import "../style/NoteColumn.css";

interface NoteColumnProps {
  index: number;
  title: string;
  content: string;
  updateNoteContent: (index: number, content: string) => void;
  updateNoteTitle: (index: number, title: string) => void;
}

const NoteColumn = ({
  title,
  content,
  index,
  updateNoteContent,
  updateNoteTitle,
}: NoteColumnProps) => {
  return (
    <div className="notes-col">
      <input
        type="text"
        className="notes-title"
        placeholder="Note category name..."
        defaultValue={title}
        onChange={(event) => {
          updateNoteTitle(index, event.target.value);
        }}
      ></input>
      <hr></hr>
      <textarea
        className="notes-content"
        placeholder="Add some notes here..."
        defaultValue={content}
        onChange={(event) => {
          updateNoteContent(index, event.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default NoteColumn;
