import { PluginObject } from 'vue'
import P, { PopupOptions } from './popup'
import Comp from './PopupStyle.vue'

const Popup: PluginObject<PopupOptions> = {
    install(Vue, options?) {
        Vue.component('Popup', Comp)
        Vue.prototype.$popup = new P(options)
    }
}

export default Popup;