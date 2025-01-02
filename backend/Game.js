import { Chess } from 'chess.js';
import { ASSIGN_COLOR, GAME_OVER } from './messages.js';
import GameManager from './GameManager.js';

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;

        this.chess = new Chess();
        this.startTime = new Date();

        this.gameOutcome;

        this.player1.send(JSON.stringify({ type: ASSIGN_COLOR, payload: { color: "w"} }));
        this.player2.send(JSON.stringify({ type: ASSIGN_COLOR, payload: { color: "b"} }));
    }

    endGame(outcome) {
        this.gameOutcome = outcome;

        if (this.player1 && this.player1.readyState === this.player1.OPEN) this.player1.send(JSON.stringify({type: GAME_OVER}));
        if (this.player2 && this.player2.readyState === this.player2.OPEN) this.player2.send(JSON.stringify({type: GAME_OVER    }));

        GameManager.removeGame(this);
    }

    handleGameOver() {
        if (this.chess.isGameOver()) {
            if (this.chess.isCheckmate()) {
                const winner = this.chess.turn() === 'w' ? 'b' : 'w';
                this.endGame(`checkmate-${winner}`);
            } else if (this.chess.isDraw()) {
                if (this.chess.isStalemate()) this.endGame('stalemate');
                else if (this.chess.isThreefoldRepetition()) this.endGame('threefoldRepetition');
                else if (this.chess.isInsufficientMaterial()) this.endGame('insufficientMaterial');
                else this.endGame('fiftyMoveRule');
            }
        }
    }

    getOtherPlayer(ws) {
        return ws === this.player1 ? this.player2 : this.player1;
    }

    makeMove(ws, message) {
        if ((this.chess.turn() === 'w' && ws === this.player1) || (this.chess.turn() === 'b' && ws === this.player2)) {
            try {
                this.chess.move(message.payload);
                const other = this.getOtherPlayer(ws);
                if (other && other.readyState === ws.OPEN) {
                    other.send(JSON.stringify(message));
                }
                this.handleGameOver();
            } catch (e) {
                console.error(e);
            }
        }
    }
}

export default Game;