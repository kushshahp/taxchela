#!/usr/bin/env node
import { spawn } from 'node:child_process';

// Extract host/port flags passed by Render or local CLIs and translate
// them into the format expected by the `serve` package.
const args = process.argv.slice(2);
let host = '0.0.0.0';
let port = '10000';
const passthrough = [];

for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === '--host' && i + 1 < args.length) {
    host = args[i + 1];
    i += 1;
  } else if (arg === '--port' && i + 1 < args.length) {
    port = args[i + 1];
    i += 1;
  } else {
    passthrough.push(arg);
  }
}

const listenTarget = `tcp://${host}:${port}`;
const serveArgs = ['serve', '.', '--listen', listenTarget, ...passthrough];

const child = spawn('npx', serveArgs, { stdio: 'inherit' });

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exit(code ?? 0);
  }
});
