function NoteList({ notes, deleteNote }) {
  return (
    <div className="table-container">
      <table className="notes-table">
        <thead>
          <tr>
            <th>SL NO</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>STATUS</th>
            <th>COMPLETION TARGET</th>
            <th>CREATION TIME</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {notes.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty">No notes available</td>
            </tr>
          ) : (
            notes.map((note, index) => (
              <tr key={note.id}>
                <td>{index + 1}</td>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>{note.status.toUpperCase()}</td>
                <td>
                  {note.date || "-"}
                  {note.time && <br />}
                  {note.time}
                </td>
                <td>
                  {note.createdAt
                    ? new Date(note.createdAt).toLocaleString()
                    : "-"}
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default NoteList;