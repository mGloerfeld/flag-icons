import { LitElement } from "lit";
import { customElement, property } from 'lit/decorators.js';


class BaseFlagIcon extends LitElement {

    @property({ type: Number })
    width = 200;

    @property({ type: Number })
    height = 0;

    svg: SVGElement;

    constructor() {
        super();

        this.svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
        this.svg.setAttributeNS("xml", "space", "preserve");
        this.svg.setAttribute("x", "0px");
        this.svg.setAttribute("y", "0px");
    }

    public getSVGElement() {
        return this.svg;
    }
}

export { BaseFlagIcon }