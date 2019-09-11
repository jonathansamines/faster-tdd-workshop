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
		const expected = 'uryyb';
		const actual = app.transform();

		// assert
		expect(actual).to.be.equal(expected);

		// reset
	});

	it('encodes command line parameter using rot13 cypher', () => {
		const oldArgs = process.argv;

        try {
            process.argv = ['node', 'my-file.js', 'hello'];

			const app = new App();

			const actual = app.transform();
			const expected = 'uryyb';

            expect(actual).to.be.equal(expected);
        } finally {
            process.argv = oldArgs;
		}
	});
});