const Task = require("../model/Task");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: `${error}` });
  }
};

const createTask = async (req, res) => {
  try {
    const tasks = await Task.create(req.body);
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({
      // message: "There might be a problem in your codes ",
      main: `${error}`,
    });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskID = await Task.findOne({ _id: id });
    if (!taskID) {
      res.status(404).json({ msg: `The ${id} provided does not exist:D` });
    } else {
      res.status(200).json({ taskID });
    }
  } catch (error) {
    res.status(500).json({
      // message: "There might be a problem in your codes ",
      main: `${error}`,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `The ${id} provided does not exist:D` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      // message: "There might be a problem in your codes ",
      main: `${error}`,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ msg: `The ${id} provided does not exist:D` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      // message: "There might be a problem in your codes ",
      main: `${error}`,
    });
  }
};

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
