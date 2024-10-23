import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { flags, germany } from "@globecruising/flag-icons-core"
import { BaseFlagIcon } from './base-flag-icon';

@customElement('flag-icon-germany')
class GermanyFlagIcon extends LitElement {

    static override get properties() {
        return {
            greeting: { type: String },
            data: { attribute: false },
            items: { type: Array },
        };
    }

    @property()
    width = "second";

    @property()
    classes = { size: true, anotherclass: true };

    @property()
    country: flags = flags.germany;

    static override styles = [

        css`
         .black { fill: var(--my-color, black); }
      `];

    override render() {

        let svg = new BaseFlagIcon().getElement()
        let pathes: any[] = [];

        for (let item of germany.gometry) {

            let el = document.createElementNS('http://www.w3.org/2000/svg', "path");

            el.setAttribute("d", item.path)
            el.setAttribute("class", item.cssClass)

            svg.appendChild(el);

        }

        return svg;
    }
}

export default GermanyFlagIcon;