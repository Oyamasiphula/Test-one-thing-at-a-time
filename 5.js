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
    // now the "it" is more accurate, but it's not what we want
    it('should return grouped sales, and readCSV should read a CSV file', function() {
        var salesWeek1 = nelisa.readCSV('./week1.csv');
        assert.deepEqual({
                'Milk 1l': 5,
                'Soap Bar': 8
            },
            nelisa.groupProducts(salesWeek1)
        );
        // this is what we're actually asserting
        // assert.deepEqual({
        //         'Milk 1l': 5,
        //         'Soap Bar': 8
        //     },
        //     nelisa.groupProducts(nelisa.readCSV('./week1.csv'))
        // );
    });
});
