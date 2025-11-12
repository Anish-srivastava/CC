#!/bin/sh

# Static site build script for Render.com
echo "Building static HTML project..."

# Create dist directory
mkdir -p dist

# Copy all necessary files to dist
cp *.html dist/ 2>/dev/null || true
cp *.js dist/ 2>/dev/null || true
cp *.css dist/ 2>/dev/null || true

# Ensure index.html exists
if [ ! -f "dist/index.html" ]; then
    if [ -f "Shine Page.html" ]; then
        cp "Shine Page.html" "dist/index.html"
    fi
fi

echo "Build completed successfully!"
echo "Files in dist directory:"
ls -la dist/

exit 0