export default {
  "スタート": {
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
  },
  "1": {
    type: 'text',
    text: '頑張り過ぎず寝るべし'
  },
  "3": {
    type: 'text',
    text: 'スプラ友達募集中'
  }
}