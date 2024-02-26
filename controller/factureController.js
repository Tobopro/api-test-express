const factureService = require("../service/factureService");

exports.fetchAll = async (req, res) => {

    const factures = await factureService.fetchAllFacture();
    const response = {
        status: "success",
        data: factures
    }
    res.status(200).json(response)
}

