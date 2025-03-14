import { Image, Modal, TouchableOpacity } from "react-native";
import { Text } from "../text";
import { Content, Header, OtherResults, Overlay, ResultItem, Title } from "./styles";

type ResultClassificationModalProps = {
    isOpen: boolean;
    imagePreviewUri: string;
    classifications: [string, number][];
    onClose: () => void;
}

export function ResultClassificationModal({
    isOpen,
    imagePreviewUri,
    classifications,
    onClose
}: ResultClassificationModalProps) {
    return (
        <Modal
            visible={isOpen}
            onRequestClose={onClose}

            transparent={true}
            animationType="fade"
        >
            <Overlay onPress={onClose}>
                <Content>
                    <Header>
                        <Text weight='600' size={18}>Resultado</Text>
                        <TouchableOpacity onPress={onClose} hitSlop={8}>
                            <Text weight='600' size={18}>X</Text>
                        </TouchableOpacity>
                    </Header>

                    <Image source={{ uri: imagePreviewUri }} style={{ width: '100%', height: 240, borderRadius: 6 }} />

                    <Title>
                        <Text
                            size={26}
                            weight='600'
                            color='#000'
                        >
                            {`${classifications[0][1]}%  ${classifications[0][0]}`}
                        </Text>
                    </Title>

                    <OtherResults>
                        <Text weight='600' >Outros resultados</Text>
                        {classifications.slice(1).map((classification) => (
                            <ResultItem key={classification[0]}>
                                <Text>{` ${classification[1]}% ${classification[0]}`}</Text>
                            </ResultItem>
                        ))}
                    </OtherResults>
                </Content>
            </Overlay>
        </Modal>
    )
}