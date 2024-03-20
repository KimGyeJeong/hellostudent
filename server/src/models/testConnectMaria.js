const mariadb = require('mysql');
const dbConfig = require('../config/mariaConfig');

class TestConnectMaria{
    constructor() {
        
    }
    
    async mariaConnection() {
        const mariadbPool = mariadb.createPool(dbConfig);
        const conn = await mariadbPool.getConnection();
        let sql = "select sysdate() from dual";
        try {
            let result = await conn.query(sql);
            console.log(result);
            return result;

        } catch (err) {
            console.log(err);
        } finally {
            if (conn) await conn.release();
        }
    }
}

module.exports = TestConnectMaria;