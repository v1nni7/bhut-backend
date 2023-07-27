# BHUT - BackEnd

## 🚀 Tecnologias

<details>
  O ExpressJs é um framework web rápido e minimalista para o Node.js. Ele é amplamente utilizado na construção de aplicativos web e fornece uma abordagem simplificada para lidar com rotas, middleware e solicitações HTTP. O ExpressJs foi escolhido para este projeto devido à sua simplicidade, desempenho e grande quantidade de recursos disponíveis.
  <summary>ExpressJs</summary>
</details>

<details>
  Joi é uma biblioteca de validação de dados para JavaScript. Ela permite definir esquemas de validação detalhados para validar e converter dados recebidos na API. O Joi facilita a validação dos dados de entrada e garante que os dados estejam no formato correto antes de serem processados pelo backend.
  <summary>Joi</summary>
</details>

<details>
O MongoDB é um sistema de gerenciamento de banco de dados NoSQL de código aberto conhecido por sua flexibilidade, escalabilidade e facilidade de uso. Diferente dos bancos de dados relacionais, o MongoDB armazena os dados em documentos estilo JSON, permitindo que os desenvolvedores modelagem dados de maneira mais flexível.
<summary>MongoDB</summary>
</details>

<details>
O RabbitMQ é um software de mensageria de código aberto amplamente utilizado para troca de mensagens assíncronas entre aplicativos e sistemas distribuídos. Ele implementa o protocolo Advanced Message Queuing Protocol (AMQP), que é projetado para ser eficiente, confiável e interoperável.
<summary>RabbitMQ</summary>
</details>

<details>
O TypeScript é uma linguagem de programação desenvolvida pela Microsoft que adiciona tipagem estática opcional ao JavaScript. Com a tipagem estática, o TypeScript traz benefícios como detecção de erros em tempo de compilação e melhor autocompletar, além de integração com ferramentas e IDEs que melhoram o desenvolvimento do projeto.

<summary>TypeScript</summary>
</details>

# ⚙ Executando o projeto sem Docker

1. Clone o repositório para o seu ambiente de desenvolvimento.

```bash
git clone https://github.com/v1nni7/bhut-backend.git
```

2. Navegue até o diretório clonado do projeto
```
cd bhut-backend

# Caso tenha mudado o nome do diretório
cd nome-do-diretorio
```

3. Instale todas as depências

```bash
npm i 
```

4. Crie e configure o arquivo `.env`, utilizando as variáveis de ambiente definidas no arquivo `.env.example`.

5. Execute o servidor

```
npm run dev
```

Após executar essas etapas, o projeto será iniciado e estará disponível localmente no endereço fornecido no **terminal** pelo servidor de desenvolvimento. Certifique-se de que todas as etapas foram concluídas com êxito antes de começar a usar a aplicação.

# ⚙ Executando o projeto com o Docker

1. Clone o repositório para o seu ambiente de desenvolvimento.

```bash
git clone https://github.com/v1nni7/bhut-backend.git
```

2. Navegue até o diretório clonado do projeto
```
cd bhut-backend

# Caso tenha mudado o nome do diretório
cd nome-do-diretorio
```

3. Primeiramente verifique se o docker está instalado em seu computador
```bash
docker -v 

ou

docker run hello-world
```

4. Crie e configure o arquivo `.env`, utilizando as seguintes variáveis de ambiente
```env
PORT="Coloque o número da porta desejada" (Opcional)
WEBHOOK_URL="Coloque a URL do Webhook criado"
```

5. Instale todas as depências

```bash
npm i 
```

6. Caso tenha alterado o número da porta altere o `ports` no arquivo `docker-compose.yml`
```docker-compose
  node_app:
    ports: 
      - N_Porta:N_Porta

// OBS: O número da porta precisa ser o mesmo da ENV
```

7. Execute o comando para subir os containers
```bash
docker-compose up --build
```


Feito com ❤️ por **Vinicius Cezar** 👋🏽 [Entre em contato!](https://www.linkedin.com/in/vinicius-silveira-cezar/) 




