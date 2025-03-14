import { forwardRef, useState } from "react";
import { View, TextInputProps, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

import { Text } from '@components/text';
import { ErrorContent, InputContent, InputForm, InputIcon, Label } from "./styles";

type InputRef = TextInput | undefined;
type InputProps = {
    label?: string;
    errorMessage?: string;
} & Omit<TextInputProps, 'onFocus' | 'onBlur'>;

export const Input = forwardRef<InputRef, InputProps>(({ label, errorMessage, ...props }: InputProps, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View>
            {label && <Label>{label}</Label>}

            <InputContent
                focusable={isFocused}
                hasError={errorMessage}
            >
                <InputForm
                    ref={ref}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </InputContent>


            {errorMessage && (
                <ErrorContent>
                    <Feather name="info" color={'#D73035'} size={16} />
                    <Text color="#D73035" >{errorMessage}</Text>
                </ErrorContent>
            )}
        </View>
    )
});