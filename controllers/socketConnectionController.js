var twitter = require('twitter');
const configJson = require('../services/globalConfigProviderService').globalConfig;
var twit = new twitter(configJson.twitter);


exports.respond = function (socket) {
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });

    getLatestTweet(socket, 10);
    // setInterval(() => getLatestTweet(socket), 15000);
     
    // twit.stream('statuses/filter', { track: 'covid19', language: 'en', filter_level: 'medium' }, function (stream) {
    //     stream.on('data', function (data) {
    //         //io.sockets.emit('tweet', data.text);
    //         socket.emit("FromAPI", data); 
    //         console.log('tweet received', data.text);
    //     });

    //     stream.on('error', function (err) {
    //         console.log("conn err", err);
    //     })

    //     stream.on('disconnect', function (err) {
    //         console.log("conn err", err);
    //     })
    // });

    console.log("Connection estublished");
}

getLatestTweet = (socket, limit) => {
    twit.get('search/tweets', { q: 'covid19', count: limit ? limit : 1, lang: 'en', result_type: 'popular'}, function(err, data, response) {
        
        if (limit) {
            socket.emit("FromAPI", data);
            console.log("Initial tweets received")
        } else {
            socket.emit("FromAPI", data.statuses[0]); 
            console.log("Initial tweets received");
        }
    })
}


