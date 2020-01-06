import express from "express";
import bugService from "../services/BugService";

export default class BugController {

  constructor() {
    this.router = express
      .Router()
      .get("", this.getBugs)
      .get("/:id", this.getById)
      .post("", this.createBug)
      .put("/:id", this.editOpenBug)
      .delete("/:id", this.closeBug)
  }

  async getBugs(req, res, next) {
    try {
      let data = await bugService.getBugs();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  };

  async getById(req, res, next) {
    try {
      let data = await bugService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  };

  async createBug(req, res, next) {
    try {
      let data = await bugService.createBug(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    };
  };

  async editOpenBug(req, res, next) {
    try {
      let data = await bugService.editOpenBug(req.params.id, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  };

  async closeBug(req, res, next) {
    try {
      await bugService.closeBug(req.params.id);
      return res.send("Successfully Closed");
    } catch (error) {
      next(error);
    }
  };
};