import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { flags } from "@globecruising/flag-icons-lib"

@customElement('flag-icon')
export class SimpleGreeting extends LitElement {

    static override styles = css`p { color: blue }`;

    @property()
    country: flags = "germany" as flags;

    override render() {

        return html`<p>Hello, ${this.country}!</p>`;
    }
}