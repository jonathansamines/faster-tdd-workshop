// Copyright Titanium I.T. LLC.
"use strict";

const { expect } = require('chai');
const App = require('./app.js');
const CommandLine = require('./command-line');

describe('App', function() {

	it('encodes null command line parameter using rot13 cypher', function() {
		// arrange
		const cli = CommandLine.createNull('hello');
		const app = new App(cli);

		// act
		app.run();

		// assert
		expect(cli.getLastOutput()).to.be.equal('uryyb');

		// reset
	});

	it('encodes command line parameter using rot13 cypher', () => {
		const oldArgs = process.argv;

        try {
            process.argv = ['node', 'my-file.js', 'hello'];

			const app = new App();

			app.run();

            expect(app._cli.getLastOutput()).to.be.equal('uryyb');
        } finally {
            process.argv = oldArgs;
		}
	});
});