var cron = require('node-cron');
const globalConfig = require('../services/globalConfigProviderService').globalConfig;
const urlService = require('../services/requestService');
const dbHandlerService = require('../services/dbHandlerService');

const detailsTotalWorldStatAPI = globalConfig.detailsTotalWorldStatAPI;
const detailsWorldStatFetchURL = globalConfig.detailsWorldStatFetchURL;
const detailsIndiaStatFetchAPI = globalConfig.detailsIndiaStatFetchAPI;
const HistoryStatFetchAPI = globalConfig.HistoryStatFetchAPI;



exports.cronScheduler = async function () {

    console.log("before start scheduling");

    
    //updateWorldHistoryStat();
    //updateWorldData();
    //updateIndiaData();
    // cron.schedule('* * * * *', () => {
    //     console.log('running a task every min');
    //     // updateTotalWorldData();
    //     //updateIndiaData()
    // });

    if (process.env.NODE_ENV === "development") {
        cron.schedule('15 * * * *', async () => {
            console.log('running a task every 15 min');
            updateWorldData();
            // updateWorldHistoryStat();
        });

        cron.schedule('10 * * * *', async () => {
            console.log('running a task every 10 min');
            updateTotalWorldData();
            // updateWorldHistoryStat();
        });
    }
}

fetchDataFromAPI = async function (url) {
    let getWorldStatJSON = await urlService.getCall(url);
    return getWorldStatJSON;
}

updateTotalWorldData = async function () {
    
    let totalWorldDetailsObj = JSON.parse(await fetchDataFromAPI(detailsTotalWorldStatAPI));
    let updateKeyObj = { "country": "World" };

    dbHandlerService.upsert('covid-world-data', updateKeyObj, totalWorldDetailsObj);
}

updateWorldData = async function () {
    let worldDetailsObj = JSON.parse(await fetchDataFromAPI(detailsWorldStatFetchURL));
    if (worldDetailsObj.length) {
        await dbHandlerService.bulkUpsert(worldDetailsObj, 'covid-world-data', 'country', 'country');
    }
    console.log("44444444444 >>>>>>>>>");

    new Promise(resolve => setTimeout(resolve, 30000)).then(() => {
        console.log("55555555555 >>>>>>>>>");
        updateIndiaData();
    })

}

updateIndiaData = async function () {
    let indiaDetailsObj = JSON.parse(await fetchDataFromAPI(detailsIndiaStatFetchAPI));
    console.log("indiaDetailsObj", indiaDetailsObj.statewise.length);
    if (indiaDetailsObj.statewise && indiaDetailsObj.statewise.length) {
        let TotalCountIn = indiaDetailsObj.statewise[0];
        let updateObj = {};
        TotalCountIn.confirmed ? updateObj.cases = parseInt(TotalCountIn.confirmed, 10) : '';
        TotalCountIn.deaths ? updateObj.deaths = parseInt(TotalCountIn.deaths, 10) : '';
        TotalCountIn.recovered ? updateObj.recovered = parseInt(TotalCountIn.recovered, 10) : '';
        TotalCountIn.active ? updateObj.active = parseInt(TotalCountIn.active, 10) : '';

        if (TotalCountIn.delta) {
            TotalCountIn.delta.confirmed ? updateObj.todayCases = parseInt(TotalCountIn.delta.confirmed, 10) : '';
            TotalCountIn.delta.deaths ? updateObj.todayDeaths = parseInt(TotalCountIn.delta.deaths, 10) : '';
        }
        let updateKeyObj = { "country": "India" };
        dbHandlerService.upsert('covid-world-data', updateKeyObj, updateObj);
    }
}

updateWorldHistoryStat = async function () {
    let worldHistoryStatFetchAPI = HistoryStatFetchAPI + 'all';
    let worldHistoryStatObj = JSON.parse(await fetchDataFromAPI(worldHistoryStatFetchAPI));
    let updateKeyObj = { "name": "world" };

    dbHandlerService.upsert('world_history_stat', updateKeyObj, worldHistoryStatObj);
}