////Code that will be placed inside of your app
const socket = io('http://localhost:3001')

socket.on('chat-message', data => {
  console.log(data);
})