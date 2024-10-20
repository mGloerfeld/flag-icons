import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';

import "../../../libs/flag-icons-lit/src/lib/flag-icon"

const meta: Meta = {
    component: 'flag',
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
    render: () => html`<flag-icon country="swiss"></flag-icon>`,
};