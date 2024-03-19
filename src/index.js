console.log('Hello, world!');

const oracledb = require('oracledb');
const dbConfig = require('./config/dbConfig.js');

oracledb.autoCommit = true;

oracledb.getConnection
({
        user: dbConfig.user,
        password: dbConfig.password,
        connectString: dbConfig.connectString
    },
    function (err, conn) {
        if (err) throw err;

        console.log('Connection was successful!');

        let sql;

        sql = "select sysdate from dual";

        conn.execute(sql, [], function (err, result) {
            if (err) {
                console.error(err.message);
                return;
            }
            console.log(result.rows[0][0]);

            conn.release(function (err) {
                if (err) {
                    console.error(err.message);
                    return;
                }
            });
        });
    }
)