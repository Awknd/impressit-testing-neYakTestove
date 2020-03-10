'use strict';

// const BaseHandler = require('./BaseHandler');
const ResponseHelper = require('../helpers/ResponseHelper');
const BooksService = require('../services/BooksService');
//
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


// module.exports = {
//     create: BooksHandler.create,
//     update: BooksHandler.update,
//     delete: BooksHandler.delete,
// };

// module.exports.getBook = (event, context, callback) => {
//
//     if (!event.pathParameters.bookUuid) {
//         callback({
//             statusCode: 500,
//             body: 'Please provide uuid in path parameters'
//         });
//         return;
//     }
//
//     const params = {
//         TableName: 'booksTable',
//         Key: {
//             uuid: event.pathParameters.bookUuid
//         },
//         AttributesToGet: ['uuid', 'name', 'releaseDate', 'authorName']
//     };
//
//     client.get(params, (err, result) => {
//         if (err) {
//             callback({
//                 statusCode: err.statusCode || 501,
//                 body: 'Could not get book data'
//             }, null);
//         } else {
//             callback(null, {
//                 statusCode: 200,
//                 body: JSON.stringify(result.Item)
//             });
//         }
//     });
// };

// module.exports.getBooks = (event, context, callback) => {
//     const params = {
//         TableName: 'booksTable'
//     };
//     client.scan(params, (err, data) => {
//         if (err) {
//             callback({
//                 statusCode: 500,
//                 data: JSON.stringify(err)
//             }, null);
//         } else
//             callback(null, {
//                 statusCode: 200,
//                 body: JSON.stringify(data.Items)
//             });
//     });
// };
//
// module.exports.createBook = (event, context, callback) => {
//     const body = JSON.parse(event.body);
//
//     if (!body.name || !body.releaseDate || !body.authorName) callback({
//         statusCode: 500,
//         body: 'Please provide all required fields'
//     });
//
//     const params = {
//         TableName: 'booksTable',
//         Item: {
//             uuid: uuid.v1(),
//             name: body.name,
//             releaseDate: body.releaseDate,
//             authorName: body.authorName
//         }
//     };
//
//     client.put(params, (err) => {
//         if (err)
//             callback({
//                 statusCode: 500,
//                 body: JSON.stringify(err)
//             });
//         else
//             callback(null, {
//                 statusCode: 200,
//                 body: JSON.stringify(params.Item)
//             });
//     });
//
// };
//
// module.exports.updateBook = (event, context, callback) => {
//     const body = JSON.parse(event.body);
//
//     if (!event.pathParameters.bookUuid)
//         callback({
//             statusCode: 500,
//             body: 'Please provide bookUuid'
//         });
//
//     let attributeValues = {};
//     if (body.name) attributeValues[':name'] = body.name;
//     if (body.releaseDate) attributeValues[':releaseDate'] = body.releaseDate;
//     if (body.authorName) attributeValues[':authorName'] = body.authorName;
//
//     const params = {
//         TableName: 'booksTable',
//         Key: {
//             uuid: event.pathParameters.bookUuid
//         },
//         ExpressionAttributeNames: {
//             '#book_name': 'name',
//         },
//         ExpressionAttributeValues: attributeValues,
//         UpdateExpression: `SET ${body.name ? '#book_name = :name,' : ''}${body.releaseDate ? 'releaseDate = :releaseDate,' : ''}${body.authorName ? 'authorName = :authorName' : ''}`,
//         ReturnValues: 'ALL_NEW'
//     };
//
//     client.update(params, (error, result) => {
//         if (error) {
//             callback({
//                 statusCode: error.statusCode || 501
//             }, null);
//         } else {
//             callback(null, {
//                 statusCode: 200,
//                 body: JSON.stringify(result.Attributes)
//             });
//         }
//     });
// };
//
// module.exports.deleteBook = (event, context, callback) => {
//
//     if (!event.pathParameters.bookUuid) {
//         callback({
//             statusCode: 500,
//             body: 'Please provide bookUuid in path parameters'
//         });
//         return;
//     }
//
//     const params = {
//         TableName: 'booksTable',
//         Key: {
//             uuid: event.pathParameters.bookUuid
//         }
//     };
//
//     client.delete(params, (err, result) => {
//         if (err) {
//             callback({
//                 statusCode: err.statusCode || 501,
//                 body: 'Could not get book data'
//             });
//         } else {
//             callback(null, {
//                 statusCode: 200,
//                 body: JSON.stringify(result.Item)
//             });
//         }
//     });
// };
