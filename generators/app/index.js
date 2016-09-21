'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  initializing: function() {

  },
  prompting: function() {
    this.log(yosay(
      'Welcome to ' + chalk.red('Emet') + ' generator!'
    ));
    var prompts = [{
      type: 'input',
      name: 'appname',
      message: 'Your project name',
      default: this.appname
    }, {
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function(props) {
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), {
      props: this.props
    });
    this.fs.copyTpl(this.templatePath('_config.xml'), this.destinationPath('config.xml'), {
      props: this.props
    });
    this.fs.copyTpl(this.templatePath('_Gruntfile.js'), this.destinationPath('Gruntfile.js'), {
      props: this.props
    });
    this.fs.copyTpl(this.templatePath('_ionic.config.json'), this.destinationPath('ionic.config.json'), {
      props: this.props
    });
    this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), {
      props: this.props
    });
  },

  install: function() {
    this.installDependencies();
  },

  end: function() {
    yosay('Good bye');
  }
});
