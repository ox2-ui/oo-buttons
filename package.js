Package.describe({
  name: 'ox2:buttons',
  summary: 'TESTING_DO_NOT_USE Button styles',
  version: '1.4.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'ecmascript',
    'session'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3',
    'ox2:inject-style@1.0.0',
    'ox2:colors@1.2.0'
    ]);
  api.addFiles('lib/oo-buttons.less', C);
  api.addFiles('lib/oo-buttons-theming.js', C);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:buttons');
  api.addFiles('tests/oo-buttons-tests.js');
});
