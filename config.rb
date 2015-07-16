###
# Configuration
###

set :site_url, "http://www.christopherjanzen.com"
set :site_description, "Winnipeg Based Freelance Web Designer"

Time.zone = "Central Time (US & Canada)"

# Add blogging to Middleman Install
activate :blog do |blog|
	blog.prefix = 'blog'
	blog.sources = 'articles/{year}-{month}-{day}-{title}.html'
	blog.permalink = '{title}'
	blog.default_extension = '.markdown'
	blog.layout = '/blog/blog_layout'
	blog.tag_template = 'tag.html'
	blog.calendar_template = 'calendar.html'
	# Enable pagination
	blog.paginate = true
	blog.per_page = 10
	blog.page_link = 'page/{num}.html'
	blog.custom_collections = {
		category: {
			link: '/categories/{category}.html',
			template: '/category.html'
		}
	}
end

page '/blog/feed.xml', layout: false
page "/sitemap.xml", layout: false
page "/.htaccess", layout: false

# Change Directories
set :js_dir, 'js'
set :css_dir, 'css'
set :images_dir, 'images'

# For custom domains on github pages
page "CNAME", layout: false

###
# Compass
###

# Change Compass configuration
compass_config do |config|
	config.output_style = :compact
end

# Set Markdown Engine and add Syntax Highlighting
require 'redcarpet'
set :markdown_engine, :redcarpet 
set :markdown, :layout_engine => :erb
set :markdown, 
	:fenced_code_blocks => true , 
	:smartypants => true , 
	:autolink => true
#activate :syntax, css_class: 'language'#, line_numbers: true
#See more at: http://oscarfunes.com/2013/04/11/middleman-pt2/#sthash.cY3f6ofl.dpuf

###
# Bower Components
###
after_configuration do
  sprockets.append_path File.join root, 'bower_components'
end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

# Middleman Deploy
activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = 'master'
  deploy.build_before = true
end

# Search_Engine_Sitemap
set :url_root, 'http://www.christopherjanzen.com'
activate :search_engine_sitemap, default_change_frequency: "weekly"

# Pretty URLs
set :relative_links, true
activate :directory_indexes

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Automatically add vendor prefixes to CSS rules in stylesheets served by Middleman
activate :autoprefixer

#Reload the browser automatically whenever files change
configure :development do
	activate :livereload do |livereload|
			livereload.host = Socket.ip_address_list.detect{|intf| intf.ipv4_private?}.ip_address
	end
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  	activate :minify_css

  # Minify Javascript on build
  	require 'uglifier'
  	activate :minify_javascript
  	set :js_compressor, Uglifier.new(:comments => :none)
  	
  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
	activate :relative_assets

  # Minify HTML on build
  #  activate :minify_html

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end
