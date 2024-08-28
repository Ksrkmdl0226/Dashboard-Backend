const dashboardController = require("../controller/dashboardController");

const router = require("express").Router();

router.get(`/auth/getDashboard`, dashboardController.getDashBoardDetails);
router.get(`/auth/getDetails`, dashboardController.getDetails), 

module.exports = router;
