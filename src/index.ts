import { PluginObject } from 'vue'
import P, { PopupOptions } from './popup'
import './index.styl'

const PopupPlugin: PluginObject<PopupOptions> = {
    install(Vue, options?) {
        Vue.prototype.$popup = new P(options)
    }
}

export default PopupPlugin;
