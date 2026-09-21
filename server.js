const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    server: "FF2023 Test Server",
    status: "online"
  });
});

app.get("/ping", (req, res) => {
  res.json({
    status: "ok"
  });
});
app.get("/api/server-info", (req, res) => {
  res.json({
    name: "FF2023 Test Server",
    version: "2023",
    status: "online"
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    server: "FF2023 Test Server",
    connected: true,
    message: "Client reached the test server"
  });
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
