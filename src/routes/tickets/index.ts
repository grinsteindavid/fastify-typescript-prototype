import { FastifyPluginCallback } from "fastify";
import * as TicketsController from 'controllers/tickets'

const Routes: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.route({
        method: 'GET',
        url: '/',
        handler: TicketsController.find
    })

    done();
};

export default Routes

