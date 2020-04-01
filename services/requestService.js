const fetch = require("node-fetch");

exports.getCall = async function (url) {
    try {
        const response = await fetch(url);
        //const json = await response.json();
        const json = await response.text();
        //console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
}
