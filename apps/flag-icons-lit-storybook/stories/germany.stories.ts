import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { customElement, property } from "lit/decorators.js";

// import "../../../libs/flag-icons-lit/src/lib/flag-icon-germany"

const meta: Meta = {

    title: 'Flags of the world/minimal/Germany',
    component: "FlagIconGermany",
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;


export const Base: Story = {
    name: "Minimal",
    render:
        () =>
            html`<flag-icon class="flag-icon germany"></flag-icon-germany>`
};

export const Custom: Story = {
    name: "Custom colors",
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
    },
    args: {
        width: 200,
        primum: "#be8c8c",
        secundo: "#ff0000",
        tertius: "#ffcc00",
    },
    render:
        ({ width, primum, secundo, tertius }) =>
            html`<flag-icon width="${width}" colorPrimum="${primum}" colorSecundo="${secundo}" colorTertius="${tertius}"  class="flag-icon germany"></flag-icon-germany>`
};