var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://clusterAdmin:cluster$Pwd@covidcluster-hvx2f.mongodb.net/sample_analytics?retryWrites=true&w=majority";

exports.find = async function (query) {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    console.log("default-db-connnection-1");
    client.connect(err => {
        console.log("default-db-connnection-2");
        const collection = client.db("sample_analytics").collection("accounts");
        console.log("default-db-connnection-3");
        // perform actions on the collection object
        client.close();
    });
    console.log("default-db-connnection-4");
    // const client = await MongoClient.connect(uri, {
    //     useNewUrlParser: true
    // }).catch(err => {
    //     console.log(err);
    // });
    // if (!client) {
    //     return;
    // }

    // try {
    //     const db = client.db("sample_analytics");
    //     let collection = db.collection('accounts');
    //     let res = await collection.find(query).toArray();
    //     console.log(res);
    // } catch (err) {
    //     console.log(err);
    // } finally {
    //     client.close();
    // }
}

exports.insert = async function (query) {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true
    }).catch(err => {
        console.log(err);
    });
    if (!client) {
        return;
    }

    try {
        const db = client.db("sample_analytics");
        let collection = db.collection('accounts');
        let res = await collection.find(query).toArray();
        console.log(res);
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}
