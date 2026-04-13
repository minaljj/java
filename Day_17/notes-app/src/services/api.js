import axios from "axios";

const API = "http://localhost:8080/notes";

export const getNotes = () => axios.get(API);
export const addNoteApi = (note) => axios.post(API, note);
export const updateNoteApi = (id, note) => axios.put(`${API}/${id}`, note);
export const deleteNoteApi = (id) => axios.delete(`${API}/${id}`);