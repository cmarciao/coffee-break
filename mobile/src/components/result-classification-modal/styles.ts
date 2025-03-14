import styled from "styled-components/native";

export const Overlay = styled.Pressable`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled.View`
    max-width: 320px;
    width: 100%;
    background-color: #3E3E3E;
    border-radius: 6px;
    padding: 12px;
    gap: 12px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.View`
    background-color: #D6665F;
    align-items: center;
    border-radius: 6px;
`;

export const OtherResults = styled.View`
    align-items: center;
    background-color: rgba(255, 255, 255, .1);
    border-radius: 6px;
    padding: 6px 0;
`;

export const ResultItem = styled.View`
    width: 100%;
    align-items: center;
    border-color: rgba(255, 255, 255, .5);
    border-top-width: 1px;
    margin-top: 6px;
    padding-top: 6px;
`;