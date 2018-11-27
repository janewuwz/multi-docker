const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

function addOne(index) {
    return index + 1;
}

sub.on('message', (channel, message) => {
    console.log(message)
    redisClient.hset('vals', message, addOne(parseInt(message)));
});
sub.subscribe('insert');