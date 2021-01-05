import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/Shop';

//const url = process.env.MONGO_URI

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
