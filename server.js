require('dotenv').config()
const io = require('socket.io')(process.env.CHAT_SERVER)

io.on('connection', socket => {
  socket.emit('chat-message', 'Hello World')
})