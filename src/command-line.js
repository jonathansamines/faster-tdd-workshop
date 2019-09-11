'use strict';

module.exports = class CommandLine {
    static create() {
        return new CommandLine();
    }
    
    getArg() {
        return process.argv[2];
    }
};