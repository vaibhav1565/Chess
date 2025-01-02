import React, { useEffect, useState } from 'react';
import { useSocket } from './hooks/useSocket';
import { Chess } from 'chess.js';
import { MOVE, ASSIGN_COLOR, GAME_OVER } from '../backend/messages';
import ChessBoard from './components/ChessBoard';

const fen = "Q4bnr/5pp1/1kQ5/p4r1P/1P6/7P/3PPP2/RNBQKBNR b KQ - 0 18";
const Game = () => {
  const socket = useSocket();

  const [chess] = useState(new Chess(fen));
  const [board, setBoard] = useState(chess.board());
  const [playerColor, setPlayerColor] = useState(null);
  const [status, setStatus] = useState('Waiting for another player to join...');
  const [gameOutcome, setGameOutcome] = useState(null);


  useEffect(() => {
    const initializeSocket = async () => {
      if (!socket) {
        console.log("Socket not ready, waiting...");
        while (!socket) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
      console.log("Socket is ready.");

      // Example event listener
      socket.onmessage = (event) => {
        console.log("Message received:", event.data);

        const message = JSON.parse(event.data);
        console.log(message);
        switch (message.type) {
          case ASSIGN_COLOR:
            setPlayerColor(message.payload.color);
            setStatus(`You are playing as ${message.payload.color === 'w' ? "White" : "Black"}`);
            break;

          case MOVE:
            console.log("Move received");
            const move = message.payload;

            chess.move(move);
            setBoard(chess.board());
            console.log("Move made");
            break;
          case GAME_OVER:
            console.log("Game over");
            setStatus("The game has ended. Thank you for playing!");
            setGameOutcome("Game Over");
            if (socket) {
              socket.close(); // Close the socket connection
            }
            console.log(chess.fen());
            break;
          default:
            console.error('Unknown message type:', message.type);
            break;
        }
      };
    };

    initializeSocket();

    return () => {
      if (socket) {
        console.log("Cleaning up socket event listeners.");
        socket.onmessage = null;
        socket.close();
      }
    };
  }, [socket]);

  return (
    <div>
      <div>
        <p>{status}</p>
        <p>{playerColor && `${chess.turn() === 'w' ? "White" : "Black"}\'s turn`}
        </p>
      </div>
      <div>
        <ChessBoard socket={socket} board={board} setBoard={setBoard} side={playerColor} chess={chess} />
      </div>
      <div>
        {gameOutcome || " "}
      </div>
    </div>);
};

export default Game;