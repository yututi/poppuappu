import Vue, { VNode } from 'vue'
import Pupup from './popup'

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode { }
        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {
            $popup: Pupup
        }
        interface IntrinsicElements {
            [elem: string]: any
        }
    }
}

declare module 'vue/types/vue' {

    interface Vue {
        $popup: Pupup
    }

    interface VueConstructor {
        $popup: Pupup
    }
}