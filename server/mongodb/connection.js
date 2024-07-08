import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect("mongodb+srv://meenanandu016:VouQgkfdHw1wDWTu@nanduapi.6raf9qf.mongodb.net/NanduAPI?retryWrites=true&w=majority")
    .then(() => {
      console.log("MongoDB connect successfully.");
    })
    .catch((err) => console.log(err));
};

export default connectDB;
