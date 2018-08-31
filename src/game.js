import axios from 'axios'

exports.handler = async function(event, context, callback) {
  const webhookBody = JSON.parse(event.body)

  const data = {
    replyToken: webhookBody.events[0].replyToken,
    messages: [
      {
        type: 'text',
        text: 'Hello Netlify Bot',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                label: 'Hello',
                text: '[1] Hello'
              }
            }
          ]
        }
      }
    ]
  }

  const res = await axios.post('https://api.line.me/v2/bot/message/reply', data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CHANNEL_TOKEN}`
    }
  })

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(event)
  })
}
