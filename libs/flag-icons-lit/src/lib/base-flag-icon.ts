
class BaseFlagIcon {

    svg: SVGElement;

    constructor() {

        this.svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
        this.svg.setAttributeNS("xml", "space", "preserve");
        this.svg.setAttribute("x", "0px");
        this.svg.setAttribute("y", "0px");
        this.svg.setAttribute("viewBox", "0 0 180 135");
    }

    public getElement() {
        return this.svg;
    }
}

export { BaseFlagIcon }