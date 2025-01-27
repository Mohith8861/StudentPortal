const express = require("express");
const router = express.Router();
const resourceController = require("../controller/resourceController");
const authController = require("../controller/authController");

router.post("/", authController.protect, resourceController.createResource);
router.get("/", resourceController.getAllResources);
router.get("/:id", resourceController.getResource);
router.get("/user/:userId", resourceController.getResourcesByUser);
router.patch("/:id", authController.protect, resourceController.updateResource);
router.delete(
  "/:id",
  authController.protect,
  resourceController.deleteResource
);

module.exports = router;
