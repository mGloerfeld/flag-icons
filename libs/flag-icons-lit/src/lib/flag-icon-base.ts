import { css, CSSResultGroup, LitElement } from "lit";
import { customElement, property } from 'lit/decorators.js';


class Base extends LitElement {

    @property({ type: Number })
    width = 200;

    @property({ type: Number })
    height?: number;

    @property({ type: String, })
    accessor colorPrimus = "#000000";

    @property({ type: String, })
    accessor colorSecundo = "#000000";

    private svg: SVGElement;

    static override styles =
        css` 
        :host {
            display:block;
            width: 200px;
            overflow:hidden;
         }` as CSSResultGroup;

    constructor() {
        super();

        this.svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    }

    public getSVGElement() {
        return this.svg;
    }

}

export { Base }