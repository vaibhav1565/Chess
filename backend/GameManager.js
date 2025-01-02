import Game from "./Game.js";
import { MOVE} from "./messages.js";

class GameManager {
    constructor() {
        this.waitingUser = null;
        this.games = [];
    }
    
    removeGame(game) {
        const index = this.games.indexOf(game);
        if (index > -1) this.games.splice(index, 1);
    }

    findGameByPlayer(ws) {
        return this.games.find(game => game.player1 === ws || game.player2 === ws);
    }

    addPlayer(ws) {
        if (!this.waitingUser || this.waitingUser.readyState !== this.waitingUser.OPEN) {
            this.waitingUser = null;
        }
        if (!this.waitingUser) {
            this.waitingUser = ws;
        } else {
            const newGame = new Game(this.waitingUser, ws);
            this.games.push(newGame);
            this.attachMessageHandler(this.waitingUser);
            this.attachMessageHandler(ws);

            this.waitingUser = null;
        }
    }

    removePlayer(ws) {
        const game = this.findGameByPlayer(ws);
        if (game) {
            const other = game.getOtherPlayer(ws);
            if (other && other.readyState === ws.OPEN) {
                other.close();
            }
        }

        if (this.waitingUser === ws) {
            this.waitingUser = null;
        }
    }

    attachMessageHandler(ws) {
        ws.on('message', (data) => {
            const message = JSON.parse(data.toString());
            if (message.type === MOVE && message.payload) {
                const game = this.findGameByPlayer(ws);
                if (game) {
                    game.makeMove(ws, message);
                }
            }
        })    
    }
}

const instance = new GameManager();
export default instance;