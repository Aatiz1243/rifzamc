const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

const { authCheck } = require("./utils/authCheck");

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Sync status update from plugin
app.post("/syncStatus", authCheck, (req, res) => {
  const { status, message } = req.body;

  // TODO: Push to real-time dashboard store, logs, etc.
  console.log(`[SYNC] Server status: ${status} - ${message}`);
  return res.status(200).send({ success: true, received: status });
});

// Log player join/quit
app.post("/logEvent", authCheck, (req, res) => {
  const { type, player, timestamp } = req.body;

  // TODO: Store or broadcast event to frontend dashboard
  console.log(`[EVENT] ${type.toUpperCase()} - ${player} at ${timestamp}`);
  return res.status(200).send({ success: true });
});

exports.api = functions.https.onRequest(app);
