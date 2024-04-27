
import io from 'socket.io-client'
import { connection } from './utils'

const socket = io(connection.live, {
    reconnection: true, // Enable reconnection
    reconnectionAttempts: 100, // Number of reconnection attempts
    reconnectionDelay: 100,
}) // Replace with your server URL



export default socket