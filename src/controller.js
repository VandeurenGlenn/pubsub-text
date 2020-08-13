import PubSub from './../../little-pubsub/src/index'

if (!globalThis.pubSub) globalThis.pubSub = new PubSub()
