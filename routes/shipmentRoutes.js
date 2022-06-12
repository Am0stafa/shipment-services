const express = require("express");

const shipmentController = require("../controllers/shipmentController");

const router = express.Router();

router
  .route("/")
  .get(shipmentController.getAll)
  .post(shipmentController.createShipment); 
  
  
  router
  .route("/:id")
  .get(shipmentController.getById)
router
  .route("/:id/delete")
  .get(shipmentController.deleteShipment);
module.exports = router;