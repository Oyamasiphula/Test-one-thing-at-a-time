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
        salesWeek1 = {
            'Soap Bar': 5,
            'Milk 1l': 5,
            'Soap Bar': 3
        };
        assert.deepEqual({
                'Milk 1l': 5,
                'Soap Bar': 8
            },
            nelisa.groupProducts(salesWeek1)
        );
    });
});

describe('mostPopularProduct', function() {
    it('should return the most popular product', function() {

        // can you see any problems with this?
        var salesWeek1 = nelisa.readCSV('./week1.csv');
        var groupedSalesWeek1 = nelisa.groupProducts(salesWeek1);

        assert.deepEqual({
                'Soap Bar': 8
            },
            nelisa.mostPopularProduct(groupedSalesWeek1)
        );

        // this is what we're actually asserting
        assert.deepEqual({
                'Soap Bar': 8
            },
            nelisa.mostPopularProduct(nelisa.groupProducts(nelisa.readCSV('./week1.csv')))
        );
        assert.deepEqual({
                'Soap Bar': 8
            },
            nelisa.mostPopularProduct(
                nelisa.groupProducts(
                    nelisa.readCSV('./week1.csv')
                )
            )
        );
    });
});
