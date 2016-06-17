var assert = require('assert');
var nelisa = require('../nelisa')

describe('readCSV', function() {
    it('should read a CSV file', function() {
        assert.equal(13, nelisa.readCSV('./week1.csv').length);
        // add some more asserts
        assert.equal(12, nelisa.readCSV('./week2.csv').length);
        assert.equal(16, nelisa.readCSV('./week3.csv').length);
        assert.equal(18, nelisa.readCSV('./week4.csv').length);
    });
});
