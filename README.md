# Node - Storage Pipe Manager

[![npm package](https://nodei.co/npm/node_storage_manager.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node_storage_manager/)

[![Run on Repl.it](https://repl.it/badge/github/9trocode/node_storage_manager)](https://repl.it/github/9trocode/node_storage_manager)
![Node.js CI](https://github.com/9trocode/node_storage_manager/workflows/Node.js%20CI/badge.svg?branch=master)
![Node.js CI](https://github.com/9trocode/node_storage_manager/workflows/Node.js%20CI/badge.svg?branch=master&event=issues)
![Node.js CI](https://github.com/9trocode/node_storage_manager/workflows/Node.js%20CI/badge.svg?branch=master&event=release)

> Node.js idiomatic client for [Cloud Storage]

[Node - Storage Pipe Manager](https://www.npmjs.com/package/node_storage_manager) allows world-wide
storage and retrieval of any amount of data at any time. You can use `Google
Cloud Storage`, `AWS S3 Bucket` for a range of scenarios including serving website content,
storing data for archival and disaster recovery, or distributing large data
objects to users via direct download. Storage Pipe Manager is a Pipe Factory that allow you easily switch between `Google CLoud` `AWS S3`, `CLOUDINARY` and `FS` without breaking anything or any extra configurations

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library on S3](#using-the-client-library-on-aws)
  * [Using the client library Google Storage](#using-the-client-library-on-gcloud)
* [Samples](#integration-samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin
Make Sure to define your credentials using enviromental vairable for `AWS`, `Google` and `FS` in your `.zshrc` or `.bashrc` file

Google Bucket Declaration
```bash
export GOOGLE_APPLICATION_CREDENTIALS=/Users/nitrocode/comics-eagle-39849343-837483483.json
```
AWS S3 Declaration
```bash
export AWS_ACCESS_KEY_ID=284893748923yuwfhsdkfjshkfjh
export AWS_SECRET_ACCESS_KEY=982u289432u48jsdfkjsr3894
export AWS_SESSION_TOKEN (optional)
```

Cloudinary Declaration
```bash
export CLOUDINARY_URL=cloudinary://4737858435783453:3827489jksdhfjasfhjBB@nitrocode
```

Digital Ocean Spaces
```bash
export DG_ACCESS_KEY=284893748923yuwfhsdkfjshkfjh
export DG_SECRET_KEY=982u289432u48jsdfkjsr3894
```

Local NFS Declaration 
```bash
export MOUNT_POINT=/Users/nitrocode/bucket/
```
Would advice to declare all at once for easy switch between clients


### Installing the client library

```bash
npm i node_storage_manager
```


### Using the client library on `GCLOUD`
node_storage_manager allows you to switch between clients easily without reconfigurations
```javascript
  // Imports the node_storage_manager library
  const Storage = require('node_storage_manager');

  // Set Storage Instance between AWS,GCLOUD and FS  
  let StorageInstance =  Storage.getInstance('GCLOUD');

  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
   // let bucketName = 'bucket-name';

    async function download(bucketName) {
      // Creates the new bucket
     await StorageInstance.download(bucketName, 'file', 'destination');
      console.log(`file downloaded`);
    }

```

### Using the client library on `AWS`
```javascript
  // Imports the node_storage_manager library
  const Storage = require('node_storage_manager');

  // Set Storage Instance between AWS,GCLOUD and FS  
  let StorageInstance =  Storage.getInstance('AWS');

  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // let bucketName = 'bucket-name';

  async function download(bucketName) {
    // Creates the new bucket
   await StorageInstance.download(bucketName, 'file', 'destination');
      console.log(`file downloaded`);
  }

```

### Using the client library on `CLOUDINARY`
```javascript
  // Imports the node_storage_manager library
  const Storage = require('node_storage_manager');

  // Set Storage Instance between AWS,GCLOUD and FS  
  let StorageInstance =  Storage.getInstance('CLOUDINARY');

  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // let bucketName = 'bucket-name';

  async function download(bucketName) {
    // Creates the new bucket
  let result = await StorageInstance.upload(bucketName, 'filepath', 'image or video');
      console.log(result);
  // This way you can get all data returned from Cloudinary Client e.g result.url e.t.c
  }
```

### Using the client library on `DigitalOcean Spaces`
```javascript
  // Imports the node_storage_manager library
  const Storage = require('node_storage_manager');

  // Set Storage Instance between AWS,GCLOUD and FS  
  let StorageInstance =  Storage.getInstance('DG', "Region e.g Asia");

  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // let bucketName = 'bucket-name';

  async function download(bucketName) {
    // Creates the new bucket
  let result = await StorageInstance.upload(bucketName, 'filepath', 'image or video');
      console.log(result);
  // This way you can get all data returned from Cloudinary Client e.g result.url e.t.c
  }
```

### Using the client library on `NFS`
```javascript
  // Imports the node_storage_manager library
  const Storage = require('node_storage_manager');

  // Set Storage Instance between AWS,GCLOUD and FS  
  let StorageInstance =  Storage.getInstance('NFS');

  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // let bucketName = 'bucket-name';

  async function download(bucketName) {
    // Creates the new bucket
   await StorageInstance.download(bucketName, 'file to download', 'destination e.g /Users/nitrocode/tmp/');
      console.log(`file downloaded`);
  }
```
### Integration Samples
    ## API Documentation

### StorageInstance functions

This contains a reference to the storage-pipe module. It is a valid use case to use
both this module and all it's functions

`Note to specify region on S3 and DigitalOcean Spaces you need to pass it parameter on getInstance `
```javascript
  // Imports the node_storage_manager library
  const Storage = require('node_storage_manager');
  let StorageInstance =  Storage.getInstance('AWS'or 'DG', 'Asia');
  StorageInstance.upload()
  }
```

### StorageInstance.download() 
Download file from S3, AWS & NFS using storage pipe

`parameters`:

 * `bucketName` - required, S3 bucket name to download files from.
 * `filename` - required, file to download from bucket
 * `destination` - required, where to put the file when done downloading

### StorageInstance.upload() 
Uploads file to S3, AWS & NFS using storage pipe

`parameters`:
 * `bucketName` - required, S3 bucket name to upload files to.
 * `filename` - required, file to up to bucket
 * `destination` - optional, for renaming file during upload i.e if file bob.jpg is beign uploaded setting `destination` on upload method will use `destination` value to rename the file 

`parameters required if on CLOUDINARY Instance`:
 * `bucketName` - required, S3 bucket name to upload files to.
 * `filename` - required, file to up to bucket
 * `fileType` - required, Type of file to upload e.g image, video
 

### StorageInstance.createBucket() 
Create's Bucket in S3, AWS & NFS using sotrage pipe

`parameters required if on S3 Instance`:
 * `bucketName` - required, Bucketname to Create.
 * `ACL` - required, Define which AWS accounts or groups are granted access and the type of access. e.g public-read

`parameters required if on GCLOUD Instance`:
 * `bucketName` - required, Bucketname to Create.
 * `location` - required, Define specific region e.g ASIA
 * `storageClass` - optional, e.g coldline default storage or Leave the second argument blank for default settings. 

`parameters required if on NFS Instance`:
 * `bucketName` - required, Bucketname to Create.


### StorageInstance.deleteBucket() 
Delete Bucket in S3, AWS & NFS using storage pipe

`parameters required`:
 * `bucketName` - required, Bucketname to Delete.


### StorageInstance.listBuckets() 
List Buckets in S3, AWS & NFS using storage pipe

`parameters required`:
 * `None` - No parameters Required


### StorageInstance.listFiles() 
List files in Bucket on S3, AWS & NFS using storage pipe

`parameters required`:
 * `bucketName` - required, Bucketname to list files from.


### StorageInstance.deleteFile() 
Delete file in Bucket on S3, AWS & NFS using storage pipe

`parameters required`:
 * `bucketName` - required, Bucketname to delete file from.
 * `filename` - required, filename to delete


### StorageInstance.getBucketMetadata() 
Get metadata from GCLOUD Storage `Note these is only applicable to GCLOUD instance alone`

`parameters required`:
 * `bucketName` - required, Bucketname to fetch it's metadata



## Versioning

This library follows [Semantic Versioning](http://semver.org/).


This library is considered to be **General Availability (GA)**. This means it
is stable; the code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **GA** libraries
are addressed with the highest priority.


## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/9trocode/node_storage_manager/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/9trocode/node_storage_manager/blob/master/LICENSE)
