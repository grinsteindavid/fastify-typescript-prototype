
import fastify, { FastifyInstance } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import Router from './routes';

const app: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
> = fastify({
    logger: true
});

app.register(Router, { prefix: '/api' })

export default app;