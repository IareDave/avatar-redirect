const load_env = require('@ambassify/load-env');
const toArray = require('@ambassify/load-env/parsers/array');

module.exports = {
    MEMCACHE_URL: load_env('MEMCACHE_URL', null),
    REDIS_URL: load_env('REDIS_URL', null),

    NETWORKS: load_env('NETWORKS', null, toArray),
    TTL_PROFILE_PICTURE: load_env('TTL_PROFILE_PICTURE', 3600 * 1000)
};