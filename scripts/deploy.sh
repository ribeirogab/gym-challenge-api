#!/bin/bash

# Install project dependencies
npm install

# Install Node.js layer dependencies
npm i --prefix layers/dependencies/nodejs

# Build the project
npm run build

# Deploy
serverless deploy