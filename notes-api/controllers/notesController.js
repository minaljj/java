let notes = []; 

exports.getAllNotes = (req, res) => {
  console.log(req.method);
  res.status(200).json(notes);  
};

exports.createNote = (req, res) => {
  const { title, status } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newNote = {
    id: Date.now(),
    title,
    status: status || "created"
  };

  notes.push(newNote);
  res.status(201).json(newNote);
};