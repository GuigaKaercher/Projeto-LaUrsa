import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimaryMediumIcon } from './ButtonPrimaryMediumIcon';

// Metadados do componente para o Storybook
const meta = {
  title: 'La Ursa/Buttons/ButtonPrimaryMediumIcon',
  component: ButtonPrimaryMediumIcon,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f3f4f6' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
  tags: ['autodocs'], // Isso gera documentação automática
  argTypes: {
    text: { control: 'text', description: 'Texto do botão' },
    disabled: { control: 'boolean', description: 'Estado desabilitado do botão' },
    isLoading: { control: 'boolean', description: 'Estado de carregamento do botão' },
    showIcon: { control: 'boolean', description: 'Exibir ou ocultar o ícone' },
    iconSrc: { control: 'text', description: 'Caminho para o ícone personalizado' },
    className: { control: 'text', description: 'Classes CSS adicionais' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonPrimaryMediumIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Definição das stories (variações do componente)
export const Default: Story = {
  args: {
    text: 'Button Label',
    disabled: false,
    isLoading: false,
    showIcon: true,
    iconSrc: "../public/icon-right.png",
  },
};

export const WithoutIcon: Story = {
  args: {
    text: 'Button Label',
    disabled: false,
    isLoading: false,
    showIcon: false,
  },
};

export const Loading: Story = {
  args: {
    text: 'Button Label',
    disabled: false,
    isLoading: true,
    showIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Button Label',
    disabled: true,
    isLoading: false,
    showIcon: true,
  },
};

export const CustomIcon: Story = {
  args: {
    text: 'Button Label',
    disabled: false,
    isLoading: false,
    showIcon: true,
    iconSrc: "../public/custom-icon.png",
  },
};
