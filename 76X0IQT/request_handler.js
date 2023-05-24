const { createCanvas } = require('canvas')

function handle_request(request_type,data)
{
    var result = "success";

    if (request_type === "FIND_FONT_SIZE")
    {
        result = fix_font_size(data);
    }

    return result;
}

function fix_font_size(node_data)
{
    const canvas = createCanvas(100, 500);
    var context = canvas.getContext("2d");

    var maxFontSize = 36;
    var minFontSize = 3;

    for (var i = 0; i < node_data.length; i++)
    {
        var node_attr = node_data[i];
        var maxWidth = node_attr['width'];

        var fontSize = node_attr['font-size'];
        var fontFamily = node_attr['font-family'];

        var node_id = node_attr['id'];

        var node_text = node_attr['text'];

        context.font = fontSize + "px " + fontFamily;
        var textWidth = context.measureText(node_text).width;

        while ((textWidth < maxWidth) && fontSize < maxFontSize)
        {
            fontSize = fontSize + 1;

            context.font = fontSize + "px " + fontFamily;
            textWidth = context.measureText(node_text).width;
        };

        while ((textWidth > maxWidth) && fontSize > minFontSize)
        {
            fontSize = fontSize - 1;

            context.font = fontSize + "px " + fontFamily;
            textWidth = context.measureText(node_text).width;
        };

        node_attr['font-size'] = fontSize;
        node_attr['width'] = textWidth;
        node_attr['height'] = context.measureText(node_text).height;
    }

    return node_data;
}

module.exports = { handle_request };
