const express = require("express");
const router = express.Router();
const {
  addType,
  getTypes,
  updateType,
  getType,
} = require("../../Controllers/Car/typeController");
const { protectAdmin } = require("../../Middleware/Admin/AdminMiddleware");
router
  .post("/", protectAdmin, addType)
  .get("/", getTypes)
  .put("/:type_id", protectAdmin, updateType)
  .get("/:type_id", getType)

module.exports = router;
