import styled from "styled-components/native";

type TextProps = {
    size?: number;
    weight?: 400 | 500 | 600;
    opacity?: number;
    color?: string;
    textAlign?: string;
}

export const Text = styled.Text<TextProps>`
    font-size: ${({ size }) => `${size || 14}px`};
    color: ${({ color }) => color || '#fff'};
    font-family: ${({ weight }) => `Poppins-${weight || 400}`};
    opacity: ${({ opacity }) => opacity || 1};
    text-align: ${({ textAlign }) => textAlign || 'left'};
`;