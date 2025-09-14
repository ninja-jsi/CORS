// app.js
const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API endpoint to test URL with Origin + Method
app.post("/test", async (req, res) => {
  const { url, method = "GET", origin } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  try {
    // Build fetch headers
    const headers = {};
    if (origin) headers["Origin"] = origin;
    headers["User-Agent"] = "Node.js HTTP Client";

    const response = await fetch(url, {
      method,
      headers
    });

    // Collect headers into an object
    const headersObj = {};
    response.headers.forEach((value, key) => {
      headersObj[key] = value;
    });

    // Read raw text body
    const bodyText = await response.text();

    // Respond with status, headers, and body text
    res.json({
      status: response.status,
      statusText: response.statusText,
      headers: headersObj,
      body: bodyText,
      contentType: response.headers.get("content-type") || ""
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
