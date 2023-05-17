import mongoose from "mongoose";

mongoose.set("strictQuery", false);

// Creating a DB connection
const connectDb = async () => {
  if (!process.env.MONGOURL) {
    throw new Error("MongoDB connection URL is not defined.");
  }

  await mongoose.connect(process.env.MONGOURL);
  console.log("MongoDB Server is up and running");
};

export default connectDb;
