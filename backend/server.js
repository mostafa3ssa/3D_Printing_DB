import express from 'express';
import connectDB from './db.js';
import dotenv from 'dotenv'

const app = express();
const port = process.env.PORT | 5000;
dotenv.config();

app.use(express.json());

app.get("/", async (req, res) => {
    return res.status(201).json("Hello World!");
});

app.listen(port, async () => {
    try {
        await connectDB();
        console.log(`server is listening on port ${port}`);
    } catch(err) {
        console.error('Failed to connect to MongoDB, server not started.');
        process.exit(1);
    }
})