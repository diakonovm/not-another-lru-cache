/**
 * 
 * @param {Object} 
 * @param {Number} config.capacity
 * @param {Boolean} config.log
 */
export default class LRUCache {
  constructor(config) {
    if (typeof config.capacity !== 'number') throw TypeError('[TypeError - Capacity must be of type Number]')
    if (config.capacity <= 0) throw RangeError('[RangeError - Capacity must be greater than 0]')

    this.capacity = config.capacity 
    this._cache = {}
    this._list = new DoublyLinkedList()

    // TODO: Implement log via Proxy/Reflect
    this._log = config.log || false
  }

  get(key) {
    const node = this._cache[key]

    if (node === undefined) {
      return undefined
    } else {
      this._list.touch(node)
    }

    return node.value
  }

  set(key, value) {
    const node = this._cache[key]

    if (node !== undefined) {
      node.data = value
      this._list.touch(node)
      return
    }

    if (this._list.capacity === this.capacity) {
      const expired = this._list.snip()
      delete this._cache[expired.data.key]
    }

    this._list.unshift(new KVPair(key, value))

    this_cache[key] = item
  }

}

class KVPair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

/**
 * 
 * @param {Object} data
 * @param {String | Number} key
 * @param {*} value
 */
export class DoublyLinkedListNode {
  constructor(data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

/**
 * A circular doubly linked list for an LRU cache
 */
export class DoublyLinkedList {
  constructor() {
    this.head = null
    this.capacity = 0
  }

  /**
   * Move node to head
   */
  touch(node) {
    if (this.head === null) {
      this.head = node
      this.head.prev = this.head
      this.head.next = this.head
    } else {
      const tail = this.head.prev

      node.prev = tail
      node.next = this.head
      tail.next = node
      this.head.prev = node
      this.head = node
    }

    return node
  }

  /**
   * Remove tail
   */
  pop() {
    if (this.capacity === 0)
      return

    const tail = this.head.prev
    const newTail = tail.prev

    const isolate = (node) => {
      node.prev = null
      node.next = null
    }

    this.head.prev = newTail
    newTail.next = this.head

    isolate(tail)

    this.capacity--

    return tail
  }

  unshift (data) {
    const node = new DoublyLinkedListNode(data)
    this.touch(node)
    this.capacity++

    return node
  }

  _toArray () {
    const arr = []

    if (this.head === null) 
      return arr
  
    let current = this.head

    do {
      arr.push(current.data)
      current = current.next
    } while (current !== this.head)

    return arr
  }

}
