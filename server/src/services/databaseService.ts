import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

const connectMongoDB = async () => {
  await connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB}`, {
    appName: process.env.MONGODB_APP,
    retryWrites: true,
    retryReads: true,
  });
};

export default connectMongoDB;
