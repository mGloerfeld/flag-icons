import { css, html, LitElement } from 'lit';
import { FlagIconBase } from './flag-icon-base';
import { germany } from '@globecruising/flag-icons-core';
import { customElement, property } from 'lit/decorators.js';

@customElement('flag-icon')
export class FlagIconGermany extends FlagIconBase {

    @property({ type: String })
    colorTertius = "#000000";

    //       .primum {
    //             fill: var(--color-primum);
    //         }
    //        .secundo {
    //             fill: var(--color-secundo);
    //         }
    //         .tertius {
    //             fill: var(--color-tertius);
    //         }

    static override styles = [
        FlagIconBase.styles,
        css`div {
            color: red;
        }`
    ];

    override render() {

        let viewbox = this.GetSVGViewBox();


        for (let item in germany.geometries) {

            this.getSVGElement().setAttribute("viewBox", `0 0 ${viewbox["width"]} ${viewbox["height"]}`)

            let el = document.createElementNS('http://www.w3.org/2000/svg', "path");
            el.setAttribute("d", germany.geometries[item].path)
            el.setAttribute("fill", `${germany.geometries[item].color}`)
            el.setAttribute("class", `${item} `)

            this.getSVGElement().appendChild(el);
        }
        return this.getSVGElement();
    }

    GetSVGViewBox(): Record<string, number> {

        let dimensions: Record<string, number> = {};

        if (this.height) {
            dimensions["width"] = this.height * (1 + germany.with / germany.height);
            dimensions["height"] = this.height;

        } else if (this.width) {
            dimensions["width"] = this.width;
            dimensions["height"] = this.width * (germany.with / germany.height);
        } else {
            dimensions["width"] = germany.with;
            dimensions["height"] = germany.height;
        }

        return dimensions;
    }
}