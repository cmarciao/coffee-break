import { ReactNode } from "react";
import { PressableProps } from "react-native";
import { Text } from "../text";

import { Container } from "./styles";

type ButtonProps = {
    secondary?: boolean;
    children: ReactNode;
} & PressableProps;

export function Button({ secondary = false, children, ...props }: ButtonProps) {
    return (
        <Container {...props} secondary={secondary}>
            <Text color={props.disabled ? '#9CA3AF' : '#FFF'} weight='600'>
                {children}
            </Text>
        </Container>
    )
}