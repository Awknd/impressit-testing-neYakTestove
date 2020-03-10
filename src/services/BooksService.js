const BooksModel = require('../db/models/books');
const Book = new BooksModel();

class BooksService {
    
    static get(_uuid = null) {
        
        return _uuid ?
            Book.getOne(_uuid) :
            Book.getAll();
    }
    
    static create(_book) {
        
        return Book.create(_book);
    }
    
    static update(_uuid, _book) {
        
        return Book.update(_uuid, _book);
    }
    
    static delete(_uuid) {
        
        return Book.delete(_uuid);
    }
}

module.exports = BooksService;