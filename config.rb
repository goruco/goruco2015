######################################################################
# General settings.
######################################################################

# Meta.
set :meta, {
  title: 'GORUCO',
  url: 'http://goruco.com',
}

# Syntax highlighting.
activate :syntax
set :syntax_theme, Rouge::Themes::Base16

# Change to your Google Analytics key (e.g. UA-XXXXXXXX-Y).
# To disable GA, leave unset or set to nil
# Code will only be injected in build environment
# TODO: extract to MM extension
set :ga_key, 'UA-29279606-1'

# Change to your Disqus shortname.
# To Disable Disqus, leave unset or set to nil
# TODO: extract to MM extension
set :disqus_shortname, nil

# Locations.
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :partials_dir, 'partials'

after_configuration do
  # Add bower's directory to sprockets asset path.
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

# Ignores.
ignore '/calendar.html'
ignore '/feed.xml.builder'
ignore '/.bowerrc'
ignore '/.ruby-version'


######################################################################
# Blog settings.
######################################################################

Time.zone = "US/Eastern"

activate :blog do |blog|
  blog.prefix = 'news'
  blog.name = 'news'
  blog.permalink = '{year}/{title}'
  blog.taglink = "tags/{tag}"
  blog.default_extension = ".md"
  blog.layout   = "news"
  blog.paginate = true
  blog.per_page = 10
end


###########################
## Speakers
###########################
activate :blog do |blog|
  blog.name = "speakers"
  blog.prefix = 'speakers'
  blog.permalink = '{year}/{title}'
  blog.taglink = "tags/{tag}"
  blog.default_extension = ".md"
  blog.layout   = "speaker"
  blog.paginate = true
  blog.per_page = 10
end

(2007..2015).to_a.each do |year|
  proxy "/speakers/#{year}/index.html", "/speakers/year.html", locals: { year: year }
end

###########################
## Schedule
###########################
activate :blog do |blog|
  blog.name = "schedule"
  blog.prefix = 'schedule'
  blog.permalink = '{year}/{title}'
  blog.taglink = "tags/{tag}"
  blog.default_extension = ".md"
  blog.paginate = true
  blog.per_page = 10
end

###########################
## Organizers
###########################

activate :blog do |blog|
  blog.name = "organizers"
  blog.prefix = 'organizers'
  blog.permalink = '{year}/{title}'
  blog.taglink = "tags/{tag}"
  blog.default_extension = ".md"
  blog.layout   = "post"
  blog.paginate = true
  blog.per_page = 10
end

###########################
## Sponsors
###########################

activate :blog do |blog|
  blog.name = "sponsors"
  blog.prefix = 'sponsors'
  blog.permalink = '{year}/{title}'
  blog.taglink = "tags/{tag}"
  blog.default_extension = ".md"
  blog.layout   = "post"
  blog.paginate = true
  blog.per_page = 10
end

# Enable XML feed. Don't forget to edit feed.xml.builder first.
# page "/feed.xml", layout: false


######################################################################
# Development environment.
######################################################################

configure :development do
  activate :livereload, apply_js_live: false, apply_css_live: false
end


######################################################################
# Build environment.
######################################################################

configure :build do
  activate :relative_assets
  set :trailing_slash, false
  activate :directory_indexes
  activate :asset_hash

  # Ensmallen assets
  activate :minify_html, remove_input_attributes: false
  activate :minify_css
  activate :minify_javascript
  # activate :image_optim
  activate :gzip, exts: %w(.js .css .html .htm .svg .ttf .otf .woff .eot)
end
