# popup

## Project setup
```
npm install
```

### demo
```
npm run serve
```

### 使い方
#### npm install
```
npm install poppuappu
```
#### プラグインをVueにインストール
```js
import Popup from 'poppuappu'
Vue.use(Popup)
```

#### 各コンポーネントで使う
```js
// vue component
export default {
    methods:{
        hoge:function(){
            this.$popup.show('some message')
        }
    }
}
```
