// const Fastify = require('fastify');
const fastify = require('fastify')({logger: true});
const TestConnect = require('../models/testConnect');
const TestConnectMaria = require('../models/testConnectMaria');


class ApiServer{
    constructor() {
        // const testConnect = new TestConnect();
        const testconnectmaria = new TestConnectMaria();
        
        fastify.addHook('onRequest', async (request, reply) => {
            // Before
            console.log('onRequest');
            // await asyncMethod();
        });
        
        fastify.addHook('onResponse', async (request, reply) => {
            // After
            console.log('onResponse');
            // await asyncMethod();
        });
        

        fastify.get("/", async (request, reply) => {
            console.log('get /');
            // let result = await testConnect.oracleConnection();
            let result2 = await testconnectmaria.mariaConnection();
            // return {hello: "world", result: result.rows[0].SYSDATE, result2 : result2[0]};
            return {hello: "world", result2 : result2[0]};
        });
    }

    async listen(port, address){
        try{
            await fastify.listen(port, address);
            console.log(`Server listening on ${fastify.server.address().port}`);
        }catch (err){
            console.log(err);
            fastify.log.error(err);
            process.exit(1);
        }
    }
}

module.exports = ApiServer;