# MobX 分享

## Preparation

### Install

npm install mobx --save
npm install mobx-react --save

### Babel plugins

- babel-plugin-transform-class-properties
- babel-plugin-transform-decorators
- babel-plugin-transform-react-jsx

```javascript
{
  module: {
    rules: [{
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
    }]
  }
}
```

## Introduction

### Version

MobX >= 5

any browser with ES6 proxy support. IE11 not supported

MobX 4

any ES5 browser, api's are the same, but has some limitations

### Philosophy

Anything that can be derived from the application state, should be derived. **Automatically**

### Flow

![flow graph](https://mobx.js.org/docs/flow.png)

![another fg](https://mobx.js.org/getting-started-assets/overview.png)

## Core Conceoptions

### Observable state

### Computed values

### Reactions
