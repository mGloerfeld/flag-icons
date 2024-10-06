import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('flag')
export class SimpleGreeting extends LitElement {

    static override styles = css`p { color: blue }`;

    @property()
    country = '';

    override render() {

        if (this.country == "") { throw new Error("Country property must be set.") }

        return html`<p>Hello, ${this.country}!</p>`;
    }
}