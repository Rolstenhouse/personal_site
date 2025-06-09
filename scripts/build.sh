#!/bin/bash

# Build the Jekyll site
echo "Building Jekyll site..."
bundle exec jekyll build

# Start Jekyll server in background
echo "Starting Jekyll server..."
bundle exec jekyll serve --detach

# Wait for Jekyll server to start
echo "Waiting for Jekyll server to start..."
sleep 5

# Generate OG images
echo "Generating OG images..."
npm run generate-og

# Kill Jekyll server
echo "Shutting down Jekyll server..."
pkill -f "jekyll serve"

echo "Build complete! OG images have been generated."
