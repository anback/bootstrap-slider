Package.describe({
  name: 'bootstrap-slider',
  version: '5.1.1',
  summary: "A complete rewrite of the original bootstrap-slider by Stefan Petre. Packaged with dependency to twbs:bootstrap (Bootstrap 3)",
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('twbs:bootstrap','client');
  api.addFiles('bootstrap-slider.min.css');
  api.addFiles('bootstrap-slider.min.js');
});