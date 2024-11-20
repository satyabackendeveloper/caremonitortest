const { Router } = require("express");
const heartRateController = require("./heart-rate.controller");

const heartRateRouter = Router();

heartRateRouter.post("/process", heartRateController.processHeartRate);
module.exports = heartRateRouter;
