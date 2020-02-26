# Node - Storage Pipe Manager

[![npm package](https://nodei.co/npm/node_storage_manager.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node_storage_manager/)

[![Run on Repl.it](https://repl.it/badge/github/9trocode/node_storage_manager)](https://repl.it/github/9trocode/node_storage_manager)
![Node.js CI](https://github.com/9trocode/node_storage_manager/workflows/Node.js%20CI/badge.svg?branch=master)
![Node.js CI](https://github.com/9trocode/node_storage_manager/workflows/Node.js%20CI/badge.svg?branch=master&event=issues)
![Node.js CI](https://github.com/9trocode/node_storage_manager/workflows/Node.js%20CI/badge.svg?branch=master&event=release)

> Node.js idiomatic client for [Cloud Storage]

[Node - Storage Pipe Manager](https://www.npmjs.com/package/node_storage_manager) allows world-wide
storage and retrieval of any amount of data at any time. You can use Google
`Cloud Storage`, `AWS S3 Bucket` for a range of scenarios including serving website content,
storing data for archival and disaster recovery, or distributing large data
objects to users via direct download. Storage Pipe Manager is a Pipe Factory that allow you easily switch between `Google CLoud` `AWS S3` and `FS` without breaking anything or any extra configurations

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
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

Local FS Declaration
```bash
export MOUNT_POINT=/Users/nitrocode/bucket/
```
Would advice to declare all at once for easy switch between clients


### Installing the client library

```bash
npm i node_storage_manager
```


### Using the client library on GCLOUD
node_storage_manager allows you to switch between clients easily without reconfigurations
```javascript
  // Imports the node_storage_manager library
  const Storage = require('node_storage_manager');

  // Set Storage Instance between AWS,GCLOUD and FS  
  let StorageInstance =  Storage.getInstance('GCLOUD');

  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const bucketName = 'bucket-name';

  async function download() {
    // Creates the new bucket
   await StorageInstance.download('bucket', 'file', 'destination');
    console.log(`Bucket ${bucketName} created.`);
  }

  createBucket().catch(console.error);

```

### Using the client library on AWS
```javascript
  // Imports the node_storage_manager library
  const Storage = require('node_storage_manager');

  // Set Storage Instance between AWS,GCLOUD and FS  
  let StorageInstance =  Storage.getInstance('AWS');

  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const bucketName = 'bucket-name';

  async function download() {
    // Creates the new bucket
   await StorageInstance.download('bucket', 'file', 'destination');
    console.log(`Bucket ${bucketName} created.`);
  }

  createBucket().catch(console.error);

```
