const service = require('../services/notesServices');

exports.getAllNotes = async (req, res) => {
  const notes = await service.getNotes();
  res.json(notes);
};

exports.getNoteById=async(request,response)=>{
    const notes=await service.getNotes();
    const note=notes.find(note=>note.id==request.params.id);

    if(!note)return response.status(404).json({error:'Not found'});
    response.json(note);
};
exports.createNote=async(request,response)=>{
    
    const {title, content}=request.body;

    if(!title || !content){
        return response.status(404).json({error:"Title and content required"});

    }

    const notes=await service.getNotes();

    const newNote={
        id:Date.now(),
        title,
        content
    };

    notes.push(newNote);
    await service.saveNotes(notes);

     response.status(201).json(newNote);
};


exports.deleteNote=async (request,response)=>{
    const notes=await service.getNotes();
    const filtered=notes.filter(note=>note.id !=req.params.id);

    await service.saveNotes(filtered);
    response.json({message:'Deleted'})
}