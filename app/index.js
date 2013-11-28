'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var SalsaGenerator = module.exports = function SalsaGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SalsaGenerator, yeoman.generators.Base);

SalsaGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  cb();
};

SalsaGenerator.prototype.app = function app() {
  this.mkdir('public');
  this.mkdir('public/images');
  this.mkdir('public/javascripts');
  this.mkdir('public/stylesheets');
  this.mkdir('config');
  this.mkdir('config/environments');
  this.mkdir('routes');
  this.mkdir('views');

  this.directory('public');
  this.directory('routes');
  this.directory('views');
  this.directory('config');

  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/views');
  this.directory('app');
  this.mkdir('test');
  this.mkdir('test/spec');
  this.mkdir('test/spec/controllers');
  this.directory('test');
};

SalsaGenerator.prototype.projectfiles = function projectfiles() {
  // Config
  this.copy('_gitignore', '.gitignore');
  this.copy('_bowerrc', '.bowerrc');
  this.copy('_editorconfig', '.editorconfig');
  this.copy('_jshintrc', '.jshintrc');
  this.copy('_package.json', 'package.json');

  // Client
  this.copy('_bower.json', 'bower.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_karma-e2e.conf.js', 'karma-e2e.conf.js');
  this.copy('_karma.conf.js', 'karma.conf.js');

  // Server
  this.copy('_app.js', 'app.js');
  this.copy('_app_grunt.js', 'app_grunt.js');
  this.copy('_server.js', 'server.js');
};
