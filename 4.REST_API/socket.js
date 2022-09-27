const { Server } = require("socket.io");

let io 

module.exports = {
    init: httpServer => {
        io = new Server(httpServer, {
            cors: {
              origin: "http://localhost:3000",
            //   credentials: true,
            //   methods: ["GET", "POST"],
            //   extraHeaders: {
            //       "Access-Control-Allow-Origin": "*",
            //       "Access-Control-Allow-Methods": "GET, POST,PUT, PATCH, DELETE",
            //       "Access-Control-Allow-Headers": "Content-Type, Authorization",
            //     },
            }, 
          });
        return io
    },
    getIO: () => {
        if(!io) {
            throw new Error('Socket.io not initialized!')
        }
        return io
    }
}