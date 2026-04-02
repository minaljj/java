function NoteItem({ note, deleteNote }) {
    return (
        <li className={`note-item ${note.status}`}>
            <span>{`${note.title} — ${note.status}`}</span>
            <button className="delete-btn"
            onClick={() => deleteNote(note.id)}>Delete</button>
        </li>
    );
}
export default NoteItem;