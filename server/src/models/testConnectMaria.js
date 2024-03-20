const mariadb = require('mariadb');
const dbConfig = require('../config/mariaConfig');

class TestConnectMaria{
    // constructor() {
    //    
    // }
    
    async mariaConnection() {
        // const mariadbPool = mariadb.createPool(dbConfig);
        
        const mariadbPool = mariadb.createPool(dbConfig);
        
        let sql = "select sysdate() as currentdate from dual";
        let conn;
        try {
            conn = await mariadbPool.getConnection();
            let result = await conn.query(sql);
            console.log(result);
            return result;

        } catch (err) {
            console.log(err);
        } finally {
            if (conn) await conn.end();
        }
    }
}

module.exports = TestConnectMaria;