import express from 'express';
import connectDB from './Utils/DataBase.js';
import userRouter from './Routes/user.router.js';
import dotenv from "dotenv";

const app = express();
const PORT = 4000;

connectDB();
dotenv.config()
// Middleware to parse incoming JSON requests
app.use(express.json());

// Route for the home page
app.get("/", (req, res) => {
    res.json({ message: "API working with api/v1", success: true }).status(201);
});

// User routes
app.use("/api/v1/user", userRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Express server is listening at ${PORT}`);
});
