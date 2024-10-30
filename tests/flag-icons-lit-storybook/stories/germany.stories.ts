import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { customElement, property } from "lit/decorators.js";

import "../../../libs/flag-icons-lit/src/lib/germany-flag-icon"


const meta: Meta = {

    component: "GermanyFlagIcon",
    // decorators: [(story) => html`<div style="margin: 3rem">${story()}</div>`],
    argTypes: {
        width: {
            name: "width",
            control: 'number',
            description: 'width in px',
        },
        primum: {
            name: "color primum",
            control: 'color',
            description: 'color as hex',
        },
        secundo: {
            name: "color secundo",
            control: 'color',
            description: 'color as hex',
        },
        tertius: {
            name: "color tertius",
            control: 'color',
            description: 'color as hex',
        }
    }
};

export default meta;
type Story = StoryObj;


export const primary: Story = {
    args: {
        width: 200,
        primum: "#be8c8c",
        secundo: "#ff0000",
        tertius: "#ffcc00",
    },
    render:
        ({ width, primum, secundo, tertius }) =>
            html`<flag-icon-germany   class="flag-icon germany"></flag-icon-germany>`
};