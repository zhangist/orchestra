import * as io from 'socket.io-client'

const getSocket = (socketUrl: string, username: string) => {
    const socket = io(socketUrl, {
        query: 'user=' + username,
        transports: ['websocket'],
    })

    return socket
}

export default getSocket
