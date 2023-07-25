import amqp from 'amqplib'
import axios from 'axios'
import { error } from 'console'

export const queueName = 'car_created'
const rabbitURL = process.env.RABBIT_URL || 'amqp://localhost:5672'

async function connectRabbitMQ() {
  try {
    const connection = await amqp.connect(rabbitURL)
    const channel = await connection.createChannel()

    await channel.assertQueue(queueName)

    return channel
  } catch (error) {
    console.log(`Erro ao conectar ao RabbitMQ: ${error}`)
  }
}

async function consumeFromQueue() {
  try {
    const connection = await amqp.connect(rabbitURL)
    const channel = await connection.createChannel()

    await channel.assertQueue(queueName)

    channel.consume(queueName, async (message) => {
      if (message !== null) {
        const carData = JSON.parse(message.content.toString())

        await sendWebhook(carData)

        channel.ack(message)
      }
    })
  } catch (error) {
    console.log(`Erro ao consumir mensagem na fila: ${error}`)
  }
}

async function sendWebhook(carData) {
  const webhookURL = process.env.WEBHOOK_URL || null
  const message = `Novo carro criado: Marca: ${carData.brand} - Nome: ${carData.title} - Ano: ${carData.age} - Preço: ${carData.price}`

  if (!webhookURL) {
    console.log('Webhook URL não configurada')

    return
  }

  try {
    await axios.post(webhookURL, { content: message })
    console.log('Webhook enviado com sucesso')
  } catch (error) {
    console.log(`Erro ao enviar webhook: ${error}`)
  }
}

consumeFromQueue()

export default connectRabbitMQ
