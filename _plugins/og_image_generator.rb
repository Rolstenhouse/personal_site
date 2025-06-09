module Jekyll
  class OgImageGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Get all writing posts
      site.collections['writing'].docs.each do |post|
        # Extract filename without extension
        filename = File.basename(post.path, '.*')
        
        # Create a new page for the OG image
        og_page = Jekyll::Page.new(site, site.source, '_layouts', 'og-image.html')
        og_page.data['layout'] = 'og-image'
        og_page.data['title'] = post.data['title']
        og_page.data['subtitle'] = post.data['subtitle']
        og_page.data['permalink'] = "/og-images/#{filename}/"
        
        # Add the page to the site
        site.pages << og_page
      end
    end
  end
end
