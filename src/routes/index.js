const { Router } = require("express");
const heartRateRouter = require("./../modules/heart-rate/heart-rate.route");
const router = Router();

router.use("/heart-rate", heartRateRouter);
module.exports = router;
