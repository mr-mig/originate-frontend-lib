var glob = require('glob');

exports.before = function(next, env) {
  env.appName = env.args[0];
  env.globalName = env.args[1] || '_' + env.appName;
  next();
};

exports.present = function(next, env) {
  next({
    appName: env.appName,
    headerChars: env.appName.split('').map(function() { return '='; }).join('')
  })
};

// just grab all the templates in the directory so you don't have to configure them
exports.templates = glob.sync(__dirname+'/../templates/**/*.hbs').map(function(template) {
  var base = __dirname.replace(/generators$/, '')+'templates/';
  return template.replace(base, '');
});

// save to the same relative location as they are in the loom templates directory
exports.savePath = function(next, env, template) {
  next(env.args[0]+'/'+template.replace('.hbs', ''));
};

exports.after = function(next, env) {
  console.log('\n\n'+env.args[0]+' created, open '+env.args[0]+'/README.md for instructions\n');
  next();
};

