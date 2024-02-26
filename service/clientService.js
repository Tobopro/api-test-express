const db = require("../database")

exports.fetchAllClients = async () => {
    const result = await db.execute('SELECT * FROM clients');
    return result[0];
}

exports.fetchSingleClients = async (id) => {
    const result = await db.execute('SELECT * FROM clients WHERE id = ?', [id]);
    return result[0];
}

exports.createClient = async (client) => {
    const result = await db.execute('INSERT INTO clients (nom, email) VALUES (?, ?)', [client.nom, client.email]);
    return result[0];
}