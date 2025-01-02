import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: process.env.PORT || 8080 });
import GameManager from './GameManager.js';

let numberOfConnections = 0;

wss.on('connection', (ws) => {
    numberOfConnections += 1;
    GameManager.addPlayer(ws);
    ws.on('close', () => {
        GameManager.removePlayer(ws)
        numberOfConnections -= 1;
        console.log("Disconnected");
        console.log(numberOfConnections);
    });
    console.log(numberOfConnections);
});