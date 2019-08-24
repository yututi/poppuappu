import { PluginObject } from 'vue'
import P, { PopupOptions } from './popup'
import './index.styl'

const Poppuappu: PluginObject<PopupOptions> = {
    install(Vue, options?) {
        Vue.prototype.$poppuappu = Vue.$poppuappu = new P(options)
    }
}

export default Poppuappu;
