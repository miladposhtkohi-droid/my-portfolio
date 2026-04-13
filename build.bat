@echo off

echo Building combined backend & database container...

REM Build the Docker image
docker build -t my-portfolio-combined .

REM Run the container
docker run -p 3000:3000 -v "%cd%/data:/app/data" --name my-portfolio-container my-portfolio-combined
