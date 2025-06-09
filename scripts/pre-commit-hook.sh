#!/bin/bash

# This script can be used as a pre-commit hook to automatically generate OG images
# before committing changes to the repository

# Check if any markdown files in _writing directory have changed
if git diff --cached --name-only | grep -q "_writing/.*\.md$"; then
  echo "📸 Detected changes in blog posts, generating OG images..."
  
  # Set environment variable to force OG image generation
  export GENERATE_OG=true
  
  # Build the site with OG image generation
  bundle exec jekyll build
  
  # Add generated OG images to the commit
  git add assets/og-images/
  
  echo "✅ OG images generated and added to commit!"
fi

exit 0
