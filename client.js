////Code that will be placed inside of your app
const socket = io('http://localhost:3001', {
  withCredentials: true,
  extraHeaders: {
    "chat-app": "react"
  }
})

const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

socket.on('chat-message', data => {
  console.log(data);
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})