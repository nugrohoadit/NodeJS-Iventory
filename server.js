var http = require('http');
const app = require("./config/app")
const port = 3001
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server running on localhost: ${port}`)
})