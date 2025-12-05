import express from "express";
import Game from "../models/game.js";

const router = express.Router();


router.post("/start", async (req, res) => {
    try {
        const { player1, player2 } = req.body;

        const gridSize = 10;

        const game = new Game({
            players: [player1, player2],
            board: Array.from({ length: gridSize }, () => Array(gridSize).fill(0)),
            positions: {
                player1: { x: 0, y: 0 },
                player2: { x: 9, y: 9 }
            },
            bases: {
                player1: { x: 0, y: 0 },
                player2: { x: 9, y: 9 }
            }
        });

        await game.save();
        res.json(game);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post("/move", async (req, res) => {
    try {
        const { gameId, player, direction } = req.body;

        const game = await Game.findById(gameId);
        if (!game) return res.status(404).json({ msg: "Game not found" });

        const currentPlayer = game.players[game.turn];
        if (currentPlayer !== player)
            return res.status(400).json({ msg: "Not your turn" });

        let pos = game.positions[player];
        let { x, y } = pos;

        if (direction === "up") y--;
        if (direction === "down") y++;
        if (direction === "left") x--;
        if (direction === "right") x++;

        if (x < 0 || y < 0 || x > 9 || y > 9)
            return res.status(400).json({ msg: "Invalid move" });

        if (game.board[y][x] === 1)
            return res.status(400).json({ msg: "Obstacle detected" });

        game.positions[player] = { x, y };

        const opponent = game.players.find(p => p !== player);
        const opponentBase = game.bases[opponent];

        if (x === opponentBase.x && y === opponentBase.y) {
            game.winner = player;
        }

        game.turn = game.turn === 0 ? 1 : 0;

        await game.save();

        res.json(game);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.get("/state/:id", async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        res.json(game);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
