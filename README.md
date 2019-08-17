# poppuappu
notification popup plugin for vue.js.

## Installation
```cmd
npm i poppuappu
```

## Demo
clone this repository and `npm i && npm run serve`.

## How to use
register plugin.
```js
import Vue from 'vue'
import Poppuappu from 'poppuappu'
Vue.use(Poppuappu)
```

namespace $poppuappu will bind to Vue object.  
you can display popup as belows in your Vue component.
```js
this.$popppuappu.show('some text')
```
