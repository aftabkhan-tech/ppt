import mongoose from "mongoose";

const connectdb = async () => {
  try {
    console.log("MONGODB_URL EXISTS:", !!process.env.MONGODB_URL);

    console.log(
      "MONGODB HOST:",
      process.env.MONGODB_URL?.split("@")[1]?.split("/")[0]
    );

    const connection = await mongoose.connect(
      process.env.MONGODB_URL
    );

    console.log(
      "DATABASE CONNECTED:",
      connection.connection.host
    );

  } catch (error) {
    console.log("DATABASE ERROR:", error);
    throw error;
  }
};

export default connectdb;
