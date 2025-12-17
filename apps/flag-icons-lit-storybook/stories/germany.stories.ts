import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// Import the German flag component
import '../../../libs/flag-icons-lit/src/lib/germany/index.js';

// Import shared argTypes and args
import { FlagArgTypes,FlagArgs } from './shared/german-arg-types';

const meta: Meta = {
    title: 'Flags/Germany',
    component: 'flag-icon-germany',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'German flag component with customizable colors and sizes.',
            },
        },
    },
    argTypes: FlagArgTypes,
    args: FlagArgs
};

export default meta;
type Story = StoryObj;

// Standard German flag
export const Default: Story = {
    name: 'Standard Flag',
    render: ({
        responsive,
        width,
        height,
        responsiveHeight,
        'color-red': colorRed,
        'color-white': colorWhite,
        'color-blue': colorBlue,
        'color-green': colorGreen,
        'color-yellow': colorYellow,
        'color-black': colorBlack,
        'color-orange': colorOrange,
        'color-brown': colorBrown,
        'color-purple': colorPurple,
        'color-gray': colorGray,
        'color-turquoise': colorTurquoise,
        'color-silver': colorSilver,
        'color-copper': colorCopper,
    }) => {
        const heightStyle = responsive ? responsiveHeight || 'auto' : `${height}px`;
        const widthStyle = responsive ? '100%' : `${width}px`;

        return html`
      <h1>Click or Hover the Flag</h1>
      <flag-icon-germany
        ${responsive ? '' : `width="${width}" height="${height}"`}
        ${responsive ? 'class="responsive"' : ''}
        style="
                    ${responsive
                ? `width: ${widthStyle}; max-width: 400px; height: ${heightStyle};`
                : ''}
                    --flag-color1: ${colorRed};
                    --flag-color2: ${colorWhite};
                    --flag-color3: ${colorBlue};
                    --flag-color4: ${colorGreen};
                    --flag-color5: ${colorYellow};
                    --flag-color6: ${colorBlack};
                    --flag-color7: ${colorOrange};
                    --flag-color8: ${colorBrown};
                    --flag-color9: ${colorPurple};
                    --flag-color10: ${colorGray};
                    --flag-color11: ${colorTurquoise};
                    --flag-color12: ${colorSilver};
                    --flag-color13: ${colorCopper};
                "
      ></flag-icon-germany>
    `;
    },
};

// Small size variant
export const Small: Story = {
    name: 'Small Size',
    args: {
        responsive: false,
        width: 120,
        height: 80,
    },
    render: ({
        responsive,
        width,
        height,
        responsiveHeight,
        'color-red': colorRed,
        'color-white': colorWhite,
        'color-blue': colorBlue,
        'color-green': colorGreen,
        'color-yellow': colorYellow,
        'color-black': colorBlack,
        'color-orange': colorOrange,
        'color-brown': colorBrown,
        'color-purple': colorPurple,
        'color-gray': colorGray,
        'color-turquoise': colorTurquoise,
        'color-silver': colorSilver,
        'color-copper': colorCopper,
    }) => html`
    <flag-icon-germany
      ${responsive ? '' : `width="${width}" height="${height}"`}
      ${responsive ? 'class="responsive"' : ''}
      style="
                ${responsive
            ? `width: 100%; max-width: 120px; height: ${responsiveHeight};`
            : ''}
                --flag-color1: ${colorRed};
                --flag-color2: ${colorWhite};
                --flag-color3: ${colorBlue};
                --flag-color4: ${colorGreen};
                --flag-color5: ${colorYellow};
                --flag-color6: ${colorBlack};
                --flag-color7: ${colorOrange};
                --flag-color8: ${colorBrown};
                --flag-color9: ${colorPurple};
                --flag-color10: ${colorGray};
                --flag-color11: ${colorTurquoise};
                --flag-color12: ${colorSilver};
                --flag-color13: ${colorCopper};
            "
    ></flag-icon-germany>
  `,
};

