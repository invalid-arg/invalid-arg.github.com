require 'rubygems'
require 'jekyll'
require 'tmpdir'

# Change your GitHub reponame
GITHUB_REPONAME = "mat-mcloughlin/mat-mcloughlin.github.com"
TEMP_DIRECTORY = "c:\\temp\\blog_upload"


desc "Generate blog files"
task :generate do
  system "Jekyll build --source . --destination _site"
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  system "mkdir \"#{TEMP_DIRECTORY}\""
  cp_r "_site/.", TEMP_DIRECTORY
  Dir.chdir TEMP_DIRECTORY
  system "git init"
  system "git add ."
  message = "Site updated at #{Time.now.utc}"
  system "git commit -m \"#{message}\""
  system "git remote add origin https://github.com/#{GITHUB_REPONAME}.git"
  system "git push origin master --force"
  rm_rf TEMP_DIRECTORY
end
