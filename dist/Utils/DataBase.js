import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://faraz123:sample123@cluster0.lgjanjr.mongodb.net/`, {
            dbName: "faraz123"
        });
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
export default connectDB;
