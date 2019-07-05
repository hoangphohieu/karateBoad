import io from 'socket.io-client';

const connectSocket = io('localhost:3001');

function Socket(state = connectSocket, action) {
    return state;}
export default Socket;
