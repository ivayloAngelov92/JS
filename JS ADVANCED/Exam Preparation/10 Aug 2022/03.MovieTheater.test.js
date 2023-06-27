let { expect } = require('chai')
let movieTheater = require('./03. Movie Theater _Resources')

describe("Tests …", function () {
    describe("ageRestrictions method", function () {

        it("should be correct with movieRating G", function () {
            expect(movieTheater.ageRestrictions('G')).to.equal("All ages admitted to watch the movie");

            expect(movieTheater.ageRestrictions('PG')).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");

            expect(movieTheater.ageRestrictions('R')).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");

            expect(movieTheater.ageRestrictions('NC-17')).to.equal("No one under 17 admitted to watch the movie");

            expect(movieTheater.ageRestrictions('A')).to.equal("There are no age restrictions for this movie");

            expect(movieTheater.ageRestrictions('B')).to.equal("There are no age restrictions for this movie");
        });
    });
    describe('moneySpent (tickets, [food], [drinks]) ', function () {
        it('validation', function () {
            expect(() => movieTheater.moneySpent('a', ['food'], ['cola']).to.throw(Error))
            expect(() => movieTheater.moneySpent(2, 'a', ['cola']).to.throw(Error))
            expect(() => movieTheater.moneySpent(2, ['food'], 'a').to.throw(Error))

            expect(movieTheater.moneySpent(2, ['Nachos', 'Nachos'], ['Water', 'Water', 'Soda', 'Soda'])).to.equal('The total cost for the purchase is 50.00');
            expect(movieTheater.moneySpent(3, ['Nachos', 'Nachos'], ['Water', 'Water'])).to.equal('The total cost for the purchase with applied discount is 48.00');
            expect(movieTheater.moneySpent(2, ['Nachos'], ['Water'])).to.equal('The total cost for the purchase is 37.50');
        })
    })
    describe('reservation ([rowsArray], neededSeatsCount) ', function () {
        it('validation', function () {
            expect(() => movieTheater.reservation([], "a").to.throw(Error))
            expect(() => movieTheater.reservation('a', 2).to.throw(Error))
            expect(() => movieTheater.reservation(2, "a").to.throw(Error))

            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 6)).to.equal(1);
        })
    })
});
