import React, { useState } from "react";
import "../ChessBoard.css";
import { MOVE } from "../../backend/messages";

const pieceIcons = {
    p: "♟", // Pawn
    r: "♜", // Rook
    n: "♞", // Knight
    b: "♝", // Bishop
    q: "♛", // Queen
    k: "♚", // King
};

const ChessBoard = ({ board, side = 'w', socket=undefined, setBoard, chess }) => {
    const [from, setFrom] = useState(null);  // State to track selected piece
    const [to, setTo] = useState(null);

    const displayBoard = side === "w" ? board : [...board].reverse();

    const handleClick = (squareRepresentation) => {
        console.log(squareRepresentation);
        if (!from) {
            setFrom(squareRepresentation);
        }
        else {
            if (chess.turn() === side) {
                const move = chess.move({ from, to: squareRepresentation, promotion:"q" });
                if (move) {
                    setBoard(chess.board());
                    socket.send(JSON.stringify({
                        type: MOVE,
                        payload: {
                            from, to: squareRepresentation, promotion: "q"
                        }
                    }))
                }
            }
            setFrom(null);
        }
    };

    return (
        <div className="chessboard"
        tabIndex="0"
        onBlur={()=> {setFrom(null); setTo(null)}}>
            {displayBoard.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => {
                        const actualCell = row[colIndex];
                        const isDark = (rowIndex + colIndex) % 2 === 1;
                        const piece = actualCell ? pieceIcons[actualCell.type] : "";
                        const color = actualCell ? (actualCell.color === "w" ? "white" : "black") : "";


                        return (
                            <div
                                key={colIndex}
                                className={`cell ${isDark ? "dark" : "light"}` + 
                                (actualCell ? " actualCell" : "") + 
                                ((from && actualCell && cell?.square === from) ? " clicked" : "")
                                }
                                onClick={() => {
                                    handleClick(String.fromCharCode(97 + colIndex) + (side === 'w' ? (8 - rowIndex) : (rowIndex + 1)).toString())
                                    if (actualCell) {
                                        handleClick(cell.square)
                                    }
                                }}
                            >
                                {
                                    colIndex === 0 && <span className="rank">{side === 'w' ? 8 - rowIndex : rowIndex + 1}</span>
                                }
                                {piece && (
                                    <span className={`piece ${color}`}>{piece}</span>
                                )}
                                {
                                    rowIndex === 7 && <span className="file">{String.fromCharCode(97 + colIndex)}</span>
                                }
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default ChessBoard;