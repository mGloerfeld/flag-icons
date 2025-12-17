import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { FlagArgTypes, FlagArgs } from './shared/frence-arg-types';


const meta: Meta = {
    title: 'Flags/France',
    component: 'flag-icon-france',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'French flag component with customizable colors and sizes.',
            },
        },
    },
    argTypes: FlagArgTypes,
    args: FlagArgs
};

export default meta;
type Story = StoryObj;

// Example stories using the shared configuration
export const Default: Story = {
    name: 'Standard French Flag',
    render: ({ responsive, width, height, responsiveHeight, blueColor, whiteColor, redColor }) => {
        const heightStyle = responsive ? responsiveHeight || 'auto' : `${height}px`;
        const widthStyle = responsive ? '100%' : `${width}px`;

        return html`
            <h1>French Flag</h1>
            <flag-icon-france
                ${responsive ? '' : `width="${width}" height="${height}"`}
                ${responsive ? 'class="responsive"' : ''}
                style="
                    ${responsive ? `width: ${widthStyle}; max-width: 400px; height: ${heightStyle};` : ''}
                    --flag-blue: ${blueColor};
                    --flag-white: ${whiteColor};
                    --flag-red: ${redColor};
                "
            ></flag-icon-france>
        `;
    }
};

export const CustomColors: Story = {
    name: 'Custom French Flag Colors',
    args: {
        blueColor: '#0055A4',
        whiteColor: '#F0F0F0',
        redColor: '#EF4135'
    },
    render: ({ responsive, width, height, responsiveHeight, blueColor, whiteColor, redColor }) => html`
        <flag-icon-france
            ${responsive ? '' : `width="${width}" height="${height}"`}
            ${responsive ? 'class="responsive"' : ''}
            style="
                ${responsive ? `width: 100%; max-width: 400px; height: ${responsiveHeight || 'auto'};` : ''}
                --flag-blue: ${blueColor};
                --flag-white: ${whiteColor};
                --flag-red: ${redColor};
            "
        ></flag-icon-france>
    `
};