'use strict';

const ResponseHelper = require('../helpers/ResponseHelper');
const BooksService = require('../services/BooksService');

module.exports.get = async event => {
    const booksUuid = event.pathParameters ?
        event.pathParameters.bookUuid : null;
    
    try {
        const result = await BooksService.get(booksUuid);
        return ResponseHelper.handleResponse(result);
    } catch (err) {
        return ResponseHelper.handleError(err);
    }
};

module.exports.create = async event => {
    try {
        const result = await BooksService.create(event.body);
        return ResponseHelper.handleResponse(result);
    } catch (err) {
        return ResponseHelper.handleError(err);
    }
};

module.exports.update = async event => {
    try {
        const result = await BooksService.update(event.pathParameters.bookUuid, event.body);
        return ResponseHelper.handleResponse(result);
    } catch (err) {
        return ResponseHelper.handleError(err);
    }
};

module.exports.delete = async event => {
    try {
        const result = await BooksService.delete(event.pathParameters.bookUuid);
        return ResponseHelper.handleResponse(result);
    } catch (err) {
        return ResponseHelper.handleError(err);
    }
};