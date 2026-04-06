import { useState } from "react";
import { addNoteApi } from "../services/api";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const res = await addNoteApi({
      title,
      description,
      status: completed ? "completed" : "created",
      date,
      time,
      createdAt: new Date().toISOString(),
    });

    addNote(res.data);

    // ✅ clear form
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setCompleted(false);
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="date-time">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed
      </label>

      <button>Add Note</button>
    </form>
  );
}

export default NoteForm;