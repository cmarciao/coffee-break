import styled from "styled-components/native";

import { Text } from "@components/text";

export const Label = styled(Text)`
    margin-bottom: 8px;
`;

type InputContentProps = {
    focusable?: boolean;
    hasError?: boolean;
}

export const InputContent = styled.View<InputContentProps>`
    position: relative;
    border: 1px solid ${({ focusable, hasError }) => hasError ? '#D73035' : focusable ? '#666' : '#ccc'};
    border-radius: 6px;
    padding: 16px;
`;

export const InputForm = styled.TextInput`
    color: #FFF;
`;

export const InputIcon = styled.Pressable`
    position: absolute;
    right: 10px;
    top: 18px;
`;

export const ErrorContent = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
`;