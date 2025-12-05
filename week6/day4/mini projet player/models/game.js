import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({

    players:{
        type: Array,},
    turn: {
    type: Number,default: 0
    },
    board:{
        type: Array,
    },
    positions: {
        player1: { x: Number, y: Number },
        player2: { x: Number, y: Number },
    },

    bases: {
        player1: { x: Number, y: Number },
        player2: { x: Number, y: Number },
    },

    winner: {
        type: String,
        default: null
    }
},
    {
        timestamps: true,
    });

export default mongoose.model("Game", gameSchema);