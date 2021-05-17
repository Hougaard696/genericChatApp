////Code that will be placed inside of your app
const socket = io('http://localhost:3001', {
  withCredentials: true,
  extraHeaders: {
    "chat-app": "react"
  }
})

const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
appendMessage('You joined')

socket.emit('new-user', name)

socket.on('chat-message', data => {
  appendMessage(data)
})

socket.on('user-connected', name => {
  appendMessage(name)
})


messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}