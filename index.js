const GCLOUD = require('./lib/GoogleCloudStorageSystem');
const NFS = require('./lib/NFSStorageSystem');

class StorageFactory {
    static getInstance(storageMode) {
        if (!storageMode) {
            throw new Error('Please add a storage Mode');
        }
        if (storageMode === 'GCLOUD') {
            return new GCLOUD();
        }
        if (storageMode === 'NFS') {
            return new NFS();
        }
    }
}

const storageSystem = StorageFactory;
module.exports = storageSystem;
