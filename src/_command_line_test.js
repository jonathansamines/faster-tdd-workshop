'use strict';

const { expect } = require('chai');
const { stdout } = require('test-console');
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

    it('outputs to the console', () => {
        stdout.inspectSync((output) => {
            const cli = CommandLine.create();

            cli.output('my output');

            expect(output).to.be.deep.equal(['my output\n']);
        });
    });

    it('output is nullable', () => {
        stdout.inspectSync((output) => {
            const cli = CommandLine.createNull();

            cli.output('my output');

            expect(output).to.be.deep.equal([]);
        });
    });

    it('remembers the last line written to console', () => {
        const cli = CommandLine.createNull();

        expect(cli.getLastOutput()).to.be.equal(null);

        cli.output('my output');

        expect(cli.getLastOutput()).to.be.equal('my output');
    });
});