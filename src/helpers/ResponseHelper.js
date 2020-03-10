
module.exports.handleResponse = (_data, _statusCode = 200) => {
    return {
        statusCode: _statusCode,
        body: JSON.stringify(_data)
    };
};

module.exports.handleError = (error, _statusCode) => {
    return {
        statusCode: _statusCode | error.statusCode | 500,
        body:  error.message | JSON.stringify(error)
    };
};