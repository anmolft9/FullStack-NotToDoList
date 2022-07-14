import express from "express";
import {
  getSingleTask,
  getTask,
  insertTask,
  deleteTask,
  updateTask,
} from "./model/task/TaskModel.js";

const router = express.Router();

router.get("/:_id?", async (req, res, next) => {
  try {
    // const { _id } = req.params;

    // let data = fakeDB;

    // if (_id) {
    //   data = fakeDB.filter((item) => item._id === +_id);
    // }
    const { _id } = req.params;

    const result = _id ? await getSingleTask(_id) : await getTask();

    ///query the db and get all the task
    res.json({
      status: "success",
      message: "you hit the get root route",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

////POST
router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);
    //call db query to the store
    // fakeDB.push(req.body);
    const result = await insertTask(req.body);
    console.log(result);

    result?._id
      ? res.json({
          status: "success",
          message: "success",
        })
      : res.json({
          status: "failed",
          message: "failed",
          result,
        });
  } catch (error) {
    next(error);
  }
});

//////PATCH
router.patch("/", async (req, res, next) => {
  try {
    //
    // console.log(req.body);
    const { _id, type } = req.body;

    const result = await updateTask(_id, type);
    // console.log(result);

    res.json({
      status: "success",
      message: "you hit the post patch route",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

/////DELETE
router.delete("/", async (req, res, next) => {
  try {
    // const { _id } = req.body;
    // delete single item
    // const { _id } = req.params;
    // const result = _id
    //   ? await deleteTask(_id)
    //   : console.log("id doesnot exist");

    const ids = req.body;
    const result = await deleteTask(ids);

    // console.log(result);

    res.json({
      status: "success",
      message: "you hit the post delete route",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
