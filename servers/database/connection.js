import  mongoose  from "mongoose";

export default async () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL, () => {
      console.log("Connected to MongoDB");
    });
    
};