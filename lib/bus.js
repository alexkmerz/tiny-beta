const subscriptions = new Map()

const subscribe = (type, fn) => {
  if(!subscriptions.has(type)) subscriptions.set(type, [])
  subscriptions.set(type, [ ...subscriptions.get(type), fn ])
}

const emit = (type, payload) =>
  subscriptions.get(type).map(fn => fn(payload))

export { subscribe, emit }