# Unhappy with Redux? Try Mobx

---

## Why state management is necessary

<img src="https://pic1.zhimg.com/v2-d321bbb8039a8a24fb58e793ef226d94_b.jpg" width="500px" />

## Pain points of using Redux

1. name a bunch of actions
2. what actions receive and what action.payload gives
3. complicated data transforming
4. a lot of biolerplate

## [Preparation](#preparation)

### Install

npm install mobx --save
npm install mobx-react --save

### Babel plugins

- babel-plugin-transform-class-properties
- babel-plugin-transform-decorators
- babel-plugin-transform-react-jsx

```javascript
// webpack.config.js fragment
rules: [
  test: /\.(js|jsx)$/,
  use: {
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-proposal-decorators', {'legacy': true}],
        ['transform-class-properties'],
        ['transform-react-jsx']
      ]
    }
  }
]
```

---

## [Introduction](#introduction)

### Version

MobX >= 5

any browser with ES6 proxy support. IE11 not supported

MobX 4

any ES5 browser, api's are the same, but has some limitations

### What is MobX

> MobX is a simple, scalable and battle tested **state management** solusion.

### Philosophy

Anything that can be derived from the application state, should be derived. **Automatically**

## [Core Conceptions](#core-conceptions)

### State(状态)

驱动应用的数据

### Derivation(衍生)

任何**源自**状态且不会有任何进一步相互作用的东西，都是衍生，它们可以是

- Derived Data(衍生数据)
- UI rendering
- Networking
- I/O
- Serialization

MobX把这些衍生分为两种：

1. Computed values: 使用纯函数从当前可观察状态中衍生出的值
2. Reaction: 当状态改变时需要**自动**发生的副作用，比如IO操作，网络请求，DOM更新，Reaction不产生值

### Action

Actions are all the things that alter the state.

任何一段改变状态的代码即Action

<img src="https://mobx.js.org/getting-started-assets/overview.png" height="400px" />

<img src="https://mobx.js.org/docs/flow.png" width="800px" />

---

## 主要API

### @observable

可以在实例字段和属性getter上使用，对于对象的哪部分需要成为客观察的(observable)，@observable提供了细粒度的支持。

```javascript
import { observable } from 'mobx'

class Todo {
  id: Math.random()
  @observable title = ''
  @observable finished = false
}
```

### @computed

Computed values(计算值)是可以根据现有的状态或其它计算值衍生出的值。

```javascript
class TodoList {
  @observable todos: []
  @computed get unfinished () {
    return this.todos.filter(todo => !todo.finished).length
  }
}
```

### autorun

当你想创建一个响应式函数，而这个函数本身不会有任何观察者(observer)时，可以用到

比如打印log，重绘UI，持久化等操作

### @action

Actions are all the things that alter the state.

建议对任何修改observable或具有副作用的函数使用，为啥？

和装饰的函数具有同样签名，但是额外提供了 **transaction**、**untracked**、**allowStateChanges** 方法

动作会分批处理变化并且只在最外层的动作完成后通知computed values 和 reaction

结合Devtools，能提供非常有用的调试信息

## Compare with Redux

1. 编程思想上，一个是FP思维，一个是OOP思维
2. Redux可以回溯，MobX由于数据只有一份，因此无法回溯
3. Simplicity & Complexity
4. 内存开销大和小
5. opinioned & unipinioned

## Summary

People often use MobX as alternative for Redux.

But please note that MobX is just a library to solve a technical problem

and not an architecture or even state container in itself.

In that sense the above examples are contrived and it is recommended to use proper

engineering practices like encapsulating logic in methods,

organize them in stores or controllers etc.
