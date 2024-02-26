const http = require("http");
const express = require("express");
const factureRoutes = require("./routes/factureRoutes")
const clientRoutes = require("./routes/clientRoutes")



//INIT APP
const app = express();
app.use(express.json())





app.use("/api", factureRoutes)
app.use('/api', clientRoutes);
// app.use((request, response) => {response.send("message")})

const server = http.createServer(app);

server.listen(3001)