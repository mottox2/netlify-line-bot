import axios from 'axios'

exports.handler = async function(event, context, callback) {
  const webhookBody = JSON.parse(event.body)
  const targetEvent = webhookBody.events[0]
  console.log(JSON.stringify(targetEvent, null , 4))

  // messageイベントでなければ処理を中断
  if (targetEvent.type !== "message") {
    callback(null, {})
    return
  }

  if (!/スタート/.test(targetEvent.message.text)) {
    callback(null, {})
    return
  }

  const data = {
    replyToken: targetEvent.replyToken,
    messages: [
      {
        type: 'text',
        text: '技術書展の締切りまであと7日、だけど進捗は10%未満。あなたはどうする？',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                label: '限界まで頑張る',
                text: '[1] 限界まで頑張る'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                label: '諦めて寝る',
                text: '[2] 諦めて寝る'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                label: '現実逃避にイカゲーやる',
                text: '[3] 現実逃避'
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
