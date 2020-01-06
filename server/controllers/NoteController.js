import express from "express";
import noteService from "../services/NoteService";

export default class Notecontroller {

  constructor() {
    this.router = express
      .Router()
      .get("/bugs/:id/notes", this.getNotesByBugId)
      .get("/notes/:id", this.getActiveNote)
      .post("/notes", this.createNote)
      .put("/bugs/:id/notes/:id", this.editNote)
      .delete("/notes/:id", this.deleteNote)
  };

  async getNotesByBugId(req, res, next) {
    try {
      let data = await noteService.getNotesByBugId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  };

  async getActiveNote(req, res, next) {
    try {
      let data = await noteService.getActiveNote(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  };
  // trying to get notes to show up in api calls from the note.bug field instead of bug/id/notes
  async getNotesForActiveBug(req, res, next) {
    try {
      let data = await noteService.getNotesForActiveBug(req.params.bug);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  };

  async createNote(req, res, next) {
    try {
      let data = await noteService.createNote(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    };
  };

  async editNote(req, res, next) {
    try {
      let data = await noteService.editNote(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    };
  };

  async deleteNote(req, res, next) {
    try {
      await noteService.deleteNote(req.params.id);
      return res.send("Successfully Deleted Note");
    } catch (error) {
      next(error);
    };
  };

}