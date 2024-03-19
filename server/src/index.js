console.log('Hello, world!');

const ApiServer = require("./api/api-server");


/** first connection
 // oracledb.getConnection
 // ({
 //         user: dbConfig.user,
 //         password: dbConfig.password,
 //         connectString: dbConfig.connectString
 //     },
 //     function (err, conn) {
 //         if (err) throw err;
 //
 //         console.log('Connection was successful!');
 //
 //         let sql;
 //
 //         sql = "select sysdate from dual";
 //
 //         conn.execute(sql, [], function (err, result) {
 //             if (err) {
 //                 console.error(err.message);
 //                 return;
 //             }
 //             console.log(result.rows[0][0]);
 //
 //             conn.release(function (err) {
 //                 if (err) {
 //                     console.error(err.message);
 //                     return;
 //                 }
 //             });
 //         });
 //     }
 // )
 */

/** second connection
// let savedatahere;
//
// async function oracleConnection() {
//     let oraConn;
//
//     try {
//         oraConn = await oracledb.getConnection(dbConfig);
//         // oracledb.outFormat = oracledb.OBJECT;
//
//         let sql = "select sysdate from dual";
//         let result = await oraConn.execute(sql, [], {outFormat: oracledb.OBJECT});
//
//         console.log(result.rows[0]);
//
//         console.log(result.rows[0][0]);
//
//         console.log('--------------------------------');
//         result.rows.forEach(row => {
//             console.log(row);
//             console.log(typeof row);
//
//             savedatahere = row;
//         });
//
//         console.log('--------------------------------');
//
//     } catch (err) {
//         console.log(err);
//     } finally {
//         if (oraConn) {
//             try {
//                 await oraConn.close();
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//     }
//
// }
*/


async function run() {

    const apiserver = new ApiServer();
    try {
        await apiserver.listen(3000, '127.0.0.1');
        
    } catch (err) {
        console.log(err);
    }
}

run();

