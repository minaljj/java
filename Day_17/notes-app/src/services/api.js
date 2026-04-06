import axios from "axios";
const API = "http://localhost:3001/notes";
export const getNotes = () => axios.get(API);
export const addNoteApi = (note) => axios.post(API, note);
export const deleteNoteApi = (id) =>
  axios.delete(`${API}/${id}`);
