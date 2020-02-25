const assert = require('assert');
const { expect }= require('chai');
const storageSystem = require('../index');

describe('Simple Storage Test', () => {

    //First stage Unit Test
    it('should run', () => {
        storageSystem.upload();
    });

});
