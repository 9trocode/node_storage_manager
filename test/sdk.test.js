const assert = require('assert');
const { expect }= require('chai');
const storageSystem = require('../index');

describe('Simple Storage Test', () => {

    //First stage Unit Test
    it('should run', () => {
      let data =  storageSystem.upload('smc-v1-dev', '/Users/nitrocode/tmp/dev_key.key', '/Users/nitrocode/tmp/');
      console.log(data);
    });

});
