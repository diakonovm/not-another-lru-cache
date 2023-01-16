import assert from 'assert'
import LRUCache, { KVPair } from '../index.js'

describe('LRUCache', function() {

  describe('#constructor', function() {

    it('config.capacity must be of type Number', function() {
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

  describe('#set', function() {

    it('should set a key/value pair', function() {
      const capacity = 3
      const lru = new LRUCache({ capacity })

      lru.set('key', 'value')
        
      assert.equal(lru.get('key'), 'value')
    })

    it('should pop at capacity', function() {
      const capacity = 3
      const lru = new LRUCache({ capacity })

      lru.set('bob', 'bob')
      lru.set('alice', 'alice')
      lru.set('sally', 'sally')
      lru.set('john', 'john')
        
      assert.equal(lru.capacity, 3)
    })

    it('should contain recent items at capacity limit', function() {
      const capacity = 3
      const lru = new LRUCache({ capacity })

      lru.set('bob', 'bob')
      lru.set('alice', 'alice')
      lru.set('sally', 'sally')
      lru.set('john', 'john')

      const actual = lru._list._toArray()
      const expected = [
        new KVPair('john', 'john'),
        new KVPair('sally', 'sally'),
        new KVPair('alice', 'alice')
      ]
      
      assert.deepStrictEqual(actual, expected)
    })

  })
  
})