import Vehicle from "../models/vehicle_model.js"

export const store = async (req, res) => {
    try {
        const content = await Vehicle.create(req.body);
        res.status(201).json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const index = async (req, res) => {
    try {
        const content = await Vehicle.find(req.query).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const show = async (req, res) => {
    try {
        const content = await Vehicle.findById(req.params.id).populate("cliente").exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const update = async (req, res) => {
    try {
        const content = await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const destroy = async (req, res) => {
    try {
        const content = await Vehicle.findByIdAndDelete(req.params.id).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}