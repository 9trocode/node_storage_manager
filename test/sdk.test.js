const assert = require('assert');
const { expect }= require('chai');
const storageSystem = require('../index');

describe('Simple Storage Test', () => {

    //First stage Unit Test
    it('should run', () => {
      let StorageInstance =  storageSystem.getInstance('AWS', 'Asia');
          StorageInstance.download('smc-v1-dev', 'dev_key.key', '/Users/nitrocode/tmp/');
      console.log(StorageInstance);
    });

});
