const dbHandler = require('../services/dbHandlerService');

exports.getAllCountriesStat = async function (req, res) {
    let returnObj = {};
    let worldDetailsObj = await dbHandler.find({}, "covid-world-data", { "cases": -1 });

    returnObj.status = true;
    returnObj.respObj = worldDetailsObj;
    res.json(returnObj);
}

exports.totalStat = async function (req, res) {
    let returnObj = {};
    let totalWorldDetailsObj = await dbHandler.find({}, "covid-total-world-data", {});
    returnObj.status = true;
    returnObj.respObj = totalWorldDetailsObj;
    res.json(returnObj);
}

exports.getHistoricalData = async function (req, res) {
    let returnObj = {};
    let queryObj = {};
    let countryName = req.params.country;
    if (countryName && countryName !== 'All') {
        queryObj.name = countryName;
    }

    console.log("queryObj ", queryObj);
    let historicalData = await dbHandler.find(queryObj, "world_history_stat", {});
    returnObj.status = true;
    returnObj.respObj = historicalData;
    res.json(returnObj);
}

exports.getHistoricalChartData = async function (req, res) {
    let queryObj = {};
    let countryName = req.params.country;
    if (countryName && countryName !== 'All') {
        queryObj.name = countryName;
    } else {
        return res.send("Invalid API");
    }

    console.log("queryObj ", queryObj);
    let historicalData = await dbHandler.find(queryObj, "world_history_stat", {});
    //returnObj.status = true;
    // console.log("historicalData ", historicalData.res);
    let respObj = historicalData[0];
    let chartDataArr = [];
    if (respObj.cases) {
        let dateArr = Object.keys(respObj.cases);
        console.log("Dates >>>> ", dateArr);
        dateArr.forEach((dateVal) => {
            let tempDataObj = {};
            tempDataObj.date = dateVal;
            tempDataObj.case = respObj.cases[dateVal];
            if (respObj.deaths) {
                tempDataObj.deaths = respObj.deaths[dateVal];
            }

            if (respObj.recovered) {
                tempDataObj.recovered = respObj.recovered[dateVal];
            }
            chartDataArr.push(tempDataObj);
        })

    }
    
    res.json(chartDataArr);
}