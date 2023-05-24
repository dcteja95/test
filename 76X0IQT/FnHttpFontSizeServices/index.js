
const request_handler = require("../request_handler");


module.exports = async function (context, req)
{
    context.log('JavaScript HTTP trigger function processed a request.');

    const request_type = (req.query.request_type || (req.body && req.body.request_type));

    var data = req.body && req.body.data;

    result = request_handler.handle_request(request_type,data)

    context.res =
    {
        // status: 200, /* Defaults to 200 */
        body: result
    };
}