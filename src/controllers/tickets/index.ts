import { RouteHandlerMethod, FastifyRequest } from "fastify";

export const find: RouteHandlerMethod = (request, reply) => {
    reply.send({ tickets: [] });
};

export const findById: RouteHandlerMethod = (
    request: FastifyRequest<{
        Params: {
            id: number
        }
    }>,
    reply
) => {
    const { id } = request.params;

    reply.send({ ticket: { id } });
};