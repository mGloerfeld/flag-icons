import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { flags, germany } from "@globecruising/flag-icons-core"
import { BaseFlagIcon } from './base-flag-icon';

@customElement('flag-icon-germany')
class GermanyFlagIcon extends LitElement {

    @property({ type: String })
    width = "200px";

    @property()
    classes = { size: true, anotherclass: true };

    @property()
    country: flags = flags.germany;

    static override styles = [

        css`
       
          .primum {
                fill: var(--color-primum);
            }
           .secundo {
                fill: var(--color-secundo);
            }
            .tertius {
                fill: var(--color-tertius);
            }
           
      `];


    override render() {

        let svg = new BaseFlagIcon().getElement()

        for (let item of germany.gometry) {


            let el = document.createElementNS('http://www.w3.org/2000/svg', "path");

            el.setAttribute("d", item.path)
            el.setAttribute("class", `${germany.title} ${item.type}`)

            svg.appendChild(el);
        }
        return svg;
    }
}

export default GermanyFlagIcon;