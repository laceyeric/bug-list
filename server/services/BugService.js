import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getBugs() {
    return await _repository.find({});
  };

  async getById(bugId) {
    let data = await _repository.findById(bugId);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  };

  async createBug(rawData) {
    let data = await _repository.create(rawData);
    return data;
  };

  async closeBug(id) {
    let data = await _repository.findByIdAndUpdate({ _id: id }, { closed: true });
    if (!data) {
      throw new ApiError("invalid ID", 400);
    };
  };
  async editOpenBug(id, update) {
    let data = await _repository.findOneAndUpdate(id, { closed: false }, update);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
};


const bugService = new BugService();
export default bugService;