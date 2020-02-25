const Storage = require('@google-cloud/storage');
const storage = new Storage();
const fse = require('fs-extra');

class StorageSystem {
    upload() {
        throw new Error('concrete implementation should be used');
    }

    download() {
        throw new Error('concrete implementation should be used');
    }
}


class GoogleCloudStorageSystem extends StorageSystem {
    /**
     * @memberof GoogleCloudStorageSystem
     * @name Upload
     * @params filename, destination
     * @description Serves as General Upload SDK for GCLOUD Storage
     */
    upload(source, destination) {
        try {
            return storage
                .bucket(sails.config.custom.googleStorage.bucketName)
                .upload(source, {destination: destination});
        } catch (err) {
            sails.log.error(err);
            throw new Error(err);
        }
    }


    /**
     * @memberof GoogleCloudStorageSystem
     * @name Download
     * @params filename, destination
     * @description Serves as General Download SDK for GCLOUD Storage
     */
    async download(filename, destination) {
        try {
            return storage
                .bucket(sails.config.custom.googleStorage.bucketName)
                .file(filename)
                .download({destination: destination});
        } catch (err) {
            sails.log.error(err);
            throw new Error(err);
        }
    }
}


class NFSStorageSystem extends StorageSystem {
    /**
     * @memberof NFSStorage
     * @name Upload
     * @params filename, destination
     * @description Serves as General Upload SDK for NFS Storage
     */
    constructor() {
        super();
        this.nfsMount = sails.config.custom.nfStorage.nfsMount;
        this.nfsBucket = sails.config.custom.nfStorage.bucketName;
    }

    async upload(source, destination) {
        try {
            const finalDest = `${this.nfsMount}${this.nfsBucket}/${destination}`;
            return fse.copy(source, finalDest);
        } catch (e) {
            sails.log.error(e);
            throw new Error(e);
        }
    }

    /**
     * @memberof NFSStorage
     * @name Download
     * @params filename, destination
     * @description Serves as General Download SDK for NFS Storage
     */
    async download(filename, destination) {
        try {
            return fse.copy(`${this.nfsMount}${this.nfsBucket}/${filename}`, destination);
        } catch (e) {
            sails.log.error(e);
            throw new Error(e);
        }
    }
}


/**
 * @class StorageFactory
 * @type Factory for Storage System
 * @description Creates a storage system based on configuration
 */
class StorageFactory {
    static getInstance(storageMode) {
        if (!storageMode) {
            throw new Error('Please add a storage Mode');
        }
        if (storageMode === 'GCLOUD') {
            return new GoogleCloudStorageSystem();
        }
        if (storageMode === 'NFS') {
            return new NFSStorageSystem();
        }
    }
}

const storageSystem = StorageFactory.getInstance(sails.config.custom.storageType);
module.exports = storageSystem;

