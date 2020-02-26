const GCLOUD = require('./lib/GoogleCloudStorageSystem');
const NFS = require('./lib/NFSStorageSystem');
const AWS3 = require('./lib/S3StorageSystem');
const CLOUDINARY = require('./lib/CloudinaryStorageSystem');

class StorageFactory {
    static getInstance(storageMode, Region) {
        if (!storageMode) {
            throw new Error('Please add a storage Instance');
        }
        if (storageMode === 'GCLOUD') {
            return new GCLOUD();
        }
        else if (storageMode === 'AWS') {
            return new AWS3(Region);
        }
        else if (storageMode === 'NFS') {
            return new NFS();
        }
        else if (storageMode === 'CLOUDINARY') {
            return new CLOUDINARY();
        }
        else {
            throw new Error(`Cant recognize instance of ${storageMode}, Please Specify Instance of AWS, GCLOUD, NFS`);
        }
    }
}

const storageSystem = StorageFactory;
module.exports = storageSystem;
