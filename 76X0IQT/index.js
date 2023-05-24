const request_handler = require("request_handler");

exports.handler = async function(req,context)
{
    var result = request_handler.handle_request(req.request_type,req.data)

    return result;
}
