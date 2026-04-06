import { useState } from "react";

function NoteForm({ addNote }) {
    const [note, setNote] = useState({
        title: "",
        status: "open",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!note.title.trim()) return;

        addNote({
            title: note.title.trim(),
            status: note.status,
        });

        setNote({ title: "", status: "open" });
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setNote((prevNote) => ({
            ...prevNote,
            [name]:
                type === "checkbox"
                    ? checked
                        ? "closed"
                        : "open"
                    : value,
        }));
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <input
                className="note-input"
                name="title"
                placeholder="Enter note"
                value={note.title}
                onChange={handleChange}
            />

            <label className="checkbox-label">

                <input
                    type="checkbox"
                    name="status"
                    checked={note.status === "closed"}
                    onChange={handleChange}
                />
                Closed
            </label>

            <button type="submit">Add</button>
        </form>
    );
}

export default NoteForm;
