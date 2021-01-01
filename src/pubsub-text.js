import Text from './text'

export default customElements.define('pubsub-text', class extends Text {
  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback()
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
})
