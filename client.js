////Code that will be placed inside of your app
const socket = io('http://localhost:3001', {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
})

socket.on('chat-message', data => {
  console.log(data);
})