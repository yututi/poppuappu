import { PluginObject } from 'vue';
import { Popup } from './src/popup';
import Poppuappu from './src/index'

export default Poppuappu;

declare module 'vue/types/vue' {

    interface Vue {
        $poppuappu: Popup
    }

    interface VueConstructor {
        $poppuappu: Popup
    }
}
