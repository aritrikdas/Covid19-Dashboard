var MongoClient = require('mongodb').MongoClient;
const globalConfig = require('./globalConfigProviderService').globalConfig;

const uri = globalConfig.mongoConnURL;

exports.find = async function (query, collectionName, sortQuery) {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true
    }).catch(err => {
        console.log(err);
    });
    if (!client) {
        return;
    }

    try {
        const db = client.db("covid19");
        let collection = db.collection(collectionName);
        let res = await collection.find(query).sort(sortQuery).toArray();
        return res;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}

exports.bulkUpsert = async function (arrayToUpdate, collectionName, updateKey, updateParam) {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true
    }).catch(err => {
        console.log(err);
    });
    if (!client) {
        console.log("Connection err...");
        return;
    }
    let updateQueryObj = {};

    try {
        const db = client.db("covid19");
        let collection = db.collection(collectionName);
        console.log("22222222222 >>>>>>>>>");
        let updatedArray = await Promise.all(arrayToUpdate.map((object) => {
            updateQueryObj[updateKey] = object[updateParam];
            collection.findAndModify(updateQueryObj, [['_id', 'asc']], { $set: object }, { upsert: true })
        }));
        console.log("333333333333 >>>>>>>>>");
        console.log("updatedArray >>>", updatedArray.length);
        return true;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }
}

exports.upsert = async function (collectionName, updateKeyObj, objToUpdate) {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true
    }).catch(err => {
        console.log(err);
    });
    if (!client) {
        console.log("Connection err...");
        return;
    }

    try {
        const db = client.db("covid19");
        let collection = db.collection('covid-world-data');
        let objparamToUpdate = { '$set': objToUpdate };
        console.log("Inside upsert updateKeyObj >>>>>>>>>>>>>>>>>>>>", JSON.stringify(updateKeyObj));
        console.log("Inside upsert objToUpdate >>>>>>>>>>>>>>>>>>>>", JSON.stringify(objparamToUpdate));

       // let updatedObject = await collection.findOneAndUpdate(updateKeyObj,  { $set: objToUpdate });
        let updatedObject = await collection.updateOne(updateKeyObj,  { $set: objToUpdate });

        let ff = await collection.find(updateKeyObj).toArray();

        console.log("ffffffff >>>>>>>>>>>", JSON.stringify(ff));

        console.log("db handler upsert >>>", JSON.stringify(updatedObject));
        return true;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }

    

}