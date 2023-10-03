var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
    module.exports.songsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.songsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.songsReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.songsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.songsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };