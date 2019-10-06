const redis = require('redis')
const defaultConfig = { host: '127.0.0.1', port: '6379' }

function redisService(config = defaultConfig) {

    class RedisServices {
        constructor(configOption) {
            if (RedisServices.client) {
                this.client = RedisServices.client
            } else {
                this.client = RedisServices.createClient(configOption)
                RedisServices.client = this.client;
            }
        }

        static createClient(config) {
            if (RedisServices.client) {
                return RedisServices.client
            } else {
                try {
                    const client = redis.createClient(config.port, config.host)
                    client.on('err', (err) => console.log(err.message))
                    client.on('connect', () => console.log('Redis client connected'))
                    RedisServices.client = client
                } catch (e) {
                    console.log(`An Error occured creating redis client\n ${e.message}`)
                }
            }
            return RedisServices.client
        }

        async asyncGet(key) {
            const client = this.client
            return new Promise((accept, _) => {
                client.get(key, (_, value) => {
                    accept(value)
                })
            })
        }

        async asyncSet(key, value) {
            this.client.set(key, value, redis.print)
        }
    }

    return new RedisServices(config)
}

module.exports = redisService