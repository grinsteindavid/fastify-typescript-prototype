import { FastifyPluginCallback } from "fastify";
import { TicketsController } from 'controllers';
import { checkToken } from "middlewares";

const Routes: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.route({
        method: 'GET',
        url: '/',
        preHandler: [checkToken],
        handler: TicketsController.find
    })

    done();
};

export default Routes

