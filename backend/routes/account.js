// backend/routes/account.js
const express = require("express");
const { authMiddleware } = require("../middleware");
const router = express.Router();
const { Account } = require("../db");

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  res.json({
    balance: account.balance,
  });
});

module.exports = router;
