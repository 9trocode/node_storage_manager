const StorageSystem = require('./storage-system');
const fse = require('fs-extra');
const fs = require('fs');

class NFSStorageSystem extends StorageSystem {
    /**
     * @memberof NFSStorage
     * @name Upload
     * @params filename, destination
     * @description Serves as General Upload SDK for NFS Storage
     */
    constructor() {
        super();
        this._nfsMount = process.env.NFS_MOUNT_POINT;
    }

    async upload(bucketName, filename, destination) {
        try {
            const finalDest = `${this._nfsMount}${bucketName}/${filename}`;
            return fse.copy(destination, finalDest);
        } catch (e) {
            return new Error(e);
        }
    }

    /**
     * @memberof NFSStorage
     * @name Download
     * @params filename, destination
     * @description Serves as General Download SDK for NFS Storage
     */
    async download(bucketName, filename, destination) {
        try {
            return await fse.copy(`${this._nfsMount}${bucketName}/${filename}`, destination);
        } catch (e) {
            return new Error(e);
        }
    }

    async createBucket(bucketName) {
        try {
            if (!fs.existsSync(this._nfsMount + bucketName)) {
                return fs.mkdirSync(this._nfsMount + bucketName);
            } else {
                return new Error('Bucket Already Exist')
            }
        } catch (err) {
            return new Error(err)
        }
    }

    async deleteBucket(bucketName) {
        try {
            if (fs.existsSync(this._nfsMount + bucketName) === true) {
                return fs.rmdirSync(this._nfsMount + bucketName, {recursive: true});
            } else {
                return new Error('Bucket Does Not Exist')
            }
        } catch (err) {
            return new Error(err)
        }
    }

    async listFiles(bucketName) {
        let files = [];
        try {
            fs.readdirSync(this._nfsMount + bucketName).forEach(file => {
                files.push(file);
            });
            return files
        } catch (err) {
            return new Error(err)
        }
    }

    async listBuckets() {
        let files = [];
        try {
            fs.readdirSync(this._nfsMount).forEach(file => {
                files.push(file);
            });
            return files
        } catch (err) {
            return new Error(err)
        }
    }

    async deleteFile(buckName, filename) {
        try {
            return fs.unlinkSync(this._nfsMount + buckName + filename)
        } catch (err) {
            return new Error(err)
        }
    }

}

module.exports = NFSStorageSystem;
