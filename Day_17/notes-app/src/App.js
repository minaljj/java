import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { getNotes, deleteNoteApi } from "./services/api";
import "./App.css";
import StatusBarChart from "./components/StatusBarChart";

function App() {
  const [notes, setNotes] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState("");
  const [editNote, setEditNote] = useState(null);
  const [sortBy, setSortBy] = useState("createdAt");

  useEffect(() => {
    getNotes().then((res) => setNotes(res.data));
  }, []);

  const addNote = (note) => {
    if (editNote) {
      setNotes((prev) =>
        prev.map((n) => (n.id === editNote.id ? note : n))
      );
      setEditNote(null);
    } else {
      setNotes((prev) => [...prev, note]);
    }
    setShowAdd(false);
  };

  const deleteNote = (id) => {
    deleteNoteApi(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };


  const filteredNotes = [...notes]
    .filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "createdAt")
        return new Date(b.createdAt) - new Date(a.createdAt);

      if (sortBy === "priority")
        return (b.priority || 0) - (a.priority || 0);

      if (sortBy === "title")
        return a.title.localeCompare(b.title);

      return 0;
    });

  const toggleStatus = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
            ...note,
            status: note.status === "completed" ? "created" : "completed",
          }
          : note
      )
    );
  };

  return (
    <div className="app">
      <Navbar
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        search={search}
        setSearch={setSearch}
      />

      {!showAdd && <StatusBarChart notes={notes} />}
      {!showAdd && (
        <div className="sort-container">
          <label>Sort By:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="createdAt">Latest</option>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      )}

      {showAdd ? (
        <NoteForm addNote={addNote} editNote={editNote} />
      ) : (
        <NoteList
          notes={filteredNotes}
          deleteNote={deleteNote}
          toggleStatus={toggleStatus}
          onEdit={(note) => {
            setEditNote(note);
            setShowAdd(true);
          }}
        />
      )}
    </div>
  );
}

export default App;