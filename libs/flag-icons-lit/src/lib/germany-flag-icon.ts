import { css, html, LitElement } from 'lit';
import { BaseFlagIcon } from './base-flag-icon';
import { germany } from '@globecruising/flag-icons-core';
import { customElement, property } from 'lit/decorators.js';

@customElement('flag-icon-germany')
export class GermanyFlagIcon extends BaseFlagIcon {

    name = "Matthias";

    @property()
    classes = { size: true, anotherclass: true };

    svgEl: any;

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

        this.svgEl = this.getSVGElement()

        for (let item of germany.gometry) {

            let el = document.createElementNS('http://www.w3.org/2000/svg', "path");

            el.setAttribute("d", item.path)
            el.setAttribute("class", `${germany.title} ${this.width * (1 + germany.ration)} `)

            this.getSVGElement().appendChild(el);
        }
        return this.getSVGElement();
    }
}