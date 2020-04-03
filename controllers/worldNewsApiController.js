const NewsAPI = require('newsapi');
const globalConfig = require('../services/globalConfigProviderService').globalConfig;

console.log(" globalConfig.newsOrgAPIKey ><><><><><><><><><><><><><><><><", globalConfig.newsOrgAPIKey);
const newsapi = new NewsAPI(globalConfig.newsOrgAPIKey);

exports.getLatestNewsFeed = async function (req, res) {
    let returnObj = {};
    let dateObj = new Date(Date.now() - 864e5);
    let ParqamDate = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
    console.log("ParqamDate >>>> ", ParqamDate);
    newsapi.v2.topHeadlines({
        //sources: 'bbc-news,the-verge',
        q: 'corona',
        sortBy: 'popularity',
        //category: 'business',
        from: ParqamDate,
        language: 'en',
        // country: 'us'
    }).then(response => {
        //console.log(response);
        console.log("process key >>> ", globalConfig.newsOrgAPIKey);

        if (response.status === "ok") {
            returnObj.status = true;
            returnObj.articles = response.articles.slice(0, 10);
        }

        res.json(returnObj);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
    });
}
