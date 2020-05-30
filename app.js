/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-20
 */
var host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8007;

var cors_proxy = require("cors-anywhere");
cors_proxy
    .createServer({
        originWhitelist: [], // Allow all origins
        requireHeader: ["origin", "x-requested-with"],
        removeHeaders: ["cookie", "cookie2"]
    })
    .listen(port, host, function () {
        console.log("Running CORS Anywhere on " + host + ":" + port);
    });
