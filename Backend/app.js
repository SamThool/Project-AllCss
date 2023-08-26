const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(express.json());
const user = require("./routes/userRoute");
app.use(user);

app.use(errorMiddleware);
module.exports = app;
