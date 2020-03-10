const manager = require('../db/connection');

const _tableName = 'booksTable';
const uuid = require('uuid');

function build(book) {
    
    if (typeof book !== 'object') book = JSON.parse(book);
    
    let processingObject = {};
    
    if (book.name) {
        console.log('Name exists');
        processingObject.name = book.name;
    }
    if (book.releaseDate) {
        processingObject.releaseDate = book.releaseDate;
    }
    if (book.authorName) {
        processingObject.authorName = book.authorName;
    }
    console.log('Finished building: ', processingObject);
    
    return processingObject;
}

class BooksModel {
    
    constructor(_book) {
        if (_book && _book.name) this.name = _book.name;
        if (_book && _book.releaseDate) this.releaseDate = _book.releaseDate;
        if (_book && _book.authorName) this.authorName = _book.authorName;
        return this;
    }
    
    async getAll() {
        const result = await manager.scan({TableName: _tableName}).promise();
        return result.Items;
    }
    
    async getOne(_uuid) {
        const params = {
            TableName: _tableName,
            Key: {
                uuid: _uuid
            },
            AttributesToGet: ['uuid', 'name', 'releaseDate', 'authorName']
        };
        
        const result = await manager.get(params).promise();
        return result.Item;
    }
    
    async create(_book) {
        let processingObject = build(_book);
        processingObject.uuid = uuid.v1();
        
        const params = {
            TableName: _tableName,
            Item: processingObject
        };
        
        await manager.put(params).promise();
        return processingObject;
    }
    
    async update(_uuid, _book) {
        const processingObject = build(_book);
    
        let attributeValues = {};
        if (processingObject.name) attributeValues[':name'] = processingObject.name;
        if (processingObject.releaseDate) attributeValues[':releaseDate'] = processingObject.releaseDate;
        if (processingObject.authorName) attributeValues[':authorName'] = processingObject.authorName;
        
        const params = {
            TableName: _tableName,
            Key: {
                uuid: _uuid
            },
            ExpressionAttributeValues: attributeValues,
            UpdateExpression: `SET ${processingObject.name ? 'name = :name,' : ''}${processingObject.releaseDate ? 'releaseDate = :releaseDate,' : ''}${processingObject.authorName ? 'authorName = :authorName' : ''}`,
            ReturnValues: 'ALL_NEW'
        };
        
        const result = await manager.update(params).promise();
        return result.Attributes;
    }
    
    async delete(_uuid) {
        const params = {
            TableName: _tableName,
            Key: {
                uuid: _uuid
            }
        };
        
        const result = await manager.delete(params).promise();
        return result;
    }
}

module.exports = BooksModel;