const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

//  UNHANDLED UNCAUGHT EXECPTION - some thing incorect or typo in code
process.on("uncaughtException", (err) => {
  console.log(`ERROR : : ${err.message}`);
  console.log(`SHUTTING DOWN THE SERVER DUE TO UNCAUGHT EXECPTION`);
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });
// connecting database
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`SERVER IS WORKING ON http://localhost:${process.env.PORT}`);
});

//  UNHANDLED PROMISE REJECTION -if mongodb string is incorrect
process.on("unhandledRejection", (err) => {
  console.log(`ERROR : : ${err.message}`);
  console.log(`SHUTTING DOWN THE SERVER DUE TO UNHANDLED PROMIS REJECTION`);

  server.close(() => {
    process.exit(1);
  });
});
