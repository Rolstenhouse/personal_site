source "https://rubygems.org"

ruby "~> 3.0"

# Jekyll and plugins
gem "jekyll", "~> 4.2.0"
gem "jekyll-feed", "~> 0.16.0"
gem "jekyll-seo-tag", "~> 2.7.1"
gem "jekyll-sitemap", "~> 1.4.0"

# If you want to use GitHub Pages, uncomment the line below
# gem "github-pages", group: :jekyll_plugins

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
