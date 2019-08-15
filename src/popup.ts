export interface PopupOptions {
    position?: string,
    duration?: number,
    mode?: string
}

const defaultOptions: PopupOptions = {
    position: 'top',
    duration: 5000,
    mode: 'primary'
}

class PupupObj {
    removed = false
    constructor(public el: HTMLElement) {
        const close = el.querySelector('.popup__close')
        if(close){
            close.addEventListener('click', ()=>{
                this.hide()
            })
        }
    }
    show() {
        const inner = this.el.querySelector('.popup')

        if (inner) {
            // console.log(inner.scrollHeight)
            // console.log(Math.ceil(inner.getBoundingClientRect().height))
            this.el.style.height = inner.getBoundingClientRect().height + 'px';
        }
        this.el.classList.add('popup-wrapper--show')
    }
    hide() {
        if (this.removed) return
        this.removed = true
        this.el.style.height = null;
        this.el.classList.add('popup-wrapper--hide')
        setTimeout(() => this.remove(), 1000);
    }
    remove() {
        this.el.parentNode && this.el.parentNode.removeChild(this.el)
    }
}

export class Popup {

    containerId: string = "popup-container"
    container: HTMLElement;
    globalOptions: PopupOptions;

    public constructor(options?: PopupOptions) {
        const el = document.createElement("div")
        el.id = this.containerId
        el.classList.add('popup-container')
        document.body.appendChild(el)
        this.container = el;
        this.globalOptions = Object.assign({}, defaultOptions, options)
    }

    show(message: string, options?: PopupOptions) {

        const localOptions = Object.assign({}, this.globalOptions, options)

        const popup = this.createPupup(message, localOptions)
        this.container.appendChild(popup.el)

        // show
        setTimeout(() => {
            popup.show()

            // hide after the duration
            setTimeout(() => {
                popup.hide()
            }, localOptions.duration)
        }, 1)
    }

    createPupup(message: string, options: PopupOptions): PupupObj {
        const wrapper = document.createElement("div")
        wrapper.classList.add('popup-wrapper')
        const popup = document.createElement("div")
        popup.classList.add('popup')
        popup.classList.add(`popup--${options.mode}`)
        const msg = document.createElement("div")
        msg.classList.add('popup__message')
        msg.innerHTML = message;
        const clsBtn = document.createElement('div')
        clsBtn.classList.add('popup__close')

        popup.appendChild(msg)
        popup.appendChild(clsBtn)

        wrapper.appendChild(popup)

        return new PupupObj(wrapper);
    }
}

export default Popup