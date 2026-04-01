const service = require('../services/notesServices');

exports.getAllNotes = async (req, res) => {
    const notes = await service.getNotes();
    res.json(notes);
};

exports.getNoteById = async (request, response) => {
    const notes = await service.getNotes();
    const note = notes.find(note => note.id == request.params.id);

    if (!note) return response.status(404).json({ error: 'Not found' });
    response.json(note);
};
exports.createNote = async (request, response) => {

    const { title, content } = request.body;

    if (!title || !content || title.trim() === '' || content.trim() === '') {
        return response.status(400).json({ error: "Title and content required" });

    }

    const notes = await service.getNotes();

    const newNote = {
        id: Date.now(),
        title: String(title),
        content: String(content),
        status: "created",
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);
    await service.saveNotes(notes);

    response.status(201).json(newNote);
    // response.status(201).end();
};

// exports.deleteNote = async (request, response) => {
//    const notes = await service.getNotes();
//    const note = notes.find(n => n.id == request.params.id);
//    if (!note) {
//        return response.status(404).json({ error: 'Not found' });
//    }
//    const filtered = notes.filter(n => n.id != request.params.id);
//    await service.saveNotes(filtered);
//    response.status(200).json({ message: 'Deleted' });
// };

exports.deleteNote = async (request, response) => {
    const notes = await service.getNotes();
    const filtered = notes.filter(n => n.id != request.params.id);
    if (filtered.length === notes.length) {
        return response.status(404).json({ error: 'Not found' });
    }
    await service.saveNotes(filtered);
    response.status(200).json({ message: 'Deleted' });
};
exports.updateNote = async (request, response) => {
    const { id } = request.params;
    const { status, title, content, createdAt } = request.body;
    if (createdAt !== undefined) {
        return response.status(400).json({
            error: "createdAt cannot be modified"
        });
    }

    if (status !== 'closed') {
        return response.status(400).json({ error: "Status must be 'closed'" });
    }
    const notes = await service.getNotes();
    const note = notes.find(n => n.id == id);
    if (!note) {
        return response.status(404).json({ error: "Note not found" });
    }
    note.status = 'closed';
    await service.saveNotes(notes);
    response.status(200).json(note);
};


