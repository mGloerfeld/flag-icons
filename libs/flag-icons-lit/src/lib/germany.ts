import { html, css, LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { flags } from "@globecruising/flag-icons-core"
import { fStyles, germany } from "@globecruising/flag-icons-core"

@customElement('flag-icon')
export class SimpleGreeting extends LitElement {

    @property()
    classes = { size: true, anotherclass: true };

    @property()
    country: flags = "germany" as flags;

    static override styles = [

        css`
         .black { fill: var(--my-color, black); }
      `];

    override render() {

        let pathes: any[] = [];

        for (let item of germany.gometry) {
            pathes.push(svg`<path class='${item.cssClass}' d='${item.path}' />`);
        }

        return html`
        <div style="width:200px; height:200px">
        <svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 180 135" xml:space="preserve">${pathes}</svg>
        </div>`;
    }
}