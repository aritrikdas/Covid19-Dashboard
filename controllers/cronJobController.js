var cron = require('node-cron');
const globalConfig = require('../config.json');
const urlService = require('../services/requestService');
const dbHandlerService = require('../services/dbHandlerService');

const detailsWorldStatFetchURL = globalConfig.detailsWorldStatFetchURL;
const detailsIndiaStatFetchAPI = globalConfig.detailsIndiaStatFetchAPI;

exports.cronScheduler = async function () {
    console.log("before start scheduling");

    cron.schedule('* */5 * * *', () => {
        console.log('running a task every  min');
        updateIndiaData();
    });

    cron.schedule('* */15 * * *', () => {
        console.log('running a task every 2 min');
        updateWorldData();
    });
}

fetchDataFromAPI = async function (url) {
    let getWorldStatJSON = await urlService.getCall(url);
    return getWorldStatJSON;
}

updateWorldData = async function () {
    let worldDetailsObj = JSON.parse(await fetchDataFromAPI(detailsWorldStatFetchURL));
    console.log("data rrrrr >>>>>>>>>>>", worldDetailsObj.length);
    dbHandlerService.bulkUpsert(worldDetailsObj, 'covid-world-data', 'country', 'country');
}

updateIndiaData = async function () {
    let indiaDetailsObj = JSON.parse(await fetchDataFromAPI(detailsIndiaStatFetchAPI));
    console.log("indiaDetailsObj", indiaDetailsObj.statewise.length);
    if (indiaDetailsObj.statewise && indiaDetailsObj.statewise.length) {
        let TotalCountIn = indiaDetailsObj.statewise[0];
        let updateObj = {}
        TotalCountIn.confirmed ? updateObj.cases = parseInt(TotalCountIn.confirmed, 10) : '';
        TotalCountIn.deaths ? updateObj.deaths = parseInt(TotalCountIn.deaths, 10) : '';
        TotalCountIn.recovered ? updateObj.recovered = parseInt(TotalCountIn.recovered, 10) : '';
        TotalCountIn.active ? updateObj.active = parseInt(TotalCountIn.active, 10) : '';

        if (TotalCountIn.delta) {
            TotalCountIn.delta.confirmed ? updateObj.todayCases = parseInt(TotalCountIn.delta.confirmed, 10) : '';
            TotalCountIn.delta.deaths ? updateObj.todayDeaths = parseInt(TotalCountIn.delta.deaths, 10) : '';
        }

        console.log("Obj to Update >>>>>>> ", updateObj);
        let updateKeyObj = { "country": "India" };
        dbHandlerService.upsert('covid-world-data', updateKeyObj, updateObj);
    }
}