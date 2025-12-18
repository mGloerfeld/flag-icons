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

    static override styles = css`
        :host {
            display: inline-block;
            width: var(--flag-width, 300px);
            height: var(--flag-height, 200px);
            border: var(--flag-border, none);
            border-radius: var(--flag-border-radius, 0);
            box-shadow: var(--flag-shadow, none);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        :host([responsive]) {
            width: 100%;
            height: auto;
            max-width: var(--flag-max-width, 100%);
            aspect-ratio: 5/3;
        }

        flag {
            display: block;
            width: 100%;
            height: 100%;
        }

        flag svg {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        /* Interactive states */
        :host(.interactive) {
            cursor: pointer;
        }

        :host(.interactive:hover) {
            transform: scale(1.02);
        }

        :host(.interactive:active) {
            transform: scale(0.98);
        }

        /* Animation support */
        :host(.animated) {
            animation: flagFadeIn 0.6s ease-in-out;
        }

        @keyframes flagFadeIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
            :host {
                transition: none;
                animation: none;
            }
        }
    `;

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
            <flag>
                ${unsafeSVG(germanFlagSvg)}
            </flag>
        `;
    }
}
