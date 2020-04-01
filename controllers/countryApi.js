const urlService = require('../services/requestService');
const dbHandler = require('../services/dbHandlerService');

exports.getAllCountriesStat = async function (req, res) {
    let returnObj = {};
    let worldDetailsObj = await dbHandler.find();

    worldDetailsObj.sort(function (x, y) {
        return x.country === 'India' ? -1 : y.country === 'India' ? 1 : 0;
    });

    returnObj.status = true;
    returnObj.respObj = worldDetailsObj;
    res.json(returnObj);
}

exports.totalStat = async function (req, res) {
    let returnObj = {};
    var options = {
        host: "corona.lmao.ninja",
        path: "/all",
        port: 443,
        headers: {
            "Content-Type": "application/json"
        }
    };

    urlService.getCall(options, (err, resp) => {
        let countryDetailsObj = [];
        if (err) {
            returnObj.status = false;
            returnObj.message = { "errMsg": err };
            return;
        }
        countryDetailsObj = JSON.parse(resp);
        returnObj.status = true;
        returnObj.respObj = countryDetailsObj;
        //console.log(JSON.parse(resp).length);
        res.json(returnObj);
    });
}
