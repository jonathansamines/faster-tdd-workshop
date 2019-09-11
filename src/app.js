'use strict';

const rot13 = require('./rot13');

module.exports = class Application {
    transform(input) {
        return rot13.cypher(input);
    }
};