class StorageSystem {
    upload() {
        throw new Error('concrete implementation should be used');
    }

    download() {
        throw new Error('concrete implementation should be used');
    }
}

module.exports = StorageSystem;

