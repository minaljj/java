const fs = require('fs').promises;
const FILE = 'notes.json';

async function init() {
    try {
        await fs.access(FILE);
    } catch {
        await fs.writeFile(FILE, JSON.stringify([]));
    }
}

async function getnotes() {
    const data = await fs.readFile(FILE, 'utf8');
    return JSON.parse(data);
}

async function savenotes(notes) {
    await fs.writeFile(FILE, JSON.stringify(notes, null, 2));
}

async function addnote(title, content) {
    if(!title||title.trim()===''){
        console.log("Title cannot be empty");
        return
    }
     if(!content||content.trim()===''){
        console.log("content cannot be empty");
        return
    }
    const notes = await getnotes();
    const newnote = {
        id: Date.now(),
        title,
        content
    };
    notes.push(newnote);
    await savenotes(notes);
    console.log('note added:', newnote);
}

async function listnotes() {
    const notes = await getnotes();
    console.log(notes);
}

async function getnote(id) {
    const notes = await getnotes();
    const note = notes.find(note => note.id == id);
    if (!note) return console.log('note not found');
    console.log(note);
}

async function updatenote(id, newContent) {
    const notes = await getnotes();
    const updated = notes.map(note =>
        note.id == id ? { ...note, content: newContent } : note
    );
    await savenotes(updated);
    console.log('note updated');
}

async function deletenote(id) {
    const notes = await getnotes();
    const filtered = notes.filter(note => note.id != id);
    await savenotes(filtered);
    console.log('note deleted');
}

async function run() {
    await init();

    const [, , command, ...args] = process.argv;

    switch (command) {
        case 'add':
            await addnote(args[0], args[1]);
            break;
        case 'list':
            await listnotes();
            break;
        case 'get':
            await getnote(args[0]);
            break;
        case 'update':
            await updatenote(args[0], args[1]);
            break;
        case 'delete':
            await deletenote(args[0]);
            break;
        default:
            console.log(`
                Usage:
                node app.js add "Title" "Content"
                node app.js list
                node app.js get <id>
                node app.js update <id> "new content"
                node app.js delete <id>
                `);
    }
}

run();