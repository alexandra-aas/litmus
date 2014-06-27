helpers do
  def nav_active(url)
    current_page.url == url ? 'active"' : ''
  end
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'
