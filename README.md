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

## getSimpleItem (item, { ignoreProps: string[], removeColorCodes: boolean })

`item`: instance of prismarine-item

`options`:
- `ignoreProps` (`Array<string>`): properties that are deleted off of the simple item before it is returned
- `removeColorCodes` (`boolean`): remove §x from the name/lore property before returning, default is true

### example output
(good to know: by default, lore and name have all color codes stripped from them, there may be an option to disable this in the future)
```json
{
  "slot": 10,
  "count": 1,
  "nbt": {
    "ench": [
      {
        "lvl": 5,
        "id": 16
      },
      {
        "lvl": 5,
        "id": 34
      }
    ],
    "display": {
      "Lore": [
        "§f§llore line 1",
        "§6§llore line 2"
      ],
      "Name": "§e§My Sword"
    }
  },
  "name": "My Sword",
  "lore": [
    "lore line 1",
    "lore line 2"
  ],
  "durability": {
    "used": 0,
    "max": 1561
  },
  "enchants": [
    {
      "lvl": 5,
      "name": "sharpness"
    },
    {
      "lvl": 5,
      "name": "unbreaking"
    }
  ]
}
```
