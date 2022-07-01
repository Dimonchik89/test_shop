const { device, cart } =  require("../models/models");

const getAllDevices = async (req, res) => {
    let {limit, page, ...tailQuery} = req.query
    page = page || 1;
    limit = limit || 20
    let offset = page * limit - limit;

    if(tailQuery) {
        const obj = {}
        for(let key in tailQuery) {
            obj[key] = tailQuery[key].split(",")
        }
        const sortDevices = await device.findAndCountAll({where: obj, limit, offset})
        return res.json(sortDevices)

    } else {
        const allDevices = await device.findAndCountAll({limit, offset})
        return res.json(allDevices)
    }

}

const createDevice = async (req, res) => {
    const { title, brand, img, price, count, description, category } = req.body;
    const good = await device.create({ title, brand, img, price, count, description, category })
    return res.json(good)
}

const getOneDevice = async (req, res) => {
    const {id} = req.params;
    const good = await device.findOne({where: {id}})
    return res.json(good)
}

const sendGoodsToCart = async (req, res) => {
    const data = req.body;
    const buyGoods = await cart.create(data);
    return res.json(buyGoods)
}

module.exports = {
    getAllDevices,
    createDevice,
    getOneDevice,
    sendGoodsToCart
}