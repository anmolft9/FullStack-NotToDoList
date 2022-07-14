import TaskSchema from "./TaskSchema.js";

//insert query
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};
//select query
export const getTask = () => {
  return TaskSchema.find();
};
export const getSingleTask = (_id) => {
  return TaskSchema.findById(_id);
};

//update query
export const updateTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type }, { new: true });
};

//delete one query
export const deleteTaskById = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};
//delete query
export const deleteTask = (ids) => {
  return TaskSchema.deleteMany({
    _id: {
      $in: ids,
    },
  });
};
