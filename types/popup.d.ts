export interface PopupOptions {
    position?: string;
    duration?: number;
    mode?: string;
}
declare class PupupObj {
    el: HTMLElement;
    removed: boolean;
    constructor(el: HTMLElement);
    show(): void;
    hide(): void;
    remove(): void;
}
export declare class Popup {
    containerId: string;
    container: HTMLElement;
    globalOptions: PopupOptions;
    constructor(options?: PopupOptions);
    show(message: string, options?: PopupOptions): void;
    createPupup(message: string, options: PopupOptions): PupupObj;
}
export default Popup;
