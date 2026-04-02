import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    const newNote = { ...note };
    newNote.id = Date.now(),
      setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  }
  return (

    <div className="app">
      <h1>Note App</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>

  );
}

export default App;
