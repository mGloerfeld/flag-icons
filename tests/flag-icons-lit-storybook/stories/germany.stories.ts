import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import "../../../libs/flag-icons-lit/src/lib/germany-flag-icon"

const meta: Meta = {

    component: "GermanyFlagIcon",
    // decorators: [(story) => html`<div style="margin: 3rem">${story()}</div>`],
    argTypes: {
        width: {
            name: "width",
            type: 'number',
            description: 'width in px',
        },


        color1: {
            name: "color 1",
            control: 'color',
            description: 'color as hex',
        },
        color2: {
            name: "color 2",
            control: 'color',
            description: 'color as hex',
        },
        color3: {
            name: "color 3",
            control: 'color',
            description: 'color as hex',
        },
    }
};

export default meta;
type Story = StoryObj;


export const primary: Story = {
    args: {
        width: 250,
        color1: "#333333",
        color2: "#ababab",
        color3: "#555555",
    },
    render:
        ({ width, color1, color2, color3 }) =>
            html`<flag-icon-germany colors="${color1},${color2},${color3}" style="display:block; width:${width}px" class="flag-icon"></flag-icon-germany>`
};