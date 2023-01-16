# LRU Cache

Simple LRU cache

## Install

```bash
npm install
```

## Usage

```javascript
import cache from "not-another-lru-cache";

const cache = new Cache({ capacity: 100 });
cache.set("bob", "sally");
const value = cache.get("bob"); // 'sally'
```

## License

The MIT License (MIT).
