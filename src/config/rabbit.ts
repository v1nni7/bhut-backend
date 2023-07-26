import { instaceWebhook } from '@/lib'
import amqp, { Channel } from 'amqplib'

export const queueName = 'car_created'

const rabbitURL = process.env.RABBIT_URL || 'amqp://localhost:5672'

async function connectRabbitMQ() {
  try {
    const connection = await amqp.connect(rabbitURL)
    const channel = await connection.createChannel()

    await channel.assertQueue(queueName)

    consumeFromQueue(channel)

    return channel
  } catch (error) {
    console.log(`Error connecting to RabbitMQ: ${error}`)
  }
}

function consumeFromQueue(channel: Channel) {
  channel.consume(queueName, async (message) => {
    if (message !== null) {
      const carData = JSON.parse(message.content.toString())

      await sendWebhook(carData)

      channel.ack(message)
    }
  })
}

async function sendWebhook(carData) {
  const webhookURL = process.env.WEBHOOK_URL || null
  const webhookMessage = `
    **New car created:** 
  - Name: ${carData.title} 
  - Brand: ${carData.brand} 
  - Year: ${carData.age} 
  - Price: ${carData.price}`

  if (!webhookURL) {
    console.log('Webhook URL not configured')

    return
  }

  try {
    await instaceWebhook.post(webhookURL, { content: webhookMessage })

    console.log('Webhook sent successfully')
  } catch (error) {
    console.log(`Error sending webhook: ${error}`)
  }
}

export { connectRabbitMQ, consumeFromQueue }
