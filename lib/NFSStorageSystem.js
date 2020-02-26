const StorageSystem = require ('./storage-system');
const fse = require('fs-extra');

class NFSStorageSystem extends StorageSystem {
    /**
     * @memberof NFSStorage
     * @name Upload
     * @params filename, destination
     * @description Serves as General Upload SDK for NFS Storage
     */
    constructor() {
        super();
        this.nfsMount = '';
        this.nfsBucket = '';
    }

    async upload(source, destination) {
        try {
            const finalDest = `${this.nfsMount}${this.nfsBucket}/${destination}`;
            return fse.copy(source, finalDest);
        } catch (e) {
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
            throw new Error(e);
        }
    }
}

module.exports = NFSStorageSystem;
