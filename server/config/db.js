import mongoose from "mongoose";

const connectdb = async () => {
  const mongoUrl = process.env.MONGODB_URL;

  if (!mongoUrl) {
    throw new Error("MONGODB_URL is not defined");
  }

  if (mongoUrl.includes("127.0.0.1") || mongoUrl.includes("localhost")) {
    throw new Error(
      "MONGODB_URL is pointing to localhost. Use MongoDB Atlas URL on Render."
    );
  }

  try {
    console.log("Connecting to MongoDB Atlas...");

    const connection = await mongoose.connect(mongoUrl);

    console.log(
      "MongoDB Connected:",
      connection.connection.host
    );
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    throw error;
  }
};

export default connectdb;
