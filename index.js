module.exports = ver => {
  const mcData = require('minecraft-data')(ver)
  const ChatMessage = require('prismarine-chat')(ver)
  const prisNBT = require('prismarine-nbt')
  function getSimpleNBT (item) {
    if (!item?.nbt) return null
    return prisNBT.simplify(item.nbt)
  }
  function getName (nbt) {
    if (nbt === null || !nbt?.display?.Name) return null
    return new ChatMessage(nbt.display.Name).toString()
  }
  function getLore (nbt) {
    if (nbt === null || !nbt?.display?.Lore) return null
    return nbt.display.Lore.map(line => new ChatMessage(line).toString())
  }
  function strRemoveColorCodes (str) {
    return str.replace(/§./g, '')
  }
  function getSimpleItem (item, { ignoreProps = [], removeColorCodes = true } = {}) {
    if (item === null) return null
    const data = { slot: item.slot, count: item.count }
    data.nbt = getSimpleNBT(item)
    data.name = getName(data.nbt)
    if (data.name !== null && removeColorCodes) data.name = strRemoveColorCodes(data.name)
    data.lore = getLore(data.nbt)
    if (data.lore !== null && removeColorCodes) data.lore = data.lore.map(l => strRemoveColorCodes(l))
    if (mcData.itemsByName[item.name]?.maxDurability) {
      data.durability = {
        used: item.durabilityUsed,
        max: mcData.itemsByName[item.name].maxDurability
      }
    }
    data.enchants = item.enchants
    ignoreProps.forEach(propName => delete data[propName])
    return data
  }
  return { getSimpleItem }
}
