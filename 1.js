var assert = require('assert');
var nelisa = require('../nelisa')

describe('readCSV', function() {
    it('should read a CSV file', function() {
        assert.equal(13, nelisa.readCSV('./week1.csv').length);
    });
});
