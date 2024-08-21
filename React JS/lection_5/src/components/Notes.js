import { useContext, useState } from "react";
import { NotesContext, ThemeContext } from "../App";

// const useTheme = () => useContext(ThemeContext);
const useNotes = () => useContext(NotesContext);

export const NotesList = () => {
  const { notes } = useNotes();

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
};

export const NoteInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { addNote } = useNotes();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    addNote(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNote}>add</button>
    </div>
  );
};
