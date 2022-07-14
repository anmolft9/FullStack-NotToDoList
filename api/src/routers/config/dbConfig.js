import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    // const MONGO_CLIENT = "mongodb://localhost/march_task_list";
    // process.env.MONGO_CLIENT
    const conn = mongoose.connect(process.env.MONGO_CLIENT);
    conn && console.log("Mongo connected");
  } catch (error) {
    console.log(error);
  }
};
