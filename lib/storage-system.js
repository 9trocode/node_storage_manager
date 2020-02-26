class StorageSystem {
    upload() {
        throw new Error('concrete implementation should be used');
    }
    download() {
        throw new Error('concrete implementation should be used');
    }
    deleteFile(){
        throw new Error('concrete implementation should be used');
    }
    getBucketMetadata(){
        throw new Error('concrete implementation should be used');
    }
    createBucket(){
        throw new Error('concrete implementation should be used');
    }
    deleteBucket(){
        throw new Error('concrete implementation should be used');
    }
    listBuckets(){
        throw new Error('concrete implementation should be used');
    }
    listFiles(){
        throw new Error('concrete implementation should be used');
    }
}

module.exports = StorageSystem;

