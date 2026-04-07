function Navbar({ showAdd, setShowAdd, search, setSearch }) {
  return (
    <>
      <div className="nav">
        <span
          className={`nav-item ${!showAdd ? "active" : ""}`}
          onClick={() => setShowAdd(false)}
        >
          Notes
        </span>

        <span className="nav-separator">|</span>

        <span
          className={`nav-item ${showAdd ? "active" : ""}`}
          onClick={() => setShowAdd(true)}
        >
          Add Note
        </span>
      </div>

      {!showAdd && (
        <input
          className="search-input"
          type="text"
          placeholder="Search notes by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
    </>
  );
}

export default Navbar;