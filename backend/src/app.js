import express from "express"

const app = express(); // create an express app

app.use(express.json());
//routs import
import userRouter from './routes/user.route.js';

//routes declaration
app.use("/api/v1/users", userRouter);

//ewample route: http://localhost:4000/api/v1/users/register

export default app;