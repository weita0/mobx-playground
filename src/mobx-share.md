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

> MobX is a battle tested library that makes state management simple and scalable by transparently applying functional reactive programming (TFRP)

### Philosophy

Anything that can be derived from the application state, should be derived. **Automatically**

## [Core Conceptions](#core-conceptions)

### State(状态)

驱动应用的数据

### Derivation(衍生)

任何**源自**状态且不会有任何进一步相互作用的东西，都是衍生，它们可以是

- UI
- Derived Data(衍生数据)
- Backend Integrations(后端集成)

MobX把这些衍生分为两种：

1. Computed values: 使用纯函数从当前可观察状态中衍生出的值

2. Reaction: 当状态改变时需要**自动**发生的副作用

### Action

任何一段改变状态的代码

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

### @reaction

## 和Redux的异同

Advantages:

1. 少了很多模版代码，自由度更高

Disadvantages:
