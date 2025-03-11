import { View } from "react-native";
import { Text } from "@/components/text";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { LogoIcon } from "@/components/icons/logo-icon";
import { UploadIcon } from "@/components/icons/upload-icon";
import { Container, Description, DragAndDrop, Form, Header } from "./styles";

export function UploadImage() {
    return (
        <Container>
            <Header>
                <LogoIcon />
                <Text size={24} weight='600' >
                    coffee
                    <Text
                        size={24}
                        weight='600'
                        color='#D6665f'
                    >
                        break
                    </Text>
                </Text>
            </Header>

            <Description>
                <Text
                    textAlign='center'
                    weight='500'
                    size={16}
                >
                    Descubra nosso inovador classificador de doenças de café!
                </Text>
                <Text textAlign='center'>
                    Detecte e controle doenças em suas plantas de café com nosso inovador classificador baseado em aprendizado de máquina.
                    Aumente a produtividade e mantenha suas plantas saudáveis. Experimente agora mesmo!
                </Text>
            </Description>

            <Form>
                <Input
                    label="Identificador da folha"
                    placeholder="Ex. 0122041"
                    placeholderTextColor='#AAA'
                />

                <View>
                    <Text>Foto da folha</Text>
                    <DragAndDrop>
                        <UploadIcon />
                        <Text weight='600'>Selecione uma imagem para fazer download</Text>
                    </DragAndDrop>
                </View>

                <Button>Enviar</Button>
            </Form>
        </Container>
    );
}