import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError";


const _repository = mongoose.model("Note", Note);

class NoteService {

  async getNotesByBugId(bugId) {
    let data = await _repository.find({ bugId });
    if (!data) {
      throw new ApiError("Invalid Id");
    }
    return data;
  };

  async getActiveNote(id) {
    let data = await _repository.find({ id });
    if (!data) {
      throw new ApiError("Invalid Id");
    }
    return data;
  };

  // trying to get notes to show up in api calls from the note.bug field instead of bug/id/notes
  async getNotesForActiveBug(bugId) {
    let data = await _repository.find({ bugId });
    if (!data) {
      throw new ApiError("Invalid Id");
    }
    return data;
  };

  async createNote(rawData) {
    let data = await _repository.create(rawData);
    return data;
  };

  async editNote(noteId, update) {
    let data = await _repository.findOneAndUpdate(noteId, update, { new: true }); //may not need new:true
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    };
  };

  async deleteNote(noteId) {
    let data = await _repository.findByIdAndRemove({ _id: noteId });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    };
  };
}

const noteService = new NoteService();
export default noteService;