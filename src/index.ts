
import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
> = fastify({
    logger: true
});

server.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

process.on("uncaughtException", error => {
    console.error(error);
});
process.on("unhandledRejection", error => {
    console.error(error);
});

server.listen(3000, function (err, address) {
    if (err) {
        server.log.error(err.message)
        process.exit(1)
    }
    server.log.info(`server listening on ${address}`)
})