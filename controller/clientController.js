const clientService = require("../service/clientService");

exports.fetchAll = async (req, res) => {

    const clients = await clientService.fetchAllClients();
    const response = {
        status: "success",
        data: clients
    }
    res.status(200).json(response)
}

exports.fetchSingle = async (req, res) => {
    const id = req.params.id;
    const client = await clientService.fetchSingleClients(id);
    const response = {
        status: "success",
        data: client
    }
    res.status(200).json(response)
}

exports.create = async (req, res) => {
    const client = req.body;
    const newClient = await clientService.createClient(client);
    const response = {
        status: "success",
        data: newClient
    }
    res.status(201).json(response)
}

