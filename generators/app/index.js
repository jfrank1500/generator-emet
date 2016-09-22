'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    constructor: function () {
        yeoman.Base.apply(this, arguments);
        this._welcome();
    },
    initializing: function () {
        this.config.defaults({
            appname: this.appname,
            appid: "appid"
        });
        this.model = this.config.getAll();
        this.composeWith('emet:about', {
            options: {
                welcome: false
            }});
        this.composeWith('emet:list', {
            options: {
                welcome: false
            }, args: [
                "posts"
            ]});
        this.composeWith('emet:form', {
            options: {
                welcome: false
            }, args: [
                "post"
            ]});
    },
    prompting: function () {
        var that = this;
        var model = that.model;
        var prompts = [
            {type: 'input', name: 'appname', message: 'Your project name', default: model.appname},
            {type: 'input', name: 'appid', message: 'Your project id', default: model.appid},
            {type: 'confirm', name: 'execute', message: 'Confirm code generation?', default: false}];

        return this.prompt(prompts).then(function (properties) {
            if (!properties.execute) {
                this.env.error("Code generation cancelled.");
            } else {
                delete properties.execute;
            }
            for (var key in properties) {
                if (properties.hasOwnProperty(key)) {
                    that.model[key] = properties[key];
                }
            }
        }.bind(this));
    },
    writing: function () {
        var model = this.model;
        // Root
        this._t('_bower.json', 'bower.json', model);
        this._t('_config.xml', 'config.xml', model);
        this._t('_Gruntfile.js', 'Gruntfile.js', model);
        this._t('_ionic.config.json', 'ionic.config.json', model);
        this._t('_package.json', 'package.json', model);
        // Index
        this._t('_index.html', 'app/index.html', model);
        this._t('_index.js', 'app/modules/index.js', model);
        this._t('_basic.filter.js', 'app/modules/filters/basic.filter.js', model);
        this._t('_basic.module.js', 'app/modules/basic.module.js', model);
        // Resources
        this._c('logo.png', 'app/resources/logo.png');
        this._c('styles.css', 'app/resources/styles.css');
    },
    install: function () {
        this.installDependencies();
    },
    end: function () {
        this.config.set(this.model);
        this.config.save();
        yosay('Good bye');
    },
    _welcome: function () {
        this.option('welcome', {
            type: Boolean,
            default: true,
            desc: "Display welcome message"});
        if (this.options.welcome) {
            this.log(yosay(
                    'Welcome to ' + chalk.red('Emet') + ' generator!'
                    ));
        }
    },
    _t: function (source, destiny, model) {
        this.fs.copyTpl(this.templatePath(source), this.destinationPath(destiny), model);
    },
    _c: function (source, destiny, model) {
        this.fs.copy(this.templatePath(source), this.destinationPath(destiny), model);
    }
});
