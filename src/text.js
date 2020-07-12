import './controller'

export default class PubsubText extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
    
    this._setValue = this._setValue.bind(this)
  }
  
  get fade() {
    return this.hasAttribute('fade')
  }
  
  set value(value) {
    if (this.fade) this.classList.add('fade')
    this.shadowRoot.querySelector('.value').innerHTML = value
    if (this.fade) this.classList.remove('fade')
  }
  
  get value() {
    return this._value
  }
  
  connectedCallback() {
    if (this.fade) this.value = 'Loading...'
    pubSub.subscribe(this.getAttribute('event'), this._setValue)
    this.value = pubSub.subscribers[this.getAttribute('event')].value
  }
  
  _setValue(value, oldValue) {
    if (value !== oldValue) this.value = value
  }
  
  get template() {
    return `
    <style>
      :host {
        display: flex;
        font-size: 24px;
        font-weight: 700;
      }
      .value {
        opacity: 1;
        padding-left: 6px;
        transition: opacity 160ms --ease-in 160ms;
      }
      ::host(.fade) .value {
        opacity: 0;
        transition: opacity 160ms --ease-out;
      }
      .flex {
        flex: 1;
      }
      
      :host([small]) ::slotted(*) {
        font-size: 1em;
      }
    </style>
    
    <slot></slot>
    <span class="flex"></span>
    <span class="value"></span>
    `
  }
}