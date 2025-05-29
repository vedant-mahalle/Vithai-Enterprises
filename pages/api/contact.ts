import type { NextApiRequest, NextApiResponse } from 'next'

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN
const WHATSAPP_NUMBER_ID = process.env.WHATSAPP_NUMBER_ID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, service, message } = req.body

    // Format the message with timestamp
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    const formattedMessage = `
🔔 *New Service Request*
⏰ ${timestamp}
------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
🔧 *Service:* ${service}
💬 *Message:* ${message}
    `.trim()

    // Send message using WhatsApp Business API
    const response = await fetch(
      `https://graph.facebook.com/v17.0/${WHATSAPP_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: '919730665390', // Your admin WhatsApp number
          type: 'text',
          text: {
            body: formattedMessage
          }
        })
      }
    )

    if (!response.ok) {
      throw new Error('Failed to send WhatsApp message')
    }

    // Store in Google Sheets (optional)
    // Add Google Sheets integration here if needed

    res.status(200).json({ message: 'Request submitted successfully' })
  } catch (error) {
    console.error('Error processing request:', error)
    res.status(500).json({ message: 'Failed to process request' })
  }
} 