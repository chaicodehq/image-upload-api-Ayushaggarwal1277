import mongoose, { Error } from 'mongoose';

/**
 * TODO: Connect to MongoDB
 *
 * 1. Check if uri is provided (throw error if not: "MongoDB URI is required")
 * 2. Connect using mongoose.connect(uri)
 * 3. Return mongoose.connection
 */
export async function connectDB(uri) {
  // Your code here
  try {
    if(!uri) {
      throw new Error("MongoDB URI is required")
    }
  
    const connection = await mongoose.connect(uri);
    if(!connection) throw new Error("Error while connecting to  DB");

    return connection;
    
  } catch (err) {
    console.log(err.message);
    // Re-throw the error to be handled by the caller
    throw err;
  }
}
