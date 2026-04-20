function NoteItem({ note, deleteNote }) {
  return (
    <li className={`note-item ${note.status}`}>
      <div className="content">
        <strong>{note.title}</strong>

        {note.description && (
          <p className="description">{note.description}</p>
        )}

        <p className="status">Status: {note.status}</p>

        {(note.date || note.time) && (
          <p className="datetime">
            {note.date && new Date(note.date).toLocaleDateString()}
            {note.time && ` • ${note.time}`}
          </p>
        )}
      </div>

      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </li>
  );
}

export default NoteItem;