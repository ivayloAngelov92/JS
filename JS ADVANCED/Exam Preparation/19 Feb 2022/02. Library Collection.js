class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity
        this.books = []
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity === 0) { throw Error("Not enough space in the collection.") }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        })
        this.capacity--
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let currentBook = this.books.find((b) => b.bookName === bookName)
        if (!currentBook) { throw Error(`${bookName} is not in the collection.`) }
        if (currentBook.payed) { throw Error(`${bookName} has already been paid.`) }
        currentBook.payed = true
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let currentBook = this.books.find((b) => b.bookName === bookName)
        if (!currentBook) { throw Error("The book, you're looking for, is not found.") }
        if (!currentBook.payed) { throw Error(`${bookName} need to be paid before removing from the collection.`) }
        let indexOfBook = this.books.findIndex((b) => b.bookName === bookName)
        this.books.splice(indexOfBook, 1)
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let result = [`The book collection has ${this.capacity} empty spots left.`]
            let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            sorted.forEach((book) => result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.`))
            return result.join('\n')
        }
        let book = this.books.find((b) => b.bookAuthor === bookAuthor)
        if (!book) { throw Error(`${bookAuthor} is not in the collection.`) }
        return `${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.`
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




