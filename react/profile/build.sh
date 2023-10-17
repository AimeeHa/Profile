#!/bin/bash

# Step 1: Run 'npm run build'
echo "Running 'npm run build'..."
npm run build

# Check if the 'dist' directory exists
if [ -d "dist" ]; then
  # Step 2: Copy the contents of 'dist' to Nginx HTML directory
  echo "Copying 'dist' contents to Nginx HTML directory..."
  sudo cp -r dist/* /usr/share/nginx/profile_html

  # Step 3: Restart Nginx to apply changes
  echo "Restarting Nginx..."
  sudo systemctl restart nginx

  echo "Deployment completed successfully!"
else
  echo "Error: 'dist' directory not found. Make sure 'npm run build' succeeded."
fi
