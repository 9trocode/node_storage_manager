const assert = require('assert');
const { expect }= require('chai');
const storageSystem = require('../index');

describe('Simple Storage Test', () => {

    //First stage Unit Test
    it('should run', () => {
      let StorageInstance =  storageSystem.getInstance('CLOUDINARY');
        const data =  StorageInstance.upload('media', '/Users/nitrocode/tmp/up.png', 'image');
          console.log(data);
    });

});
