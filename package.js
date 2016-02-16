Package.describe({
  name: 'ox2:buttons',
  version: '1.5.0',
  // Brief, one-line summary of the package.
  summary: 'DO NOT USE',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: ''
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'ecmascript',
    'session',
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3',
    'mquandalle:jade@0.4.1',
    'ox2:inject-style@1.0.0',
    'ox2:colors@1.2.0'
    ]);
  api.addFiles('lib/oo-buttons.less', C);
  api.addFiles('lib/oo-buttons.jade', C);
  api.addFiles('lib/oo-buttons-theming.js', C);

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:buttons');
  api.addFiles('tests/oo-buttons-tests.js');
});
