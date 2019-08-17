import { PluginObject } from 'vue';
import { Popup } from './poppuappu/popup';
import Poppuappu from './poppuappu/index'

export default Poppuappu;

declare module 'vue/types/vue' {

    interface Vue {
        $poppuappu: Popup
    }

    interface VueConstructor {
        $poppuappu: Popup
    }
}
