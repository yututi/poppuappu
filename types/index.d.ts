import { PluginObject } from 'vue';
import { Popup } from './poppuappu/popup';
import './poppuappu/index'

declare module 'vue/types/vue' {

    interface Vue {
        $popup: Popup
    }

    interface VueConstructor {
        $popup: Popup
    }
}
