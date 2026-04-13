#!/bin/bash

# Build and run the combined container
echo "Building combined backend & database container..."

# Build the Docker image
docker build -t my-portfolio-combined .

# Run the container
docker run -p 3000:3000 -v "$(pwd)/data:/app/data" --name my-portfolio-container my-portfolio-combined
