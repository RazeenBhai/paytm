const express = require("express");
const rootRouter = require("./routes/index");
const rootRouter = require("./routes/account");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/v1", rootRouter);
router.use("/account", accountRouter);

app.listen(3000);