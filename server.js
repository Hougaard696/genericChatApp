require('dotenv').config()
const io = require('socket.io')(process.env.CHAT_SERVER, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
})

io.on('connection', socket => {
  socket.emit('chat-message', 'Hello World')
})