// Large size variant1
export const Large: Story = {
    name: 'Large Size',
    args: {
        responsive: false,
        width: 600,
        height: 400,
    },
    render: ({
        responsive,
        width,
        height,
        responsiveHeight,
        'color-red': colorRed,
        'color-white': colorWhite,
        'color-blue': colorBlue,
        'color-green': colorGreen,
        'color-yellow': colorYellow,
        'color-black': colorBlack,
        'color-orange': colorOrange,
        'color-brown': colorBrown,
        'color-purple': colorPurple,
        'color-gray': colorGray,
        'color-turquoise': colorTurquoise,
        'color-silver': colorSilver,
        'color-copper': colorCopper,
    }) => html`
    <flag-icon-germany
      ${responsive ? '' : `width="${width}" height="${height}"`}
      ${responsive ? 'class="responsive"' : ''}
      style="
                ${responsive
            ? `width: 100%; max-width: 600px; height: ${responsiveHeight};`
            : ''}
                --flag-color1: ${colorRed};
                --flag-color2: ${colorWhite};
                --flag-color3: ${colorBlue};
                --flag-color4: ${colorGreen};
                --flag-color5: ${colorYellow};
                --flag-color6: ${colorBlack};
                --flag-color7: ${colorOrange};
                --flag-color8: ${colorBrown};
                --flag-color9: ${colorPurple};
                --flag-color10: ${colorGray};
                --flag-color11: ${colorTurquoise};
                --flag-color12: ${colorSilver};
                --flag-color13: ${colorCopper};
            "
    ></flag-icon-germany>
  `,
};

// Interactive variant with custom styling
export const Interactive: Story = {
    name: 'Interactive',
    render: ({
        responsive,
        width,
        height,
        responsiveHeight,
        'color-red': colorRed,
        'color-white': colorWhite,
        'color-blue': colorBlue,
        'color-green': colorGreen,
        'color-yellow': colorYellow,
        'color-black': colorBlack,
        'color-orange': colorOrange,
        'color-brown': colorBrown,
        'color-purple': colorPurple,
        'color-gray': colorGray,
        'color-turquoise': colorTurquoise,
        'color-silver': colorSilver,
        'color-copper': colorCopper,
    }) => html`
    <flag-icon-germany
      ${responsive ? '' : `width="${width}" height="${height}"`}
      class="interactive ${responsive ? 'responsive' : ''}"
      style="
                cursor: pointer; 
                transition: transform 0.2s;
                ${responsive
            ? `width: 100%; max-width: 300px; height: ${responsiveHeight};`
            : ''}
                --flag-color1: ${colorRed};
                --flag-color2: ${colorWhite};
                --flag-color3: ${colorBlue};
                --flag-color4: ${colorGreen};
                --flag-color5: ${colorYellow};
                --flag-color6: ${colorBlack};
                --flag-color7: ${colorOrange};
                --flag-color8: ${colorBrown};
                --flag-color9: ${colorPurple};
                --flag-color10: ${colorGray};
                --flag-color11: ${colorTurquoise};
                --flag-color12: ${colorSilver};
                --flag-color13: ${colorCopper};
            "
      @click=${() => console.log('Flag clicked!')}
      @mouseover=${(e: Event) => {
            (e.target as HTMLElement).style.transform = 'scale(1.05)';
        }}
      @mouseout=${(e: Event) => {
            (e.target as HTMLElement).style.transform = 'scale(1)';
        }}
    ></flag-icon-germany>
  `,
};

// Custom colors with controls
export const CustomColors: Story = {
    name: 'Custom Colors',
    args: {
        responsive: false,
        width: 400,
        height: 267,
        'color-red': '#1a1a1a',
        'color-white': '#cc0000',
        'color-blue': '#ffaa00',
    },
    render: ({
        responsive,
        width,
        height,
        responsiveHeight,
        'color-red': colorRed,
        'color-white': colorWhite,
        'color-blue': colorBlue,
        'color-green': colorGreen,
        'color-yellow': colorYellow,
        'color-black': colorBlack,
        'color-orange': colorOrange,
        'color-brown': colorBrown,
        'color-purple': colorPurple,
        'color-gray': colorGray,
        'color-turquoise': colorTurquoise,
        'color-silver': colorSilver,
        'color-copper': colorCopper,
    }) => html`
    <flag-icon-germany
      ${responsive ? '' : `width="${width}" height="${height}"`}
      ${responsive ? 'class="responsive"' : ''}
      style="
                ${responsive
            ? `width: 100%; max-width: 400px; height: ${responsiveHeight};`
            : ''}
                --flag-color1: ${colorRed};
                --flag-color2: ${colorWhite};
                --flag-color3: ${colorBlue};
                --flag-color4: ${colorGreen};
                --flag-color5: ${colorYellow};
                --flag-color6: ${colorBlack};
                --flag-color7: ${colorOrange};
                --flag-color8: ${colorBrown};
                --flag-color9: ${colorPurple};
                --flag-color10: ${colorGray};
                --flag-color11: ${colorTurquoise};
                --flag-color12: ${colorSilver};
                --flag-color13: ${colorCopper};
            "
    ></flag-icon-germany>
  `,
};

