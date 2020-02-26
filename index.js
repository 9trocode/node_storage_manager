const GCLOUD = require('./lib/GoogleCloudStorageSystem');
const NFS = require('./lib/NFSStorageSystem');
const AWS3 = require('./lib/S3StorageSystem');

class StorageFactory {
    static getInstance(storageMode, Region) {
        if (!storageMode) {
            throw new Error('Please add a storage Mode');
        }
        if (storageMode === 'GCLOUD') {
            return new GCLOUD();
        }
        if (storageMode === 'AWS') {
            return new AWS3(Region);
        }
        if (storageMode === 'NFS') {
            return new NFS();
        }
    }
}

const storageSystem = StorageFactory;
module.exports = storageSystem;
