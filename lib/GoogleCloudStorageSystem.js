const StorageSystem = require ('./storage-system');
const {Storage} = require('@google-cloud/storage');
const path = require('path');
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
                destination: destination+filename
            });
            return (`${filename} uploaded to ${bucketName}.`);
        } catch (err) {
            console.log(err);
            return  new Error(err);
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
            await storage
                .bucket(bucketName)
                .file(filename)
                .download({destination:  destination+filename});
            return (`${filename} download to ${destination+filename}.`);
        } catch (err) {
            return  new Error(err);
        }
    }

    async deleteFile(buckName, filename){
        try{
            await storage
                .bucket(buckName)
                .file(filename)
                .delete();
            return (`gs://${buckName}/${filename} deleted.`);
        }catch (err) {
            return  new Error(err)
        }
    }

    async getBucketMetadata(bucketName){
        try {
           return  await storage.bucket(bucketName).getMetadata();
        }catch (err) {
            return  new Error(err)
        }
    }

    async createBucket(bucketName, location, storageClass){
        try {
            const [bucket] = await storage.createBucket(bucketName, {
                location: location,
                storageClass: storageClass,
            });
            return(`Bucket ${bucket.name} created.`);
        }catch (err) {
            return  new Error(err)
        }
    }

    async deleteBucket(bucketName){
        try {
            await storage.bucket(bucketName).delete();
            return(`Bucket ${bucketName} deleted.`);
        }catch (err) {
            return  new Error(err)
        }
    }

    async listBuckets(){
        try {
            return await storage.getBuckets();
        }catch (err) {
            return  new Error(err)
        }
    }

    async listFiles(bucketName){
        try {
            return await storage.bucket(bucketName).getFiles();
        }catch (err) {
            return  new Error(err)
        }
    }
}

module.exports = GoogleCloudStorageSystem;
