const Router = require("express");
const cors = require("cors")
const { getAllDevices, createDevice, getOneDevice, sendGoodsToCart } = require('../controllers/index');

const router = new Router;

router.use(cors())

router.get("/device", getAllDevices)
router.get("/device/:id", getOneDevice)
router.post("/device", createDevice)
router.post("/cart", sendGoodsToCart)

module.exports = router