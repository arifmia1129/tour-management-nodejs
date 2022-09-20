const express = require("express");
const router = express.Router();
const tourController = require("../controller/tour.controller.js");


router.route("/trending")
    .get(tourController.getTrendingTour)

router.route("/:id")
    .patch(tourController.updateTourById)


module.exports = router;