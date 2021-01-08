import { FastifyPluginCallback } from "fastify";
import TicketsRoutes from './tickets';

const Router: FastifyPluginCallback = (fastify, opts, done) => {
    fastify.register(TicketsRoutes, { prefix: '/tickets' });

    done();
};

export default Router;