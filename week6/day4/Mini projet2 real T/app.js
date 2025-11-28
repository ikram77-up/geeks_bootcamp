import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    },
});

app.get("/", (req, res) => {
    res.send("API Express and Socket.io is running");
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Enregistrer le username
    socket.on("register", (username) => {
        socket.username = username;
        console.log(`${username} registered with id ${socket.id}`);
    });

    // Gestion des rooms
    socket.on("JoinRoom", (room) => {
        socket.join(room);
        socket.room = room;
        io.to(room).emit("server message", `${socket.username} has joined the room ${room}`);
    });

    // Recevoir et redistribuer un message
    socket.on("new message", (msg) => {
        console.log(msg);
        if (socket.room) {
            io.to(socket.room).emit("new message", msg);
        } else {
            io.emit("new message", msg);
        }
    });

    // Déconnexion
    socket.on("disconnect", () => {
        console.log(`${socket.username || "User"} disconnected`);
    });
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
