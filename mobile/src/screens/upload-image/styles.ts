import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 16px;
`;

export const Header = styled.View`
    align-items: center;
    gap: 16px;
`;

export const Description = styled.View`
    gap: 16px;
    margin-top: 24px;
`;

export const Form = styled.View`
    width: 100%;
    margin-top: 20px;
    gap: 16px;
`;

export const DragAndDrop = styled.TouchableOpacity`
    width: 100%;
    height: 280px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border-radius: 6px;
    border: 2px dashed #ccc;
    margin-top: 6px;
`;