// Responsive showcase
export const Responsive: Story = {
    name: 'Responsive Showcase',
    args: {
        responsive: true,
        responsiveHeight: '100%',
    },
    render: ({
        responsive,
        responsiveHeight,
        'color-red': colorRed,
        'color-white': colorWhite,
        'color-blue': colorBlue,
        'color-green': colorGreen,
        'color-yellow': colorYellow,
        'color-black': colorBlack,
        'color-orange': colorOrange,
        'color-brown': colorBrown,
        'color-purple': colorPurple,
        'color-gray': colorGray,
        'color-turquoise': colorTurquoise,
        'color-silver': colorSilver,
        'color-copper': colorCopper,
    }) => {
        const heightValue = responsiveHeight || 'auto';

        return html`
      <div style="padding: 20px;">
        <h3>Responsive Flag Demo</h3>
        <p>Current height mode: <strong>${heightValue}</strong></p>
        <div
          style="border: 1px dashed #ccc; padding: 20px; resize: both; overflow: hidden; width: 80%; height: 300px; min-width: 200px; min-height: 150px;"
        >
          <flag-icon-germany
            class="responsive"
            style="
                            width: 100%;
                            height: ${heightValue};
                            --flag-color1: ${colorRed};
                            --flag-color2: ${colorWhite};
                            --flag-color3: ${colorBlue};
                            --flag-color4: ${colorGreen};
                            --flag-color5: ${colorYellow};
                            --flag-color6: ${colorBlack};
                            --flag-color7: ${colorOrange};
                            --flag-color8: ${colorBrown};
                            --flag-color9: ${colorPurple};
                            --flag-color10: ${colorGray};
                            --flag-color11: ${colorTurquoise};
                            --flag-color12: ${colorSilver};
                            --flag-color13: ${colorCopper};
                        "
          ></flag-icon-germany>
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 10px;">
          💡 Try different height modes in controls: auto, 100%, 50vh, 100vh
        </p>
      </div>
    `;
    },
};

// Multiple flags showcase
export const Showcase: Story = {
    name: 'Multiple Flags Showcase',
    render: () => html`
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; padding: 20px;"
    >
      <div style="text-align: center;">
        <h4>Standard</h4>
        <flag-icon-germany width="200" height="133"></flag-icon-germany>
      </div>
      <div style="text-align: center;">
        <h4>Vintage Style</h4>
        <flag-icon-germany
          width="200"
          height="133"
          style="
                        --flag-black: #2c2c2c;
                        --flag-red: #8b0000;
                        --flag-gold: #daa520;
                        filter: sepia(20%);
                    "
        ></flag-icon-germany>
      </div>
      <div style="text-align: center;">
        <h4>High Contrast</h4>
        <flag-icon-germany
          width="200"
          height="133"
          style="
                        --flag-black: #000000;
                        --flag-red: #ff0000;
                        --flag-gold: #ffff00;
                        filter: contrast(120%);
                    "
        ></flag-icon-germany>
      </div>
    </div>
  `,
};

