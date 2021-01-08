import { RouteHandlerMethod } from "fastify";

export const find: RouteHandlerMethod = (request, reply) => {
    reply.send({ tickets: [] })
}