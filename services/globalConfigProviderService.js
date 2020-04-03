
const globalConfig = {};

if (process.env.NODE_ENV === "production") {
    globalConfig.detailsTotalWorldStatAPI = process.env.detailsTotalWorldStatAPI;
    globalConfig.detailsWorldStatFetchURL = process.env.detailsWorldStatFetchURL;
    globalConfig.detailsIndiaStatFetchAPI = process.env.detailsIndiaStatFetchAPI;
    globalConfig.HistoryStatFetchAPI = process.env.HistoryStatFetchAPI;
    globalConfig.mongoConnURL = process.env.mongoConnURL;
    globalConfig.newsOrgAPIKey = process.env.newsOrgAPIKey;

    globalConfig.twitter = {
        "consumer_key": process.env.twitter_consumer_key,
        "consumer_secret": process.env.twitter_consumer_secret,
        "access_token_key": process.env.twitter_access_token_key,
        "access_token_secret": process.env.twitter_access_token_secret
    };
}
if (process.env.NODE_ENV === "development") {
    const configVars = require('../config.json');
    globalConfig.detailsTotalWorldStatAPI = configVars.detailsTotalWorldStatFetchAPI;
    globalConfig.detailsWorldStatFetchURL = configVars.detailsWorldStatFetchURL;
    globalConfig.detailsIndiaStatFetchAPI = configVars.detailsIndiaStatFetchAPI;
    globalConfig.HistoryStatFetchAPI = configVars.HistoryStatFetchAPI;
    globalConfig.mongoConnURL = configVars.mongoConnURL;
    globalConfig.twitter = configVars.twitter;
    globalConfig.newsOrgAPIKey = configVars.newsOrgAPIKey;

}

console.log("globalConfig >>> ", globalConfig);

exports.globalConfig = globalConfig;