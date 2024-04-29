import { WebSocketServer } from 'ws';
import cron from 'node-cron'

const wss = new WebSocketServer({ port: 3000 });

if(wss) {
    console.log("connection created")
}

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data)
  })

cron.schedule('*/4 * * * * *',() => {
    const date = new Date();
    ws.send('something' + date);
})

})

wss.on('close', function close() {
  console.log('socket disconnected')
})