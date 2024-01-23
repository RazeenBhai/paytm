const express = require("express");
const rootRouter = require("./routes/index");
const accountRouter = require("./routes/account");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/v1", rootRouter);
app.use("/api/v1", accountRouter);

app.listen(3000);