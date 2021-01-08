import { preHandlerHookHandler } from "fastify";


const checkToken: preHandlerHookHandler = (request, reply, done) => {
    if (request.headers['token'] && request.headers['token'].length > 0) {
        done();
    } else {
        reply.code(401);
    }
}

export default checkToken;