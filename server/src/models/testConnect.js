const oracledb = require('oracledb');
const dbConfig = require('../config/dbConfig');

class testConnect{
    
    constructor() {
        this.oraConn = oracledb.getConnection(dbConfig);   
        
    }

    async oracleConnection() {
        let oraConn;

        try {
            oraConn = await oracledb.getConnection(dbConfig);
            // oracledb.outFormat = oracledb.OBJECT;

            let sql = "select sysdate from dual";
            let result = await oraConn.execute(sql, [], {outFormat: oracledb.OBJECT});

            console.log(result.rows[0]);

            console.log(result.rows[0][0]);

            console.log('--------------------------------');
            result.rows.forEach(row => {
                console.log(row);
                console.log(typeof row);

            });

            console.log('--------------------------------');
            
            return result;

        } catch (err) {
            console.log(err);
        } finally {
            if (oraConn) {
                try {
                    await oraConn.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }

    }
}

module.exports = testConnect;