'use strict';

class NullProcess {
    constructor(arg) {
        this._arg = arg;
    }

    get argv() {
        return [undefined, undefined, this._arg];
    }
}

module.exports = class CommandLine {
    static create() {
        return new CommandLine(process);
    }

    static createNull(arg) {
        return new CommandLine(new NullProcess(arg));
    }

    constructor(proc) {
        this._proc = proc;
    }
    
    getArg() {
        return this._proc.argv[2];
    }
};