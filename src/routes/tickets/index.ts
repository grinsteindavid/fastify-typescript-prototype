import { FastifyPluginCallback } from "fastify";
import { TicketsController } from 'controllers';

const Routes: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.route({
        method: 'GET',
        url: '/',
        handler: TicketsController.find
    })

    done();
};

export default Routes

