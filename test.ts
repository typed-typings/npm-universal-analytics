/// <reference path="bundle.d.ts" />

import ua = require('universal-analytics')
import assert = require('assert')

const visitor = ua('')

assert.equal(typeof visitor.pageview('/').send, 'function')