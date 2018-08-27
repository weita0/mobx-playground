# MobX 分享

---

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

## 注意事项

### Array.isArray(observable([1, 2, 3])) === false

toJS() 或 slice() 转成普通数组
