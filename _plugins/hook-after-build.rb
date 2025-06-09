Jekyll::Hooks.register :site, :after_build do |site|
  # Run when in production environment, explicitly requested, or when configured in _config.yml
  if ENV['JEKYLL_ENV'] == 'production' || ENV['GENERATE_OG'] == 'true' || site.config['generate_og_images'] == true
    puts "Starting OG image generation..."
    
    # Create og-images directory if it doesn't exist
    og_dir = File.join(site.dest, 'assets', 'og-images')
    FileUtils.mkdir_p(og_dir) unless File.directory?(og_dir)
    
    # Start a local server to serve the built site
    server_pid = spawn("bundle exec jekyll serve --detach")
    
    # Give the server some time to start
    sleep 5
    
    # Run the OG image generator script
    system("node scripts/generate-og-images.js")
    
    # Kill the server
    Process.kill("TERM", server_pid) rescue nil
    
    puts "OG image generation complete!"
  end
end
