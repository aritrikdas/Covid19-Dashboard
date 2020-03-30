var twitter = require('twitter');

var twit = new twitter({
    consumer_key: 'xreErlFjEkJMQDN4gGyP7Yg5s',
    consumer_secret: '9lZ6CCxRGCQqImDNn174rPjjFCwZM9bY83c2kJdNfB3V4J2q4W',
    access_token_key: '2607081344-KAZqjXenodDtjpa8T0Vl1zmgQwYmblWgEPLlyXU',
    access_token_secret: 'XhsSinpmD6JdyXHkzeHGVFnHdrsu9Ypju4affO2YUpvFQ'
});


exports.respond = function (socket) {
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });

    getLatestTweet(socket, 10);
    // setInterval(() => getLatestTweet(socket), 15000);
     
    twit.stream('statuses/filter', { track: 'covid19', language: 'en', filter_level: 'medium'  }, function (stream) {
        stream.on('data', function (data) {
            //io.sockets.emit('tweet', data.text);
            socket.emit("FromAPI", data); 
            console.log('.', data.text);
        });

        stream.on('error', function (err) {
            console.log("conn err", err);
        })
    });

    console.log("Connection estublished");
}

getLatestTweet = (socket, limit) => {
    twit.get('search/tweets', { q: 'covid19', count: limit ? limit : 1, lang: 'en', result_type: 'popular'}, function(err, data, response) {
        console.log(data.search_metadata);
        if (limit) {
            socket.emit("FromAPI", data); 
        } else {
            socket.emit("FromAPI", data.statuses[0]); 
        }
    })
}


