// import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

console.log("DB_NAME:", DB_NAME); // From constants.js
console.log("MONGODB_URI:", process.env.MONGODB_URI); // From .env

const connectDB = async () => {
  try {
    //connect to the database
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
