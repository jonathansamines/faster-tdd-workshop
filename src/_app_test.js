// Copyright Titanium I.T. LLC.
"use strict";

const { expect } = require('chai');
const App = require('./app.js');

describe('App', function() {

	it('encodes input using rot13 cypher', function() {
		// arrange
		const app = new App();

		// act
		const expected = 'uryyb';
		const actual = app.transform('hello');

		// assert
		expect(actual).to.be.equal(expected);

		// reset
	});
});