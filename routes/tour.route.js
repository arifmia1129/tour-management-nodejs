const express = require("express");
const router = express.Router();
const tourController = require("../controller/tour.controller.js");


router.route("/")
    .get(tourController.getTour)
    .post(tourController.saveTour)



router.route("/:id")
    .get(tourController.getTourById)
module.exports = router;