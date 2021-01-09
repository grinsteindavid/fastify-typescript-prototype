import { FastifyPluginCallback } from "fastify";
import { TicketsController } from 'controllers';
import { checkToken } from "middlewares";

const Routes: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.route({
        method: 'GET',
        url: '/',
        preHandler: [checkToken],
        handler: TicketsController.find
    });
    fastify.route({
        method: 'GET',
        url: '/:id',
        schema: {
            params: {
                id: { type: 'integer' }
            }
        },
        preHandler: [checkToken],
        handler: TicketsController.findById
    });

    done();
};

export default Routes

