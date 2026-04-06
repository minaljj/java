import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { getNotes, deleteNoteApi } from "./services/api";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes().then((res) => setNotes(res.data));
  }, []);

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (id) => {
    deleteNoteApi(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <Navbar />

      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;