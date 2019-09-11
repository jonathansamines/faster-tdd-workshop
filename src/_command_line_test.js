'use strict';

const { expect } = require('chai');
const CommandLine = require('./command-line.js');

describe('Command line', () => {
    it('gets argument from the command line', () => {
        const oldArgs = process.argv;

        try {
            process.argv = ['node', 'my-file.js', 'hello'];

            const cli = CommandLine.create();

            const actual = cli.getArg();
            const expected = 'hello';

            expect(actual).to.be.equal(expected);
        } finally {
            process.argv = oldArgs;
        }
    });

    it('argument is nullable', () => {
        const cli = CommandLine.createNull('my-arg');

        const actual = cli.getArg();
        const expected = 'my-arg';

        expect(actual).to.be.equal(expected);
    });
});