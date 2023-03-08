
import { action, observable, makeObservable } from 'mobx';

class BooksStore {
    @observable books = []

    constructor() {
        makeObservable(this);
    }

    @action addBook = (book) => {
        return this.books.push(book)
    }
    @action removeBook = (index) => {
        return this.books.splice(index, 1)
    }
}

export default BooksStore