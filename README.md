# poppuappu
notification popup plugin for vue.js.

## Demo
clone this repository and run `npm i && npm run dev`.

## Installation
```cmd
npm i poppuappu
```

## How to use
register this plugin.
```js
import Vue from 'vue'
import Poppuappu from 'poppuappu'
Vue.use(Poppuappu)
```

namespace $poppuappu will appear Vue object.  
you can display popup via `show` method.
```js
// in the Vue component.
this.$poppuappu.show('some text.')
// compatible notification levels are belows.
this.$poppuappu.show('this is info notification.' { mode: 'info' })
this.$poppuappu.show('this is warn notification.' { mode: 'warn' })
this.$poppuappu.show('this is error notification.' { mode: 'error' })
// you can also use $poppuappu in global.
Vue.$poppuappu.show('some text.')
```
