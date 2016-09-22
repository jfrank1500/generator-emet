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
        this.model = this.config.getAll();
    },
    writing: function () {
        var model = this.model;
        this._t('_login.controller.js', 'app/modules/login/login.controller.js', model);
        this._t('_login.html', 'app/modules/login/login.html', model);
        this._t('_login.route.js', 'app/modules/login/login.route.js', model);
    },
    _welcome: function () {
        this.option('welcome', {
            type: Boolean,
            default: true,
            desc: "Display welcome message"});
        if (this.options.welcome) {
            this.log(yosay(
                    'Welcome to ' + chalk.red('Emet') + ':login subgenerator!'
                    ));
        }
    },
    _t: function (source, destiny, model) {
        this.fs.copyTpl(this.templatePath(source), this.destinationPath(destiny), model);
    }
});
