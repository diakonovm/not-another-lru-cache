import assert from 'assert'
import { DoublyLinkedList } from '../index.js'

describe('DoublyLinkedList', function() {

  describe('#unshift', function() {

    it ('should put node at the head position', function() {
      const list = new DoublyLinkedList()
      
      list.unshift(3)
      list.unshift(2)
      list.unshift(1)
  
      const arr = [1, 2, 3]
      const actual = list._toArray()
  
      assert.deepStrictEqual(arr, actual)
      assert.equal(list.head.data, 1)

      const tail = list.head.prev

      assert.equal(tail.data, 3)
    })

    it ('should return the node', function() {
      const list = new DoublyLinkedList()

      assert.equal(list.unshift(1).data, 1)
    })

  })

  describe('#pop', function() {

    it ('should remove the pop\'ed item', function() {
      const list = new DoublyLinkedList()
      
      list.unshift(3)
      list.unshift(2)
      list.unshift(1)

      list.pop()

      const arr = [1, 2]
      const actual = list._toArray()

      assert.deepStrictEqual(arr, actual)
      assert.equal(list.head.prev.data, 2)
    })

    it ('should pop head if list only has head', function() {
      const list = new DoublyLinkedList()
      
      list.unshift(1)
      list.pop()

      assert.equal(list.head.prev, null)
      assert.equal(list.head.next, null)
    })

    it ('should return the pop\'ed item', function() {
      const list = new DoublyLinkedList()

      list.unshift(1)

      assert.equal(list.pop().data, 1)
    })

  })

})