// 13-Color Demo
export const EightColors: Story = {
    name: '13-Color Demo',
    args: {
        responsive: false,
        width: 400,
        height: 300,
        'color-red': '#FF0000',
        'color-white': '#FFFFFF',
        'color-blue': '#0000FF',
        'color-green': '#00FF00',
        'color-yellow': '#FFFF00',
        'color-black': '#000000',
        'color-orange': '#FFA500',
        'color-brown': '#8B4513',
        'color-purple': '#800080',
        'color-gray': '#808080',
        'color-turquoise': '#40E0D0',
        'color-silver': '#C0C0C0',
        'color-copper': '#B87333',
    },
    render: ({
        responsive,
        width,
        height,
        responsiveHeight,
        'color-red': colorRed,
        'color-white': colorWhite,
        'color-blue': colorBlue,
        'color-green': colorGreen,
        'color-yellow': colorYellow,
        'color-black': colorBlack,
        'color-orange': colorOrange,
        'color-brown': colorBrown,
        'color-purple': colorPurple,
        'color-gray': colorGray,
        'color-turquoise': colorTurquoise,
        'color-silver': colorSilver,
        'color-copper': colorCopper,
    }) => html`
        <div style="padding: 20px;">
            <h3>13-Color Flag Demo</h3>
            <p>This demo shows all 13 customizable colors:</p>
            <flag-icon-germany
                ${responsive ? '' : `width="${width}" height="${height}"`}
                ${responsive ? 'class="responsive"' : ''}
                style="
                    ${responsive ? `width: 100%; max-width: 400px; height: ${responsiveHeight};` : ''}
                    --flag-color1: ${colorRed};
                    --flag-color2: ${colorWhite};
                    --flag-color3: ${colorBlue};
                    --flag-color4: ${colorGreen};
                    --flag-color5: ${colorYellow};
                    --flag-color6: ${colorBlack};
                    --flag-color7: ${colorOrange};
                    --flag-color8: ${colorBrown};
                    --flag-color9: ${colorPurple};
                    --flag-color10: ${colorGray};
                    --flag-color11: ${colorTurquoise};
                    --flag-color12: ${colorSilver};
                    --flag-color13: ${colorCopper};
                "
            ></flag-icon-germany>
            <div style="margin-top: 15px; font-size: 14px;">
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px;">
                    <div><strong>Red:</strong> <span style="background: ${colorRed}; padding: 2px 8px; color: white; border-radius: 3px;">${colorRed}</span></div>
                    <div><strong>White:</strong> <span style="background: ${colorWhite}; padding: 2px 8px; color: black; border-radius: 3px; border: 1px solid #ccc;">${colorWhite}</span></div>
                    <div><strong>Blue:</strong> <span style="background: ${colorBlue}; padding: 2px 8px; color: white; border-radius: 3px;">${colorBlue}</span></div>
                    <div><strong>Green:</strong> <span style="background: ${colorGreen}; padding: 2px 8px; color: white; border-radius: 3px;">${colorGreen}</span></div>
                    <div><strong>Yellow:</strong> <span style="background: ${colorYellow}; padding: 2px 8px; color: black; border-radius: 3px;">${colorYellow}</span></div>
                    <div><strong>Black:</strong> <span style="background: ${colorBlack}; padding: 2px 8px; color: white; border-radius: 3px;">${colorBlack}</span></div>
                    <div><strong>Orange:</strong> <span style="background: ${colorOrange}; padding: 2px 8px; color: white; border-radius: 3px;">${colorOrange}</span></div>
                    <div><strong>Brown:</strong> <span style="background: ${colorBrown}; padding: 2px 8px; color: white; border-radius: 3px;">${colorBrown}</span></div>
                    <div><strong>Purple:</strong> <span style="background: ${colorPurple}; padding: 2px 8px; color: white; border-radius: 3px;">${colorPurple}</span></div>
                    <div><strong>Gray:</strong> <span style="background: ${colorGray}; padding: 2px 8px; color: white; border-radius: 3px;">${colorGray}</span></div>
                    <div><strong>Turquoise:</strong> <span style="background: ${colorTurquoise}; padding: 2px 8px; color: white; border-radius: 3px;">${colorTurquoise}</span></div>
                    <div><strong>Silver:</strong> <span style="background: ${colorSilver}; padding: 2px 8px; color: black; border-radius: 3px;">${colorSilver}</span></div>
                    <div><strong>Copper:</strong> <span style="background: ${colorCopper}; padding: 2px 8px; color: white; border-radius: 3px;">${colorCopper}</span></div>
                </div>
            </div>
        </div>
    `,
};
