import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import germanFlagSvg from '../../../../flag-icons-core/src/assets/svg/germany.svg?raw';

@customElement('flag-icon-germany')
export class FlagIconGermany extends LitElement {
    /**
     * Width of the flag in pixels
     */
    @property({ type: Number })
    width = 300;

    /**
     * Height of the flag in pixels
     */
    @property({ type: Number })
    height = 200;

    /**
     * Whether the flag should be responsive
     */
    @property({ type: Boolean })
    responsive = false;

    /**
     * Accessibility label for screen readers
     */
    @property({ attribute: 'aria-label' })
    override ariaLabel = 'German flag';

    override createRenderRoot() {
        return this; // Rendert direkt ins Light DOM (Host-Element)
    }


    /**
     * Lifecycle method called after property updates
     * Listens to changes in width, height, and responsive properties
     */
    override updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);

        // Update CSS custom properties for non-responsive mode
        if (!this.responsive) {
            this.style.setProperty('--flag-width', `${this.width}px`);
            this.style.setProperty('--flag-height', `${this.height}px`);
        }

        if (changedProperties.has('width')) {
            console.log('Width changed from', changedProperties.get('width'), 'to', this.width);
            this.dispatchEvent(new CustomEvent('width-changed', {
                detail: {
                    oldValue: changedProperties.get('width'),
                    newValue: this.width
                },
                bubbles: true
            }));
        }

        if (changedProperties.has('height')) {
            console.log('Height changed from', changedProperties.get('height'), 'to', this.height);
            this.dispatchEvent(new CustomEvent('height-changed', {
                detail: {
                    oldValue: changedProperties.get('height'),
                    newValue: this.height
                },
                bubbles: true
            }));
        }

        if (changedProperties.has('responsive')) {
            console.log('Responsive mode changed from', changedProperties.get('responsive'), 'to', this.responsive);

            // Clear fixed dimensions when switching to responsive
            if (this.responsive) {
                this.style.removeProperty('--flag-width');
                this.style.removeProperty('--flag-height');
            } else {
                this.style.setProperty('--flag-width', `${this.width}px`);
                this.style.setProperty('--flag-height', `${this.height}px`);
            }

            this.dispatchEvent(new CustomEvent('responsive-changed', {
                detail: {
                    oldValue: changedProperties.get('responsive'),
                    newValue: this.responsive
                },
                bubbles: true
            }));
        }
    }

    override render() {
        return html`
                ${unsafeSVG(germanFlagSvg)}
        `;
    }
}
