import axios from 'axios'
import messageData from './gameMessages'

exports.handler = async function(event, context, callback) {
  const body = JSON.parse(event.body)
  const targetEvent = body.events[0]
  console.log(JSON.stringify(targetEvent, null , 4))

  // messageイベントでなければ処理を中断
  if (targetEvent.type !== "message") {
    callback(null, {})
  }

  // 次のメッセージを決定するために、"スタート" or "1" などの文字列が入る
  // マッチしなければ処理は中断
  const matchResult = targetEvent.message.text.match(/[\d+]|スタート/)
  if (!matchResult) {
    callback(null, {})
  }

  const messageKey = matchResult[0]
  const data = {
    replyToken: targetEvent.replyToken,
    messages: [messageData[messageKey]]
  }

  await axios.post('https://api.line.me/v2/bot/message/reply', data, {
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
