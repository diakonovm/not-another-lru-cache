import assert from 'assert'
import LRUCache from '../index.js'

describe('LRUCache', function() {

  describe('#constructor', function() {

    it ('config.capacity must be of type Number', function() {
      assert.throws(() => {
        new LRUCache({ capacity: '0' })
      }, TypeError)
    })
  
    it('config.capacity must be greater than 0', function() {
      assert.throws(() => {
        new LRUCache({ capacity: 0 })
      }, RangeError)
    })
  
  })
  
})