# simple-item

a wrapper over a `prismarine-item` instance

# Basic usage:
```js
const { createBot } = require('mineflayer')
const { getSimpleItem } = require('simple-item')('1.12.2')

const bot = createBot()
bot.once('spawn', () => {
  console.log(bot.inventory.items().map(item => getSimpleItem(item)))
})
```

# API

## getSimpleItem (item, { ignoreProps: [] })

`item`: instance of prismarine-item

`options`:
    - `ignoreProps`: properties that are deleted off of the simple item before it is returned

### returns (by default)

`count`: number
`enchants`: Array<>