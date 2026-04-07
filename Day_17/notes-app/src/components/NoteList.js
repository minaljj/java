export const formatDate = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("en-GB");
};

function NoteList({ notes, deleteNote, completeNote, toggleStatus,onEdit }) {
  return (
    <div className="table-container">
      <table className="notes-table">
        <thead>
          <tr>
            <th>SL NO</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>PRIORITY</th>
            <th>STATUS</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>TIME</th>
            <th>CREATED AT</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {notes.map((note, index) => (
            <tr key={note.id} >
              <td>{index + 1}</td>
              <td>{note.title}</td>
              <td>{note.description}</td>
              <td>{note.priority ?? "-"}</td>
              <td>{note.status.toUpperCase()}</td>
              <td>{formatDate(note.startdate)}</td>
              <td>{formatDate(note.endDate)}</td>
              <td>{note.time || "-"}</td>
              <td>
                {note.createdAt
                  ? new Date(note.createdAt).toLocaleString()
                  : "-"}
              </td>

              <td className="action-icons">

                <button
                  className={`icon-btn status ${note.status === "completed" ? "completed" : "created"
                    }`}
                  title="Toggle Status"
                  onClick={() => toggleStatus(note.id)}
                >
                  {note.status === "completed" ? "✔" : "○"}
                </button>

                <button
                  className="icon-btn complete"
                  title="Complete"
                  onClick={() => completeNote(note.id)}
                  disabled={note.status === "completed"}
                >
                  ✅
                </button>

                <button
                  className="icon-btn edit"
                  title="Edit"
                  onClick={() => onEdit(note)}
                >
                  ✏️
                </button>


                <button
                  className="icon-btn delete"
                  title="Delete"
                  onClick={() => deleteNote(note.id)}
                >
                  🗑️
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NoteList;