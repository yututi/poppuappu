import { PluginObject } from 'vue';
import { PopupOptions, Popup as P } from './popup';
declare const Popup: PluginObject<PopupOptions>;
export default Popup;

declare module 'vue/types/vue' {

    interface Vue {
        $popup: P
    }

    interface VueConstructor {
        $popup: P
    }
}