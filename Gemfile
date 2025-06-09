source "https://rubygems.org"

# Specify Ruby version compatible with your system (2.6.10)
ruby "~> 3.0.7"

# Use github-pages gem which includes Jekyll and other dependencies
gem "github-pages", group: :jekyll_plugins

# Additional plugins that are compatible with GitHub Pages
gem "jekyll-feed"
gem "jekyll-seo-tag"
gem "jekyll-sitemap"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# For kramdown markdown processor
gem "kramdown", "~> 2.3.1"
gem "kramdown-parser-gfm", "~> 1.1.0"
