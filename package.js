Package.describe({
  name: 'ox2:buttons',
  summary: 'Button styles',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@1.0.7'
    ]);
  api.addFiles('lib/oo-color-variables.import.less', C);
  api.addFiles('lib/oo-buttons.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:buttons');
  api.addFiles('tests/00-buttons-tests.js');
});
