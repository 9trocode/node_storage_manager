const StorageSystem = require ('./storage-system');
const Cloudinary = require('cloudinary').v2;


class CloudinaryStorageSystem extends StorageSystem {
    /**
     * @memberof NFSStorage
     * @name Upload
     * @params filename, destination
     * @description Serves as General Upload SDK for NFS Storage
     */
    constructor() {
        super();
    }

    async upload(bucketName, filename, fileType) {
        try {
          await Cloudinary.uploader.upload(filename,
              { resource_type: fileType,
                  folder: bucketName,
                  chunk_size: 6000000,
                  eager: [
                      { width: 300, height: 300, crop: "pad", audio_codec: "none" },
                      { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],
                  eager_async: true,
                  },
              function(error, result) {
              return (result)
          });
    } catch (err) {
            return  new Error(err);
        }
    }


}

module.exports = CloudinaryStorageSystem;
