var http = require("http");
const https = require('https');

exports.getCall = function (options, cb) {
    // http.request(options, function (res) {
    //     var responseString = "";

    //     res.on("data", function (data) {
    //         responseString += data;
    //         // save all the data from response
    //         return responseString;
    //     });
    //     res.on("end", function () {
    //         console.log(responseString); 
    //         // print to console when response ends
    //     });
    // });



    https.get(options, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;

        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            cb('', data);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
        cb(err);
    });
}