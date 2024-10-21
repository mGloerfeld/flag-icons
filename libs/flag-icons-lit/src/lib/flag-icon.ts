import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { flags } from "@globecruising/flag-icons-core"
import { fStyles } from "@globecruising/flag-icons-core"


@customElement('flag-icon')
export class SimpleGreeting extends LitElement {

    @property()
    classes = { size: true, anotherclass: true };

    @property()
    country: flags = "germany" as flags;

    static override styles = [
        fStyles,
        css`
          
      `];

    override render() {
        console.log(fStyles)
        return html`<p class="blue-button">Hello, 2 ${this.country}!</p>`;
    }
}