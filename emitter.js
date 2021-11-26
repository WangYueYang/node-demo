const { doesNotReject } = require('assert');
const EventEmitter = require('events');
// events模块提供了 EventEmitter 类， 是 Node.js 中处理事件的关键

const emitter = new EventEmitter();

// 'newListener'
// 将监听器（事件）添加到内部的监听器数组前，EventEmitter 会出发自身的 'newListenet' 事件，会在注册的监听器前触发。
emitter.on('newListener', (event, listeners) => {
  // console.log(event, listeners)
})

emitter.on('fun', () => console.log('fun'))
emitter.emit('fun')
emitter.on('event', () => console.log('声明了一个 event 事件'))
emitter.emit('event');

// removeListener 移除 listener 后触发 removeListener

// emitter.addListerer() === emitter.on() 
// emitter.on(eventName, listenerFun) 将 listenerFun 添加到名为 eventName 的事件监听器数组的末尾。不检查是否已添加 listener。 多次调用传入相同的 eventName 和 listener 组合将导致多次添加和调用 listener。

emitter.on('fun', () => console.log('fun2'));
emitter.emit('fun')


// 返回字符串（表示在当前 EventEmitter 对象上注册的事件）数组：
const eventNames = emitter.eventNames();
console.log(eventNames)

// 获取可以添加到 EventEmitter 对象的监听器的最大数量（默认为 10，但可以使用 setMaxListeners() 进行增加或减少）。
const getMaxListeners = emitter.getMaxListeners();
console.log(getMaxListeners);

// 获取作为参数传入的事件监听器的计数：
const listenerCount = emitter.listenerCount('fun');
console.log(listenerCount); // 2

// emitter.off() === emitter.removeListener(eventName, listenerFun) 从 eventName 的事件监听数组中移除指定的listener

