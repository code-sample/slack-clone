export default {
  state: {
    messages: []
  },
  sendMessage (content) {
    this.state.messages.push({content, date: Date.now()})
  }
}