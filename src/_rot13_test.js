'use strict';

const { expect } = require('chai');
const rot13 = require('./rot13');

describe('rot13', () => {
    it('converts nothing to nothing', () => {
        const actual = rot13.cypher('');
        const expected = '';

        expect(actual).to.be.equal(expected);
    });

    it('doesnt transform non-alphabetic character', () => {
        const actual = rot13.cypher('#');
        const expected = '#';

        expect(actual).to.be.equal(expected);
    });

    it('doesnt transform non-alphabetic characters', () => {
        const actual = rot13.cypher('#$@$!');
        const expected = '#$@$!';

        expect(actual).to.be.equal(expected);
    });

    it('transforms alphabetic character using rot13 cypher', () => {
        const actual = rot13.cypher('a');
        const expected = 'n';

        expect(actual).to.be.equal(expected);        
    });

    it('transforms alphabetic characters using rot13 cypher', () => {
        const actual = rot13.cypher('hello');
        const expected = 'uryyb';

        expect(actual).to.be.equal(expected);        
    });
});