# Break Coffee

## 📦 **Pré-requisitos**
- **Docker** instalado: [Download Docker](https://www.docker.com/get-started)
- **Expo Go** instalado no celular (iOS/Android)

## Descrição do Projeto
Este projeto tem como objetivo desenvolver um aplicativo para analisar imagens de plantas de café e identificar sua saúde. Utilizando **React Native** para o desenvolvimento mobile e técnicas de **processamento de imagem e aprendizado de máquina**, o sistema auxilia produtores rurais no monitoramento e detecção precoce de doenças, contribuindo para a produtividade e sustentabilidade das lavouras.

## Funcionalidades
- Captura e upload de imagens de folhas de café.
- Análise da saúde da planta com base em processamento de imagem.
- Exibição de diagnóstico.

## Tecnologias Utilizadas
- **Web:** React Native
- **API:** Python com Flask.
- **Mobile:** Expo Go

## Telas

<img src='https://github.com/user-attachments/assets/fc112e73-8917-48e4-ab04-5e4e52473746' width='300px' alt='' />
<img src='https://github.com/user-attachments/assets/4491ff9b-e525-4c18-b599-d885a9f892b4' width='300px' alt='' />

---

## 🛠 **Como rodar o projeto no Docker?**

## Como Executar o Projeto
### 1. Clonar o repositório
```bash
https://github.com/cmarciao/coffee-break.git
cd coffee-break
```

### 2 **Construir a imagem e iniciar o contêiner**
Execute o comando abaixo na raiz do projeto:
```sh
docker-compose up --build
```

### 3 **Acessar o Expo Go**
Após iniciar, você verá um QR Code no terminal.
- Escaneie com o app **Expo Go** (Android/iOS)
- Ou acesse `exp://<IP_DE_SUA_MAQUINA>:8081` no aplicativo Expo GO.

### 3 **Acessar o projeto Web**
Após iniciar, acesse `http://localhost:5173` no seu navegador.

### 4 **Parar o contêiner**
Se precisar parar o projeto, use:
```sh
docker-compose down
```

## ⚙ **Configuração de IP via `.env`**
Antes de rodar o contêiner, edite o arquivo **.env** na raiz do projeto mobile e defina o IP local da máquina:
```sh
EXPO_PUBLIC_API_URL=192.0.0.1
```
Isso garante que o Expo consiga se conectar corretamente ao backend ou Metro Bundler.

Se precisar verificar o IP da sua máquina, no terminal execute:
- **Windows (CMD/Powershell):** `ipconfig`
- **Mac/Linux:** `ifconfig` ou `ip a`

---

## 🛠 **Comandos úteis**

| Comando | Descrição |
|---------|-------------|
| `docker-compose up --build` | Constrói e inicia o contêiner |
| `docker-compose down` | Para e remove o contêiner |
| `docker logs expo-app` | Exibe os logs do Expo |
| `docker-compose exec expo sh` | Acessa o terminal do contêiner |

---

## 🎯 **Conclusão**
Agora você tem um ambiente **Expo Go** totalmente configurado e rodando no Docker! 🚀🔥

Se encontrar problemas, confira os logs e verifique a conexão da sua máquina com a rede.

Happy coding! 🎉

---

## 📌 **Considerações Finais**
Este projeto foi inspirado e teve como referência o repositório [coffee-break](https://github.com/laisdib/coffee-break/tree/main) de [Lais Dib](https://github.com/laisdib). Algumas ideias e estruturas foram adaptadas para atender às necessidades específicas deste ambiente Docker com Expo Go. Agradecimentos pela contribuição à comunidade! 😊

