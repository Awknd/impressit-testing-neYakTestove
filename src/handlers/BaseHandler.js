
class BaseHandler {
    
    static handleResponse(callback, _data, _statusCode = 200) {
    
        callback(null, {
            statusCode: _statusCode,
            body: typeof _data === 'object' ? JSON.stringify(_data) : _data
        });
    }
    
    static handleError(callback, err, _statusCode) {
    
        callback({
            statusCode: _statusCode | err.statusCode,
            body: err.message | 'Something went wrong'
        }, null);
    }
}

module.exports = BaseHandler;