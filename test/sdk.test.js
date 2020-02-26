const assert = require('assert');
const { expect }= require('chai');
const storageSystem = require('../index');

describe('Simple Storage Test', () => {

    //First stage Unit Test
    it('should run', () => {
      let StorageInstance =  storageSystem.getInstance('GCLOUD');
        const data =  StorageInstance.download('media', 'dev_key.key', '/Users/nitrocode/tmp/');
          console.log(data);
    });

});
