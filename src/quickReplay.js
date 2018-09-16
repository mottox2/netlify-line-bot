import axios from 'axios'

exports.handler = async function(event, context, callback) {
  const body = JSON.parse(event.body)
  const targetEvent = body.events[0]

  const data = {
    replyToken: targetEvent.replyToken,
    messages: [
      {
        type: 'text',
        text: '今日何食べたい？',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                label: '寿司',
                text: '寿司'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                label: '焼肉',
                text: '焼肉'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                label: 'とんかつ',
                text: 'とんかつ'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                label: 'ラーメン',
                text: 'ラーメン'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                label: '日本酒',
                text: '日本酒'
              }
            }
          ]
        }
      }
    ] 
  }

  await axios.post('https://api.line.me/v2/bot/message/reply', data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CHANNEL_TOKEN}`
    }
  })

  callback(null, {})
}
