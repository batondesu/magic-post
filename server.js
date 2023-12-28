const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routesInit = require("./BE/routes/indexRoute.js");

const dotenv = require("dotenv");
dotenv.config();

const db = require("./BE/models/index.js");
async () => {
  await db.sequelize.sync();
};

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
routesInit(app);
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});