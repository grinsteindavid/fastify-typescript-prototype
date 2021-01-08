import app from './app';

process.on("uncaughtException", error => {
    console.error(error);
});
process.on("unhandledRejection", error => {
    console.error(error);
});

app.listen(3000, function (err, address) {
    if (err) {
        app.log.error(err.message);
        process.exit(1);
    }
    app.log.info(`server listening on ${address}`);
});