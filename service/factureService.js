const db = require("../database")

exports.fetchAllFacture = async () => {
    const result = await db.execute('SELECT * FROM factures');
    return result[0];
}