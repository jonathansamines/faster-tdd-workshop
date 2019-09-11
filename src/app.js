'use strict';

const rot13 = require('./rot13');
const CommandLine = require('./command-line');

module.exports = class Application {
    constructor(cli = CommandLine.create()) {
        this._cli = cli;
    }

    transform() {
        const input = this._cli.getArg();
        
        return rot13.cypher(input);
    }
};