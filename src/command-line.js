'use strict';

class NullProcess {
    constructor(arg) {
        this._arg = arg;
    }

    get argv() {
        return [undefined, undefined, this._arg];
    }
}

class NullConsole {
    log() {

    }
}

module.exports = class CommandLine {
    static create() {
        return new CommandLine(process, console);
    }

    static createNull(arg) {
        return new CommandLine(new NullProcess(arg), new NullConsole());
    }

    constructor(proc, cons) {
        this._cons = cons;
        this._proc = proc;
        this._out = null;
    }
    
    getArg() {
        return this._proc.argv[2];
    }

    output(arg) {
        this._out = arg;
        this._cons.log(arg);
    }

    getLastOutput() {
        return this._out;
    }
};