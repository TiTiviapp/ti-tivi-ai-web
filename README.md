# Ti Tivi AI Web

This repository contains a minimal prototype for the Ti Tivi AI learning platform. It includes a simple Node.js server that proxies requests to the OpenAI API and a basic HTML chat interface.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and add your OpenAI API key.
3. Start the server:
   ```bash
   node server.js
   ```
4. Open [http://localhost:3000](http://localhost:3000) to interact with the chat interface.

## Files

- `server.js` – Express server exposing `/api/chat` endpoint and serving static files.
- `public/index.html` – Simple browser chat client.
- `.env.example` – Environment variables sample.

This is a starting point for the broader system described in the project outline.
