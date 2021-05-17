require('dotenv').config()
const io = require('socket.io')(process.env.CHAT_SERVER, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["chat-app"],
    credentials: true
  }
})

const users = {}

io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })  
   socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', message)
  })
})