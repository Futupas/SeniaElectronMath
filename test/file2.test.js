'use strict';

// const { expect } = require('chai');
// // import 'chai';
// const { add } = require('../file2');

import { expect } from 'chai';
import { add } from '../file2.js';

describe('Math Functions', function() {
    describe('add()', function() {
        it('should return 4 when adding 2 and 2', function() {
            expect(add(2, 2)).to.equal(4);
        });

        it('should return -1 when adding 2 and -3', function() {
            expect(add(2, -3)).to.equal(-1);
        });
    });
});

