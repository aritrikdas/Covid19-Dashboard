const urlService = require('../services/requestService');

exports.getAllCountriesStat = async function (req,res) {
    let returnObj = {};
    var options = {
        host: "corona.lmao.ninja",
        path: "/countries?sort=cases",
        port: 443,
        headers: {
            "Content-Type": "application/json"
        }
    };

    urlService.getCall(options, (err, resp) => {
        let countryDetailsObj = [];
        if (err) {
            returnObj.status = false;
            returnObj.message = {"errMsg" : err};
            return;
        } 
        countryDetailsObj = JSON.parse(resp);
            returnObj.status = true;
            returnObj.respObj = countryDetailsObj;
        //console.log(JSON.parse(resp).length);
        res.json(returnObj);
    });
    
}

exports.totalStat = async function (req,res) {
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
            returnObj.message = {"errMsg" : err};
            return;
        } 
        countryDetailsObj = JSON.parse(resp);
            returnObj.status = true;
            returnObj.respObj = countryDetailsObj;
        //console.log(JSON.parse(resp).length);
        res.json(returnObj);
    });
    
}