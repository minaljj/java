import { useState, useEffect } from "react";
import { addNoteApi } from "../services/api";

function NoteForm({ addNote, editNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startdate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [time, setTime] = useState("");
  const [completed, setCompleted] = useState(false);
  const [priority, setPriority] = useState(0);

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title || "");
      setDescription(editNote.description || "");
      setstartDate(editNote.startdate || "");
      setendDate(editNote.endDate || "");
      setTime(editNote.time || "");
      setCompleted(editNote.status === "completed");
      setPriority(editNote.priority || 0);
    }
  }, [editNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const res = await addNoteApi({
      id: editNote?.id,
      title,
      description,
      status: completed ? "completed" : "created",
      startdate,
      endDate,
      priority,
      time,
      createdAt: editNote?.createdAt || new Date().toISOString(),
    });

    addNote(res.data);
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          maxLength={20}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span
          className={`char-inside ${title.length >= 18 ? "danger" : ""
            }`}
        >
          {title.length}/20
        </span>
      </div>

      <textarea
        placeholder="Enter description"
        value={description}
        maxLength={200}
        onChange={(e) => setDescription(e.target.value)}
      />
      <p className="char-count">
        {description.length} / 200
      </p>

      <div className="date-time">
        <div className="date-field">
          <label>Start Date : </label>
          <input
            type="date"
            value={startdate}
            onChange={(e) => setstartDate(e.target.value)}
          />
        </div>

        <div className="date-field">
          <label>End Date : </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setendDate(e.target.value)}
          />
        </div>

        <div className="date-field">
          <label>Time : </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <label>
        Priority: <strong>{priority}</strong>
      </label>

      <input
        type="range"
        min="0"
        max="30"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      />

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Status
      </label>


      <button type="submit">
        {editNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default NoteForm;