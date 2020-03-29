const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.newsorgApiKey);

exports.getLatestNewsFeed = async function (req,res) {
    let returnObj = {};
    newsapi.v2.topHeadlines({
        //sources: 'bbc-news,the-verge',
        q: 'corona',
        sortBy: 'popularity',
        //category: 'business',
        from: '2020-03-28',
        language: 'en',
        // country: 'us'
      }).then(response => {
        //console.log(response);
        console.log("process key >>> ", process.env.newsorgApiKey);
        
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
