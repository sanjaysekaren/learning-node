const keys = require("../Config/keys")
const { Client } = require("pg")

exports.getDBConnection = () => {
    const client =new Client({
        connectionString:keys.pgsConnectionstring
    });
    client.connect();
    return client;
}