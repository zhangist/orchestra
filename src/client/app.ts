import * as minimist from 'minimist'
// import * as socketServer from 'socket.io'
import * as socketClient from 'socket.io-client'
import * as appConfig from '../appConfig'
import socketRoutes from './socketRoutes'
import Player from './socketRoutes/Player'

import * as path from 'path'
const player = new Player(path.resolve(__dirname, '../../files/test.mp3'))
player.play()

// args
const args = minimist(process.argv.slice(2), {
  string: ['masterHost', 'masterPort', 'clientPort'],
})
// master host and port
const masterAddress = args.masterAddress || appConfig.masterAddress
// client port
const clientPort = args.clientPort || appConfig.clientPort
// console
if (!args.masterAddress) {
  console.log('\x1b[33m%s\x1b[0m\x1b[93m%s\x1b[0m',
    'For temporary master address, use command like this:\r\n',
    '> npm run client -- --masterAddress=[[http://][hostname][:port]] --clientPort=[port]')
  console.log('\x1b[33m%s\x1b[0m\x1b[93m%s\x1b[0m',
    'Or like this:\r\n',
    '> node build/client.js --masterAddress=[[http://][hostname][:port]] --clientPort=[port]\r\n')
}

// main
// const clientServer = socketServer(clientPort)
console.log(new Date().getTime())
const client = socketClient.connect(masterAddress)
// mount events to socket
socketRoutes(client)
// client.on('connect', (data: any) => {
//   console.log('onConnect')
//   console.log(new Date().getTime())
// })
// client.on('connection', (data: any) => socketRoutes.connection(client, data))
// client.on('connection:m-c', (data: any) => {
//   console.log('onConnection:m-c')
//   console.log(new Date().getTime())
//   client.emit('connection:c-m')
// })
// client.on('connect:m-c', (data: any) => {
//   console.log('onConnect:m-c')
//   console.log(new Date().getTime())
//   client.emit('connect:c-m')
// })
// client.on('connection:c-m', (data: any) => {
//   console.log('onConnection:c-m')
//   console.log(new Date().getTime())
// })
// client.on('connect:c-m', (data: any) => {
//   console.log('onConnect:c-m')
//   console.log(new Date().getTime())
// })

console.log('\x1b[33m%s%s%s\x1b[0m',
  `* Client listening on port ${clientPort}\r\n`,
  `* Master address: ${masterAddress}\r\n`,
)
