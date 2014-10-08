Package.describe({
  name: 'matteodem:hallo',
  summary: "Hallo rich text editor repackaged for meteor",
  version: "1.0.4",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');

  api.use(['jquery'], 'client');
  api.use(['mrt:rangy', 'mizzao:jquery-ui']);
  api.imply(['mrt:rangy', 'mizzao:jquery-ui']);

  api.addFiles('lib/hallo.js', 'client');
});
