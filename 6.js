var assert = require('assert');
var nelisa = require('../nelisa')

describe('readCSV', function() {
    it('should read a CSV file', function() {
        assert.equal(13, nelisa.readCSV('./week1.csv').length);
        assert.equal(12, nelisa.readCSV('./week2.csv').length);
        assert.equal(16, nelisa.readCSV('./week3.csv').length);
        assert.equal(18, nelisa.readCSV('./week4.csv').length);
        assert.equal(3, nelisa.readCSV('./aFileIMadeMyself.csv').length);
    });
});

describe('groupProducts', function() {
    it('should return grouped sales', function() {
        var salesWeek1 = {
          'Soap Bar': 5,
          'Milk 1l': 5,
          'Soap Bar': 3
        };
        assert.deepEqual(nelisa.groupProducts(salesWeek1), {
            'Milk 1l': 5,
            'Soap Bar': 8
        });
    });
});
