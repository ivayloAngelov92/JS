let { expect } = require('chai')
let cinema = require('./cinema')


describe("Tests …", function () {
    describe("•	showMovies(movieArr)-", function () {
        it("TODO …", function () {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker', "etc."])).equal('King Kong, The Tomorrow War, Joker, etc.')
            expect(cinema.showMovies([])).equal('There are currently no movies to show.')
        });
    });
    describe('•	ticketPrice(projectionType)- ', function () {
        it('todo...', function () {
            expect(cinema.ticketPrice("Premiere")).equal(12.00)
            expect(cinema.ticketPrice("Normal")).equal(7.50)
            expect(cinema.ticketPrice("Discount")).equal(5.50)
            expect(() => cinema.ticketPrice("a")).throw(Error)
            expect(() => cinema.ticketPrice("Premieresss")).throw(Error)
            expect(() => cinema.ticketPrice(2)).throw(Error)
            expect(() => cinema.ticketPrice([])).throw(Error)
        })
    })
    describe('•	swapSeatsInHall(firstPlace, secondPlace)', function () {
        it('todo..', function () {
            expect(cinema.swapSeatsInHall('a', 'b')).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, 'a')).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall('a', 2)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall('a', 2.2)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5.5, 1.5)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(true, 2)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 0)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, 0)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(21, 5)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, 5)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, 21)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 5)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, -1)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-10, 5)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(10, 5.5)).equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(10.5, 5)).equal("Unsuccessful change of seats in the hall.")

            expect(cinema.swapSeatsInHall(2, 5)).equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(1, 20)).equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(20, 5)).equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, 1)).equal("Successful change of seats in the hall.")
        })
    })
});
