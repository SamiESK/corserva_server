const Sale = require('../models/sales');

exports.getAll = async (req, res, next) => {
    try {
        const ALL = await Sale.findAll();
        return res.status(200).json(ALL);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOne = async (req, res, next) => {
    try {
        const sale = await Sale.findByPk(req.params.uuid);
        return res.status(200).json(sale);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.createOne = async (req, res, next) => {
    try {
        const USER_MODEL = {
            productName: req.body.productName,
            description: req.body.description,
            price: req.body.price,
        };

        try {
            const sale = await Sale.create(USER_MODEL);
            console.log('Sale created');
            return res.status(201).json(sale);
        } catch (error) {
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateOne = async (req, res, next) => {
    try {
        const USER_MODEL = {
            productName: req.body.productName,
            description: req.body.description,
            price: req.body.price,
        };

        try {
            const sale = await Sale.update(USER_MODEL, {
                where: { uuid: req.params.uuid },
            });
            return res.status(200).json(sale);
        } catch (error) {
            return res.status(500).json(error);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteOne = async (req, res, next) => {
    try {
        const sale = await Sale.destroy({
            where: { uuid: req.params.uuid },
        });
        return res.status(200).json(sale);
    } catch (error) {
        return res.status(500).json(error);
    }
};
