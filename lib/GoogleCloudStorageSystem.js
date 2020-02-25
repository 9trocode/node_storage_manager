const StorageSystem = require ('./storage-system');
const {Storage} = require('@google-cloud/storage');
let storage = new Storage;

class GoogleCloudStorageSystem extends StorageSystem {
    constructor() {
        super();
    }
    async upload(bucketName, filename, destination) {
        try {
            await storage.bucket(bucketName).upload(filename, {
                // Support for HTTP requests made with `Accept-Encoding: gzip`
                gzip: true,
                // By setting the option `destination`, you can change the name of the
                // object you are uploading to a bucket.
                metadata: {
                    // Enable long-lived HTTP caching headers
                    // Use only if the contents of the file will never change
                    // (If the contents will change, use cacheControl: 'no-cache')
                    cacheControl: 'public, max-age=31536000',
                },
                destination: destination
            });
            return (`${filename} uploaded to ${bucketName}.`);
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }


    /**
     * @memberof GoogleCloudStorageSystem
     * @name Download
     * @params filename, destination
     * @description Serves as General Download SDK for GCLOUD Storage
     */
    async download(bucketName, filename, destination) {
        try {
            return storage
                .bucket(bucketName)
                .file(filename)
                .download({destination: destination});
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
}

module.exports = GoogleCloudStorageSystem;
