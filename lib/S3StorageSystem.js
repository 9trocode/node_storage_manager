const StorageSystem = require('./storage-system');
const AWS = require('aws-sdk');
const fs = require('fs');

class S3StorageSystem extends StorageSystem {
    constructor(Region) {
        super();
        this.Region = Region;
        AWS.config.update({region: this.Region});
        this.s3 = new AWS.S3({apiVersion: '2006-03-01'});
    }

    async deleteBucket(bucketName) {
        this.s3.deleteBucket({Bucket: bucketName}, function (err, data) {
            if (err) {
                return err
            } else {
                return data
            }
        });
    }

    async listBuckets() {
        // Call S3 to list the buckets
        this.s3.listBuckets(function (err, data) {
            if (err) {
                return err
            } else {
                return data.Buckets;
            }
        });
    }

    async listFiles(bucketName) {
        // Call S3 to obtain a list of the objects in the bucket
        this.s3.listObjects({Bucket: bucketName}, function (err, data) {
            if (err) {
                return err
            } else {
                return data
            }
        });
    }

    async createBucket(bucketName, ACL) {
        // call S3 to create the bucket
        this.s3.createBucket({Bucket: bucketName, ACL: ACL}, function (err, data) {
            if (err) {
                return (err);
            } else {
                return (data.Location);
            }
        });
    }

    async upload(bucketName, filename, key) {
        fs.readFile(filename, (err, data) => {
            if (err) throw err;
            this.s3.upload({Bucket: bucketName, Key: key, Body: JSON.stringify(data, null, 2)}, function (s3Err, data) {
                if (s3Err) throw s3Err;
                return (`File uploaded successfully at ${data.Location}`)
            });
        });
    }


    /**
     * @memberof GoogleCloudStorageSystem
     * @name Download
     * @params filename, destination
     * @description Serves as General Download SDK for GCLOUD Storage
     */
    async download(bucketName, filename, destination) {
        this.s3.getObject({Bucket: bucketName, Key: filename}, (err, data) => {
            if (err) console.error(err);
            fs.writeFileSync(destination, data.Body.toString());
            return (`${filename} has been Downloaded!`);
        });
    }

    async deleteFile(buckName, filename) {
        this.s3.deleteObject({Bucket: buckName, Key: filename}, function (err, data) {
            if (err) return (err.stack); // an error occurred
            else return (data);           // successful response
        });
    }
}

module.exports = S3StorageSystem;
