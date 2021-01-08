import { preHandlerHookHandler } from "fastify";

const checkToken: preHandlerHookHandler = (request, reply, done) => {
    if (!request.headers['token']) {
        reply.code(401);
        throw Error('unauthorized')
    }

    done();
}

export default checkToken;