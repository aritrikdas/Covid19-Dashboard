const dbHandler = require('../services/dbHandlerService');

exports.getAllCountriesStat = async function (req, res) {
    let returnObj = {};
    let worldDetailsObj = await dbHandler.find({}, "covid-world-data");

    worldDetailsObj.sort(function (x, y) {
        return x.country === 'India' ? -1 : y.country === 'India' ? 1 : 0;
    });

    returnObj.status = true;
    returnObj.respObj = worldDetailsObj;
    res.json(returnObj);
}

exports.totalStat = async function (req, res) {
    let returnObj = {};
    let totalWorldDetailsObj = await dbHandler.find({}, "covid-total-world-data");
    returnObj.status = true;
    returnObj.respObj = totalWorldDetailsObj;
    res.json(returnObj);
}
